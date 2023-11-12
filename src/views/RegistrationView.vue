<template>
    <div class="container">
    <div class="container bg-overlay1">
      <div class="row text-center" >
        <div class="client-list-wrapper">
          <ul class="client-list" ref="clientList">
            <h4 v-if="filteredItems.length === 0">Loading....</h4>
            <div v-else>
              <div class="client-card" v-for="item in filteredItems" :key="item.id">
                <div class="client-banner">
                <div class="logo-wrapper">
                  <img :src="item.logo_url" :alt="item.client_name + ' Logo'" class="logo" />
                </div>
                <div class="client-details">
                  <h4 class="institute-name">{{ item.client_name }}</h4>
                  <p class="address">{{ item.client_address }}</p>
                  <p class="phone">{{ item.client_phone }}</p>
                  <p class="fee">
                    Harga Yuran Sekitar
                    <br />
                    {{ item.client_fee == null ? '-' : 'RM' + parseFloat(item.client_fee).toFixed(2) }}
                  </p>
                  <p class="email">{{ item.client_email }}</p>
                </div>
                </div>
              </div>
            </div>
          </ul>
          </div>
          </div>
       </div>
    
      <div class="form-box">
      <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <h4 class="form--title" style="color:orangered">
Jom Sertai Kami            
          </h4>  
         
          <p id="registrationText">
            Borang ini adalah borang untuk Anak2U memaklumkan yang Tuan-Puan berminat berdaftar dengan {{ loadingText }}. Ia tidak memberi jaminan pendaftaran, sebaliknya pihak institusi akan menghubungi Tuan/Puan semula.
          </p>
          <h6>
            Sila isi maklumat bertanda *
          </h6>
        </div>

        <form @submit="submitForm" class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <label for="nama">Nama Anak*</label>
            <input class="form-control" v-model="nama" required type="text">
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="form-group">
                <label for="panggilanmanja">Nama Panggilan</label>
                <input class="form-control" v-model="panggilanmanja" type="text" />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="form-group">
                <label for="nomykid">No MyKid*</label>
                <input class="form-control" v-model="nomykid" required type="text" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4">
              <div class="form-group">
                <label for="jantina">Jantina*</label>
                <div class="form-control">
                  <div class="radio-group">
                    <label class="radio-label" style="width: 50px">
                      Lelaki
                    </label>
                    <input v-model="jantina" required type="radio" value="lelaki" class="radio-input" style="width: 8%; margin-right: 20px" />

                    <label class="radio-label">
                      Perempuan
                    </label>
                    <input v-model="jantina" type="radio" value="perempuan" class="radio-input" style="width: 5%" />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-4 col-md-4">
              <div class="form-group">
                <label for="tarikhlahir">Tarikh Lahir*</label>
                <input class="form-control" v-model="tarikhlahir" type="date" required />
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4">
              <div class="form-group">
                <label for="tempatlahir">Tempat Lahir*</label>
                <input class="form-control" v-model="tempatlahir" type="text" required />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4">
              <div class="form-group">
                <label for="bangsa">Bangsa*</label>
                <input class="form-control" v-model="bangsa" type="text" required />
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4">
              <div class="form-group">
                <label for="alamatrumah">Alamat Rumah*</label>
                <textarea class="form-control alamat" v-model="alamatrumah" rows="2" required></textarea>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4">
              <div class="form-group">
                <label for="gambar">Gambar Anak (Bersaiz Paspot)*</label>
                <input class="form-control choose-file" type="file" required />
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <h4 class="form--title">Maklumat Pengangkutan</h4>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6">
              <div class="form-group">
                <label for="namaibubapa">Servis Pengangkutan/Penghantaran?</label>
                <div class="radio-group">
                  <label class="radio-label" style="width: 20px;">Ya</label>
                  <input v-model="servistransport" type="radio" value="ya" style="width: 10%; margin-right: 20px" />
                  <label class="radio-label">Tidak</label>
                  <input v-model="servistransport" type="radio" value="tidak" style="width: 1%" />
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6">
              <div class="form-group">
                <label for="alamatpickup">Alamat Ambil:</label>
                <textarea class="form-control alamat" v-model="alamatAmbil" cols="20" rows="5"></textarea>
                <label style="margin-top: 14px !important;">Alamat Hantar:</label>
                <textarea class="form-control alamat" v-model="alamatHantar" cols="20" rows="5"></textarea>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-secondary" @click="cancelForm">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: '', // Your data for cityName
      filteredItems: [], // Your data for filteredItems
      paginatedClientItems: [], // Your data for paginatedClientItems
      loadingText: '', // Your data for loadingText
      nama: '',
      panggilanmanja: '',
      nomykid: '',
      jantina: '',
      tarikhlahir: '',
      tempatlahir: '',
      bangsa: '',
      alamatrumah: '',
      servistransport: '',
      alamatAmbil: '',
      alamatHantar: '',
    };
  },
  mounted() {
      
      this.stateId = localStorage.getItem('selectedStateId');
      this.cityName = localStorage.getItem('selectedStateCity');
      this.fetchData(this.stateId, this.cityName);
   
     
    },
    methods: {  
        async fetchData(stateId, cityName) {
          try {
            const clientSlug = this.$route.params.taskaSlug;
            // console.log(clientSlug)
            const clientResponse = await fetch(`https://api-explore.anak2u.com.my/api/clients-filter`)
            const daerahResponse = await fetch(`https://api-explore.anak2u.com.my/api/cities/${stateId}`)
            const tadikaResponse = await fetch(`https://api-explore.anak2u.com.my/api/clients/negeri/${cityName}`)// Fetch tadika data
            
            const clientData = await clientResponse.json();
            const daerahData = await daerahResponse.json();
            const tadikaData = await tadikaResponse.json();

            this.filteredItems = clientData.filter((item) => {
              //console.log(item.state_id, stateId)
              return item.state_id == stateId && item.client_slug == clientSlug
              
            });
            this.daerah = daerahData;
            this.tadika = tadikaData; 

            // console.log(this.filteredItems)
           
          } catch (error) {
            // Handle errors here
            console.error("Error:", error);
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
      }
  };
</script>

<style scoped>
body {
  font-family: 'Montserrat', sans-serif;
  background-color: #f5f5f5; /* Light gray background */
  margin: 0;
  padding: 0;
}

.container {
  max-width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
}

.title {
  font-size: 30px;
  color: #3498db; /* Light blue for title */
  background-color: #fff; /* White background */
  padding: 20px 0;
  margin: 0;
}

.description {
  color: #777; /* Gray text */
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.client-list-wrapper {
  background-color: #f5f5f5; /* Light gray background */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.client-card {
  display: flex;
  align-items: center;
  margin: 20px 0;
  border: 1px solid #e0e0e0; /* Light gray border */
  border-radius: 5px;
  background-color: #fff;
}

.client-banner {
  flex-basis: 100%;
  text-align: center;
  background-color: #3498db; /* Light blue banner */
  padding: 20px 0;
  margin: 0;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
}

.logo {
  max-width: 100px; /* Adjust the size as needed */
  max-height: 80px;
}

.client-details {
  flex-grow: 1;
  padding: 0 20px;
}

.institute-name {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
  color: #333; /* Dark text color */
}

.address,
.phone,
.fee,
.email {
  font-size: 16px;
  margin: 5px 0;
}

.form-box {
  background-color: #fff;
  margin-top: 20px;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form--title {
  font-size: 24px;
  color: #3498db; /* Light blue title */
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  font-size: 16px;
}

.choose-file {
  margin-top: 10px;
}

.radio-group {
  display: flex;
  align-items: center;
}

.radio-label {
  margin-right: 10px;
}

.radio-input {
  width: 20px;
}

.btn {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  margin-right: 10px;
}

.btn-primary {
  background-color: #3498db;
  color: #fff;
  border: none;
}

.btn-secondary {
  background-color: #ccc;
  color: #000;
  border: none;
}

button:hover {
  background-color: #2183b7; /* Slightly darker blue on hover */
}

.text-center {
  text-align: center;
}
</style>

