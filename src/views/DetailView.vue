<template>
  <section class="info">
    <Header/>
    <div class="container-details">
      <div class="row">
        <div class="col-md-9">
          <div class="background-center">
            <div class="heading">
              <h4 class="heading--title">Latar Belakang Maklumat</h4>
            </div>
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
            <div class="col-md-12">
              <ul class="list-unstyled mb-20 grid-3x3">
                <div class="grid-item">
                  <i class="fas fa-question-circle icon-with-text"></i>
                  <div class="grid-text">
                    <span>Status</span>
                    <p>Recommended</p>
                  </div>
                </div>
                <div class="grid-item">
                  <i class="fa fa-graduation-cap icon-with-text"></i>
                  <div class="grid-text">
                    <span>Jenis Institusi</span>
                    <p id="category">{{ category }}</p>
                  </div>
                </div>
                <div class="grid-item">
                  <i class="fa fa-users icon-with-text"></i>
                  <div class="grid-text">
                    <span>Jumlah Pelajar</span>
                    <p id="students">{{ students }}</p>
                  </div>
                </div>
                <div class="grid-item">
                  <i class="fas fa-map-marker-alt icon-with-text"></i>
                  <div class="grid-text">
                    <span>Lokasi</span>
                    <p id="location">{{ location }}</p>
                  </div>
                </div>
                <div class="grid-item">
                  <i class="fa fa-bell icon-with-text"></i>
                  <div class="grid-text">
                    <span>Hari Buka</span>
                    <p id="open">{{ open }}</p>
                  </div>
                </div>
                <div class="grid-item">
                  <i class="far fa-bell icon-with-text"></i>
                  <div class="grid-text">
                    <span>Hari Tutup</span>
                    <p id="close">{{ close }}</p>
                  </div>
                </div>
                <div class="grid-item">
                  <i class="fa fa-book icon-with-text"></i>
                  <div class="grid-text">
                    <span>Method</span>
                    <p id="method">{{ method }}</p>
                  </div>
                </div>
                <div class="grid-item">
                  <i class="fa fa-sign-language icon-with-text"></i>
                  <div class="grid-text">
                    <span>Program</span>
                    <p id="program">{{ program }}</p>
                  </div>
                </div>
                <div class="grid-item">
                  <i class="fa fa-comments icon-with-text"></i>
                  <div class="grid-text">
                    <span>Language</span>
                    <p id="language">{{ language }}</p>
                  </div>
                </div>
              </ul>
            </div>
            <div class="col-md-12" style="margin-left: 40px;">
              <p id="about" style="font-size: 14px; margin-left: -20px;">{{ about }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="facebook" style="text-align: start; margin-bottom: 10px;">
            <div style="margin-left: 10px;">
              <div class="heading">
                <h4 class="heading--title">Hubungi Tadika</h4>
              </div>
              <div class="contact">
                <h4 id="owner">{{ owner }}</h4>
                <ul style="list-style: none;">
                  <li>
                    <i class="fa fa-facebook social-icon" id="fbIcon" @click="openFacebook" ></i>
                    <i class="fa-brands fa-instagram social-icon" id="igIcon" @click="openInstagram"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="facebook">
            <div class="heading">
              <i class="far fa-clock icon-with-text"></i>
              <h4 class="heading--title">Masa Buka</h4>
            </div>
            <div class="open">
              <p style="font-size: 13px; font-weight: bold;" id="open_day">{{ open_day }}</p>
              <p style="font-size: 13px; font-weight: bold;" id="timeRange">{{ timeRange }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <Footer />

  </section>
</template>


<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';


export default {
  name: "DetailComponent",
  data() {
    return {
      cityName: "",
      filteredItems: [],
      category: "Tadika",
      about: '',
      students: 'null',
      location: 'Malaysia',
      open:'Monday-Friday',
      close: 'Sunday & Saturday',
      method: null,
      program: '4years',
      language: 'Malay & English',
      address: null,
      bandar: null,
      negeri: null,
      poskod: null,
      mapURL: null,
      open_day: null,
      timeRange: '9.00 a.m. - 1.00 p.m.',
      owner: null,
    };
  },
  mounted() {
    this.stateId = localStorage.getItem("selectedStateId");
    this.cityName = localStorage.getItem("selectedStateCity");
    this.fetchData(this.stateId, this.cityName);
  },
  methods: {
    async fetchData(stateId) {
      try {
        const clientSlug = this.$route.params.taskaSlug;
        const clientResponse = await fetch(`https://api-explore.anak2u.com.my/api/clients-filter`);
        const clientData = await clientResponse.json();
        this.filteredItems = clientData.filter((item) => {
          return item.state_id == stateId && item.client_slug == clientSlug;
        });
        // You should similarly populate other data properties like 'category', 'about', 'students', etc. from your API response.
      } catch (error) {
        console.error("Error:", error);
      }
    },
    openFacebook(fbPageURL) {
      if (fbPageURL) {
        window.location.href = fbPageURL;
      } else {
        console.error("Facebook page URL is not available");
      }
    },
    openInstagram(igPageURL) {
      if (igPageURL) {
        window.location.href = igPageURL;
      } else {
        console.error("Instagram page URL is not available");
      }
    },
  },
  components: { Footer, Header },
};
</script>

<style scoped>
body {
  font-family: 'Montserrat', sans-serif;
  background-color: #ddd;
}

.property-single-location {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 50%;
  margin-left: 10%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.background-center {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  margin-left: 20%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.facebook {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 35%;
  text-align: center;
  margin-left: 30%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.heading--title {
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  color: #34495e;
}

ul.list-unstyled {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

li span {
  font-weight: bold;
  margin-right: 10px;
  color: #34495e;
}

iframe {
  width: 100%;
  height: 380px;
  border: 0;
}

/* Add this CSS in your <style> section */
.grid-3x3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  column-gap: 50px;
  margin-left: 40px;
}

.grid-3x3 li {
  padding: 10px;
  text-align: start;
  background-color: #fff;
}

.grid-3x3 li span {
  font-weight: bold;
  font-size: 14px;
}

.grid-3x3 p {
  margin: 0;
  font-size: 12px;
}

.grid-4x1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.grid-4x1 li {
  padding: 10px;
  text-align: center;
  background-color: #fff;
  display: flex;
}

.grid-4x1 li span {
  font-weight: bold;
  display: inline-block;
  font-size: 15px;
}

.grid-4x1 p {
  margin: 0;
  display: inline-block;
  font-size: 14px;
}

.info .row {
  display: flex;
  flex-wrap: wrap;
}

.info .col-md-9,
.info .col-md-3 {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
}
.logo {
  width: 60px;
  height: 60px;
}

/* Adjust the size and style of the social icons */
.social-icon {
  cursor: pointer;
  font-size: 24px;
  margin-right: 10px;
  color: #3498db;
}

/* Make the font size for the program details a bit larger */
.grid-4x1 p {
  margin: 0;
  display: inline-block;
  font-size: 16px;
}

/* Set a max width for the contact and opening hours sections */
.facebook {
  max-width: 260px;
}

/* Ensure a maximum width for the opening hours section as well */
.facebook:last-child {
  max-width: 260px;
}

/* Adjust the width of columns as needed */
.info .col-md-9 {
  width: 50%;
}

.info .col-md-3 {
  width: 50%;
}

.icon-with-text {
  vertical-align: middle;
  margin-top: 18px;
  font-size: 20px;
  color: #949494;
  margin-right: 10px;
}

.social-icon {
  cursor: pointer;
}
</style>
