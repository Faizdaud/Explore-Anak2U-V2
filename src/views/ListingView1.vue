<template>
  <section>
    <Search @search="handleSearch" />
    <div class="senarai-tadika">
    <div class="container">
      <div class="lists-container">
        <ul class="district-list" ref="districtList">
          <h4>Mengikut Daerah</h4>
          <li v-for="district in filteredDistricts" :key="district.id" class="district-item" @click="selectCity(district.id)">
            {{ district.name }} ({{ district.count }})
          </li>
        </ul>
        <div class="client-list-wrapper">
          <div class="state-title">{{ stateTitle }}</div>
          <ul class="client-list" ref="clientList">
            <h4 v-if="clientItems.length === 0">Loading...</h4>
            <div v-else>
              <div
                class="client-card"
                v-for="item in filteredClientItems"
                :key="item.id"
                @click="handleInstituteNameClick(item.client_slug)"
              >
                <div class="thumb-wrapper">
                  <img :src="item.logo_url" :alt="item.client_name + ' Logo'" />
                </div>
                <h4 class="institute-name">{{ item.client_name }}</h4>
                <p>{{ item.client_address }}</p>
                <p class="yuran">Harga Yuran Sekitar</p>
              </div>
            </div>
          </ul>
        </div>
     </div>
     </div>
    </div>
  </section>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
  name: "ListingComponent",
  components:{
    Search
  },
  data() {
    return {
      stateTitle: "",
      cities: [],
      clientItems: [],
      filteredItems: [],
      districts: [],
      selectedCityId: null,
      searchTerm: '', // Add the search term variable
    };
  },
  mounted() {
    const stateId = new URLSearchParams(window.location.search).get("state_id");
    this.fetchData(stateId);
  },
  methods: {
async fetchData(stateId) {
  try {
    const [clientResponse, cityResponse, districtResponse, tadikaResponse] = await Promise.all([
      fetch(`https://api-explore.anak2u.com.my/api/clients-filter`),
      fetch(`https://api-explore.anak2u.com.my/api/cities/${stateId}`),
      fetch(`https://api-explore.anak2u.com.my/api/districts/${stateId}`),
      fetch(`https://api-explore.anak2u.com.my/api/tadika/${stateId}`), // Fetch tadika data
    ]);
    const [clientData, cityData, districtData, tadikaData] = await Promise.all([
      clientResponse.json(),
      cityResponse.json(),
      districtResponse.json(),
      tadikaResponse.json(),
    ]);

    this.filteredItems = clientData.filter((item) => item.state_id === Number(stateId));
    this.displayClientCards(this.filteredItems);

    this.cities = cityData;
    this.districts = districtData;
    this.tadika = tadikaData; // Set the fetched tadika data to a data property

    document.querySelector(".city-list h4").style.display = "block";
  } catch (error) {
    console.error("Error fetching data:", error);
  }
},

    selectCity(cityId) {
      this.selectedCityId = cityId;
      const filteredItems = this.filteredItems.filter(item => {
        return item.city_id === Number(cityId) || item.district_id === Number(cityId);
      });
      this.displayClientCards(filteredItems);
    },
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm;
      // Implement logic to filter cities, districts, and clientItems based on the search term
      this.filteredItems = this.clientItems.filter(item => {
        return (
          item.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.client_address.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    },
  },
  computed: {
    filteredCities() {
      return this.cities.filter(city => {
        return city.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },
    filteredDistricts() {
      return this.districts.filter(district => {
        return district.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },
    filteredClientItems() {
      return this.filteredItems.filter(item => {
        return (
          item.client_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.client_address.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    },
  },
};
</script>




<style >

 .lists-container {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: flex-start;
  }
  .client-list-wrapper {
    flex: 2;
    display: flex;
    flex-direction: column;
margin-left: 40px;
  }

  .state-title {
    font-size: 24px; /* Adjust font size as needed */
    margin-bottom: 10px; /* Add some spacing below the state title */
    font-family: 'Your Chosen Font', sans-serif; /* Specify the font family */
  }
  .client-list {
    flex: 2;
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
    .client-card {
      flex: 0 0 calc(30% - 20px);
      width: 250px;
      height: 350px; /* Adjusted height to accommodate the image and address */
      margin: 10px;
      padding: 20px;
      border: 1px solid #ffffff;
      border-radius: 8px;
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: inline-block; /* Display cards in a row */
    }

    .client-card h4 {
      margin: 1;
      font-size: 13px;
      font-family: 'Montserrat', sans-serif;
     height: 40px; 
      overflow: hidden; 
margin-bottom: -5px;
text-align: center;
    }

    .thumb-wrapper {
    width: 100px;
    height: 100px;
    overflow: hidden;
    margin: 0 auto;
margin-bottom: 15px;
  }

  .thumb-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .client-card h4:hover{
cursor: pointer;
        color: #27aae2;
    }
    .client-card p {
      margin-top: 10px;
      padding: 10px;
      height: 100px; /* Adjusted height for the address */
      overflow: hidden;
      font-size:11px;
      font-weight: 500;
      font-family: 'Montserrat', sans-serif;
      text-align: center;
    }
    .district-list {
  flex: 1;
  max-width: 250px; 
  border: 1px solid #ffffff;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
    .district-item {
    cursor: pointer;
    padding: 5px;
    list-style-type: none; 
    text-align: center; 
    font-family: 'Montserrat', sans-serif;
  }

    .district-list label {
      font-weight: bold;
      display: block;
      margin-bottom: 5px;
      
    }

    .district-list ul {
      list-style-type: none;
      padding: 0;
    }

    .district-list li {
      margin-bottom: 5px;
      cursor: pointer;
    }

    .district-list li:hover {
      text-decoration: underline;
color: #27aae2;
    }
.district-list h4{
      margin-bottom: -20px;
      font-size: 16px;
      font-family: 'Montserrat', sans-serif;
      height: 60px; 
      overflow: hidden; 
      font-weight: 600;
text-align: center;
    }
.state-title{
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
    }
</style>
