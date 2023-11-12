<template>
  <div class="container">
    <div class="container bg-overlay1">
      <div class="row text-center" style="margin-top: 120px">
        <h1
          style="
            font-size: 50px;
            -webkit-text-stroke: 1px black;
            color: white;
            text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
          "
        >
          Jom daftar bersama kami!
        </h1>
        <p style="color: rgba(238, 234, 234, 0.808); font-size: 20px; text-align: center"></p>

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
                  <br />
                  {{ item.client_fee == null ? '-' : 'RM' + parseFloat(item.client_fee).toFixed(2) }}
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div class="form-box">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <h4 class="form--title">
            Maklumat Anak.
            <span style="color: #F6A420" id="clientNameSpan"> Pendaftaran Untuk {{ loadingText }} </span>
          </h4>
          <p id="registrationText">
            Borang ini adalah borang untuk Anak2U memaklumkan yang Tuan-Puan berminat berdaftar dengan {{ loadingText }}. Ia tidak memberi jaminan pendaftaran, sebaliknya pihak institusi akan menghubungi Tuan/Puan semula.
          </p>
          <h6>
            Sila isi maklumat bertanda *
          </h6>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <label for="nama">
              Nama Anak*
            </label>
            <input class="form-control" v-model="nama" required type="text">
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6">
          <div class="form-group">
            <label for="panggilanmanja">
              Nama Panggilan
            </label>
            <input class="form-control" v-model="panggilanmanja" type="text" />
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6">
          <div class="form-group">
            <label for="nomykid">
              No MyKid*
            </label>
            <input class="form-control" v-model="nomykid" required type="text" />
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <div class="form-group">
            <label for="jantina">
              Jantina*
            </label>
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
            <label for="tarikhlahir">
              Tarikh Lahir*
            </label>
            <input class="form-control" v-model="tarikhlahir" type="date" required />
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <div class="form-group">
            <label for="tempatlahir">
              Tempat Lahir*
            </label>
            <input class="form-control" v-model="tempatlahir" type="text" required />
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <div class="form-group">
            <label for="bangsa">
              Bangsa*
            </label>
            <input class="form-control" v-model="bangsa" type="text" required />
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <div class="form-group">
            <label for="alamatrumah">
              Alamat Rumah*
            </label>
            <textarea class="form-control alamat" v-model="alamatrumah" rows="2" required></textarea>
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <div class="form-group">
            <label for="gambar">
              Gambar Anak (Bersaiz Paspot)*
            </label>
            <input class="form-control choose-file" type="file" @change="onGambarChange" required />
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <div class="form-group">
            <label for="filemykid">
              Salinan MyKid Anak*
            </label>
            <input accept="image/jpeg,image/png,application/pdf" class="form-control choose-file" type="file" @change="onFileMyKidChange" required />
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
              <textarea class="form-control alamat" v-model="alamatAmbil" cols="30" rows="10"></textarea>
              <label style="margin-top: 14px !important;">Alamat Hantar:</label>
              <textarea class="form-control alamat" v-model="alamatHantar" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>
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
            background-color: white;
            margin: 0;
            padding: 0;
        }


        .container {
            max-width: 800px; /* Adjust the maximum width of the container */
            margin: 0 auto;
            padding: 20px;
            text-align: center;
        }

        .logo {
            height: 100px;
            width: 100px;
            object-fit: contain;
            overflow: hidden;
            padding-bottom: 10px;
   
        }

        .logo::after {
            content: "";
            display: block;
            height: 100%;
            width: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        .title {
            font-size: 20px; /* Adjust the font size of the title */
            color: red;
            margin-top: 10px;
        }

        .address {
            font-size: 16px; /* Adjust the font size of the address */
            color: red;
            margin-top: 5px;
        }

        .breadcrumb {
            list-style: none;
            padding: 0;
            margin-top: 10px;
        }

        .breadcrumb li {
            display: inline;
            font-size: 14px; /* Adjust the font size of the breadcrumb */
            margin-right: 5px;
        }

        .breadcrumb a {
            text-decoration: none;
            color: blue;
        }

        .title{
            font-family: 'Montserrat', sans-serif;
            color: white;
            font-size: 20px;
            font-weight: 600;
            text-align: center;
        }
        .address{
            font-family: 'Montserrat', sans-serif;
            color: white;
            font-weight: 600;
            text-align: center;
            font-size: 16px;
        }
        .row {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
        }


        .form--title {
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
        }


        p, h6 {
            color: #777;
            font-size: 16px;
        }

        label {
            margin-bottom: 10px;
            font-weight: bold;
            margin-bottom: 5px;
        }


        input[type="text"],
        input[type="email"],
        input[type="date"],
        input[type="radio"],
        input[type="number"],
        textarea {
            width: 95%;
            padding: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
            font-size: 16px;

        }


        input[type="radio"] {
            margin-right: 5px;
            vertical-align: middle;
            
        }
        
        .radio-group {
            display: flex;
            flex-direction: row;
            padding: 10px;
            border-radius: 5px;
            margin-top: 10px;
            align-items: center;
        }
        .transport-section{
            margin-top: 40px;
        }

        .radio-option {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-right: 20px; 
        }

        .radio-option input[type="radio"] {
            margin-right: 50px; 
            margin-left: 100px;
        }

        .radio-group label,
        .radio-group input {
            display: inline-block;
            vertical-align: middle; 
        }

        .radio-label {
            width: 110px;
        }




        button {
            background-color: #3498db;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 200px;
            height: 50px;
            font-size: 15px;
            margin-top: 20px;
            margin-bottom: 30px;
            margin-left: 40px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
        }
        button:hover{
            background-color: #F6A420 ;
        }


        .table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }


        .table th {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
        }


        .table td {
            background-color: #f9f9f9;
            padding: 10px;
            text-align: center;
            border: 1px solid #ccc;
        }


        #sakitlaindetail {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
            font-size: 16px;
        }


        .col-xs-12 {
            margin-bottom: 15px;
        }
        
        .alamat{
            resize: none;
        }

        .larger-checkbox {
            width: 40px; 
            height: 40px; 
        }
        .choose-file{
           
            height: 30px;
            border-radius: 5px;
            display: flex;
            margin-top: 20px;
            text-align: center;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            
        }

        .info{
            width: 95%;
            margin-left: 2.5%;
            font-weight: 600;
        }

        input::placeholder {
            font-family: 'Montserrat', sans-serif;
        }
        
        .group-container {
            display: flex;
            align-items: center;
            margin-bottom: 10px; 
        }

        .group-container label {
            flex-basis: 30%;
            margin-right: 10px;
        }

        .group-container .form-control {
            flex-grow: 1;
        }
        .label-color{
            color: white;
        }
        .form-control[type="checkbox"] {
            transform: scale(1.5); /* You can adjust the scale factor as needed */
        }
</style>