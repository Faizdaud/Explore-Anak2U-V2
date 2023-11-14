<template>
    <section>
      <Search  />

      <modal v-if="isModalVisible" @close="closeModal">
        <h2>Registration Form</h2>
        <div>
          
        </div>
      </modal>
      <div class="senarai-tadika" style="background-color: #F1F6FC">
        <div class="container">
          <div class="lists-container">
            <ul class="district-list" ref="districtList">
              <h4>Mengikut Daerah</h4>
              <li v-for="district in daerah" :key="district.id" class="district-item" @click="selectCity(district.id)">
                {{ district.name }} ({{ district.count }})
              </li>
            </ul>
            <div class="client-list-wrapper">
              <div class="state-title">{{ cityName }}</div>
              <ul class="client-list" ref="clientList">
                <h4 v-if="filteredItems.length === 0">Loading....</h4>
                <div v-else>
                  <div
                    class="client-card"
                    v-for="item in paginatedClientItems"
                    :key="item.id"
                    @click="handleInstituteNameClick(item.client_slug)"
                  >
                    <div class="thumb-wrapper">
                      <img :src="item.logo_url" :alt="item.client_name + ' Logo'" />
                    </div>
                    <h4 class="institute-name">{{ item.client_name }}</h4>
                    <p>{{ item.client_address }}</p>
                    <p class="yuran">
                      Harga Yuran Sekitar
                      <br>
                      {{ item.client_fee == null ? '-' : 'RM' + parseFloat(item.client_fee).toFixed(2) }}
                    </p>
                    <div>
                      <a class="btn-register" @click="redirectToRegisterPage(item.client_slug)">Register</a>
                      <a class="btn-detail" @click="redirectToDetailsPage(item.client_slug)">Detail</a>
                    </div>
                  </div>
                </div>
              </ul>

              <div class="pagination">
                <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
                <span>Page {{ currentPage }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  </template>
  
  <script>
import Search from '@/components/Search.vue';
import Modal from "@/components/Modal.vue"; 
import Footer from '@/components/Footer.vue';


  export default {
    name: "ListingComponent",
    components:{
    Search,
    Modal,
    Footer
},
    data() {
      return {
        stateTitle: "",
        daerah: [],
        clientItems: [],
        filteredItems: [],
        districts: [],
        selectedCityId: null,
        searchTadika: '', // Add the search term variable
        stateId : '',
        cityName: '',
        pageSize: 9, // Number of items per page
        currentPage: 1, // Current page
        isModalVisible: false,
        
      };
    },
    
    mounted() {
      
      this.stateId = localStorage.getItem('selectedStateId');
      this.cityName = localStorage.getItem('selectedStateCity');
      this.fetchData(this.stateId, this.cityName);
     
    },
    methods: {  
        openModal() {
          this.isModalVisible = true;
          // do the function here
        },
        closeModal() {
          this.isModalVisible = false;
        },
        
        async fetchData(stateId, cityName) {
            
            try {
            const [clientResponse, daerahResponse, tadikaResponse] = await Promise.all([
                fetch(`https://api-explore.anak2u.com.my/api/clients-filter`),
                fetch(`https://api-explore.anak2u.com.my/api/cities/${stateId}`),
                fetch(`https://api-explore.anak2u.com.my/api/clients/negeri/${cityName}`), // Fetch tadika data
            ]);
            const [clientData, daerahData, tadikaData] = await Promise.all([
                clientResponse.json(),
                daerahResponse.json(),
                tadikaResponse.json(),
                
            ]);
            

            this.filteredItems = clientData.filter((item) => item.state_id === Number(stateId));
            this.daerah = daerahData;
            this.tadika = tadikaData; 
           
        
            // document.querySelector(".city-list h4").style.display = "block";
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
        getStateTitle(){
            let _this = this;
            
            return this.statesData.filter(state => {
                return state.id == _this.stateId;
            });
        },
        previousPage() {
          if (this.currentPage > 1) {
            this.currentPage--;
          }
        },
        nextPage() {
          if (this.currentPage < this.totalPages) {
            this.currentPage++;
          }
        },

        redirectToDetailsPage(clientSlug) {
      this.$router.push({ path: `/details/${clientSlug}` }); // Replace with your route path
    },
    redirectToRegisterPage(clientSlug) {
      this.$router.push({ path: `/register/${clientSlug}` }); // Replace with your route path
    },
    },
    
    computed: {
        // filteredCities() {
        //     return this.cities.filter(city => {
        //         return city.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        //     });
        // },
        // filteredDistricts() {
        //     return this.districts.filter(district => {
        //         return district.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        //     });
        // },
        // filteredClientItems() {
        //     return this.filteredItems.filter(item => {
        //         return (
        //           item.client_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        //           item.client_address.toLowerCase().includes(this.searchTerm.toLowerCase())
        //         );
        //     });
        // },
         // Calculate the total number of pages
        totalPages() {
          return Math.ceil(this.filteredItems.length / this.pageSize);
        },
        // Slice the items for the current page
        paginatedClientItems() {
          const startIndex = (this.currentPage - 1) * this.pageSize;
          const endIndex = this.currentPage * this.pageSize;
          return this.filteredItems.slice(startIndex, endIndex);
        },
        
    },
  };
  </script>
  
  
  
  
  <style scoped >
   .senarai-tadika{
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
   }
   .lists-container {
      display: flex;
      gap: 20px;
      justify-content: space-between;
      align-items: flex-start;
      height: 100%;
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
      text-transform: uppercase;
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

    .yuran{
      height: unset !important;
    }
      .client-card {
        flex: 0 0 calc(30% - 20px);
        width: 250px;
        min-height: 300px; /* Adjusted height to accommodate the image and address */
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

      .btn-register, .btn-detail{
        display: block;
        margin-bottom: 4px;
        border-radius: 6px;
        padding: 10px 20px;
        background-color: #5e5e5e;
        text-decoration: none;
        color: white;
        cursor: pointer;
      }

      .btn-detail{
        background-color: #f45d8c;
      }

      /* Pagination container */
      .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      }

      /* Pagination buttons */
      .pagination button {
        background-color: #007BFF;
        color: #fff;
        border: none;
        padding: 10px 15px;
        margin: 0 5px;
        cursor: pointer;
        border-radius: 4px;
      }

      /* Disable previous button on the first page */
      .pagination button:disabled:nth-child(1) {
        background-color: #ccc;
        cursor: not-allowed;
      }

      /* Disable next button on the last page */
      .pagination button:disabled:last-child {
        background-color: #ccc;
        cursor: not-allowed;
      }

  </style>
  