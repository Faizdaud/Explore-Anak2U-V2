

<template>
  <div class="banner-container">
    <section class="senarai-tadika">
      <div class="custom-shape-divider-top-1699832272">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"></path>
        </svg>
      </div>
      <div class="container">
        <select v-model="selectedState" id="stateSelect">
          <option disabled value="">Pilih negeri</option>
          <option v-for="state in states" :key="state.id" :value="state">{{ state.city }}</option>
        </select>
        <button id="searchButton" @click="searchTadika">Carian</button>
      </div>
    </section>
    <div class="banner">

      <div class="text-center" style="display: flex; justify-content: center;">
              <h1 class="banner-title">
                Cari Tadika dan Taska Anda Sekarang
              </h1>
      </div>

      <div id="result">
        <!-- Result will be displayed here -->
        <!-- <p v-if="selectedState">Selected State ID: {{ selectedState }}</p> -->
        <!-- You can display more results here as needed -->
      </div>
      <div class="custom-shape-divider-bottom-1699832510">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"></path>
        </svg>
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
      try {
        if (this.selectedState) {
          const routePath = this.$router.resolve({
            name: 'negeri',
            // params: { stateId: this.selectedState.id } 
            params: { stateSlug:this.selectedState.slug,stateId: this.selectedState.id, cityName: this.selectedState.city }
          }).href;
          if (this.$route.path !== routePath) {
            localStorage.setItem('selectedStateSlug', this.selectedState.slug);
            localStorage.setItem('selectedStateId', this.selectedState.id);
            localStorage.setItem('selectedStateCity', this.selectedState.slug);
            // alert(this.selectedState.id, this.selectedState.city)
            await this.$router.push({
              name: 'negeri',
              params: { stateSlug:this.selectedState.slug, stateId: this.selectedState.id }
            });
            this.$router.go(0)
          }
        }
      } catch (err) {
        alert("err", err)
      }
    }
  }
};
</script>



<style>
.banner-container {
  position: relative;
  background-color: #01A099;
  /* Set the desired background color here */
  overflow: hidden;
  margin-top: -100px;
}

.banner {
  background-image: url("@/assets/banner2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: 500px;
  /* Adjusted to fill the container */
  width: 100%;
  /* Adjusted to fill the container */
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
  width: 200px;
  /* Adjust the width as needed */
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
  border-radius: 0px 10px 10px 0px;
  /* top-left, top-right, bottom-right, bottom-left */
  background-color: #01A099;
  font-family: 'Montserrat', sans-serif;
}

#stateSelect {
  width: 850px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 10px 0px 0px 10px;
  /* top-left, top-right, bottom-right, bottom-left */
}

@media only screen and (max-width: 600px) {
  select {
    width: 100%;
    /* Adjust the width for smaller screens */
  }
}

.custom-shape-divider-top-1699832272 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-top-1699832272 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 54px;
}

.custom-shape-divider-top-1699832272 .shape-fill {
  fill: #01A099;
}

.custom-shape-divider-bottom-1699832510 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1699832510 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 54px;
}

.custom-shape-divider-bottom-1699832510 .shape-fill {
  fill: #F1F6FC;
}

.banner-title{
  width: 300px;
  font-size: 50px;
  -webkit-text-stroke: 1px black;
  color: white;
  text-shadow:
  3px 3px 0 #000,
  -1px -1px 0 #000,
  1px -1px 0 #000,
  -1px 1px 0 #000,
  1px 1px 0 #000;
  margin-top: 10rem;
  text-wrap: wrap;

}
</style>
