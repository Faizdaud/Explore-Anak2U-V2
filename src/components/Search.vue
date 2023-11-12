

<template>
  <div class="banner-container">
    <section class="senarai-tadika">
        <div class="container">
          <select v-model="selectedState" id="stateSelect">
            <option disabled value="">Pilih negeri</option>
            <option v-for="state in states" :key="state.id" :value="state">{{ state.city }}</option>
          </select>
          <button id="searchButton" @click="searchTadika">Carian</button>

        </div>
      </section>
    <div class="banner" >

      <div id="result">
            <!-- Result will be displayed here -->
            <!-- <p v-if="selectedState">Selected State ID: {{ selectedState }}</p> -->
            <!-- You can display more results here as needed -->
          </div>
    </div>
    </div>
  </template>


<script>
export default {
  name: 'AppSearch',
  data() {
    return {
      states: [], // Store the fetched state data
      selectedState: '', // Store the selected state ID
    };
  },
  mounted() {
    // Fetch the state data from an API endpoint when the component is mounted
    this.fetchStateData();
  },
  methods: {
    async fetchStateData() {
      try {
        const response = await fetch('https://api-explore.anak2u.com.my/api/states');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.states = data; // Set the fetched data to the component's data property

      } catch (error) {
        console.error('Error fetching state data:', error);
        // You can display an error message to the user or take other appropriate action here.
      }
    },
    async searchTadika() {
      try{
        if (this.selectedState) {
          const routePath = this.$router.resolve({ 
            name: 'listing', 
            // params: { stateId: this.selectedState.id } 
            params: { stateId: this.selectedState.id, cityName: this.selectedState.city } 
          }).href;
          if (this.$route.path !== routePath) {
            localStorage.setItem('selectedStateId', this.selectedState.id);
            localStorage.setItem('selectedStateCity', this.selectedState.slug);
            // alert(this.selectedState.id, this.selectedState.city)
            await this.$router.push({ 
              name: 'listing', 
              params: { stateId: this.selectedState.id } 
            });
            this.$router.go(0)
          }
        }
      }catch(err){
        alert("err", err)
      }
    }
  }
};
</script>



<style>
.banner-container {
  position: relative;
  background-color: #01A099; /* Set the desired background color here */
  overflow: hidden;
  margin-top: -100px;
}

.banner {
  background-image: url("@/assets/banner2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: 500px; /* Adjusted to fill the container */
  width: 100%; /* Adjusted to fill the container */
  margin-top: -100px;
}

.senarai-tadika {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #FFDD14;
}

select {
  width: 200px; /* Adjust the width as needed */
  padding: 10px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: #01A099;
  color: white;
  border: none;
  cursor: pointer;
}

#result {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.result-item {
  flex: 0 0 calc(33.33% - 20px);
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f1f1f1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.result-item h4 {
  margin: 0;
  font-size: 16px;
}

#searchButton {
  width: 180px;
  border-radius: 0px 10px 10px 0px; /* top-left, top-right, bottom-right, bottom-left */
  background-color: #01A099;
  font-family: 'Montserrat', sans-serif;
}

#stateSelect {
  width: 850px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 10px 0px 0px 10px; /* top-left, top-right, bottom-right, bottom-left */
}

@media only screen and (max-width: 600px) {
  select {
    width: 100%; /* Adjust the width for smaller screens */
  }
}
</style>
