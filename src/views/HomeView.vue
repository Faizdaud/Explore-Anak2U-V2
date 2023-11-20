<template>
  <section>
    <Search />
    <div class="senarai-tadika-container">

      <div class="image-container2">
        <!-- <h4 class="combined-heading">SENARAI TADIKA <span class="pilihan">PILIHAN ANAK2U</span></h4> -->
        <h2>Senarai Tadika<b> Pilihan Anak2u</b></h2>
        <p class="huraian" style="margin-bottom: 2rem;" >Senarai tadika yang berdaftar dengan Kami</p>
      </div>
      <div class=" d-flex justify-content-center">
        <div class="swiper-container d-flex justify-content-center" id="carousel">
          <div class="col-12 swiper-wrapper">
            <div v-for="(item, index) in items.data" :key="index" class="swiper-slide" style="background: linear-gradient(to bottom, white 65%, #eb5a8c 35%);width: 150px;">
              <!-- <div class="item">
                <div class="thumb-wrapper">
                  <img :src="item.logo_url || defaultLogoUrl" alt="Kindergarten Logo"
                    style="width: 120px; height: 120px;" />
                </div>
                <div class="kindergarten-info">
                  <div class="buttons">
                    <button class="btn see-more" @click="redirectToDetailsPage(item.client_slug)">Details</button>
                    <button class="btn register" style="margin-left: 20px;"
                      @click="redirectToRegisterPage(item.client_slug)">Register</button>
                  </div>
                  <div class="info">
                    <h5 class="kindergarten-name">{{ item.client_name }}</h5>
                    <div>
                      <h6>Harga Yuran Sekitar</h6>
                      <h6>{{ item.client_fee !== null ? 'RM' + item.client_fee : 'RM -' }}</h6>
                    </div>
                  </div>
                </div>
              </div> -->
              <!-- <div class="thumb-wrapper"> -->
                <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                <div class="img-box">
                  <img :src="item.logo_url" class="img-responsive img-fluid" style="object-fit: contain;" alt="">
                </div>
                <div class="thumb-content" style="object-fit: contain;">
                  <div class="button-group">
                    <button type="button" class="btn btn-primary" @click="redirectToDetailsPage(item.client_slug)"
                      style=" width: 85px; height: 35px; margin-right: 5px; margin-bottom: 2;"> Lihat</button>
                    <button type="button" class="btn btn-info" @click="redirectToRegisterPage(item.client_slug)"
                      style=" width: 85px; height: 35px; margin-bottom: 2;"> Daftar</button>
                  </div>
                  <h4 style="display: block">{{ item.client_name }}</h4>
                  <p class="item-price"><!-- <strike>Rm 500.00</strike> -->Harga Yuran sekitar <br />
                    <strong> RM {{ item.client_fee }}.00</strong>
                  </p>

                </div>
              <!-- </div> -->
            </div>
          </div>

          <div class="swiper-pagination" style="text-align: center;"></div>
        </div>

      </div>

    </div><!--pengakhiran senarai tadika-->
    

    <section id="feature-anak2u" class="feature feature-1 text-center bg-white pb-90" style="position:relative;">
      <div class="custom-shape-divider-top-1699878859">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"></path>
        </svg>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="heading heading-2 text-center mb-70">
              <h2 class="heading--title">Apa itu Tadika Taska Pilihan Anak2U?</h2>
              <p class="heading--desc">Tadika pilihan Anak2U menggunakan aplikasi dan sistem pengurusan Anak2U. Aplikasi
                dan sistem kami membolehkan ibu-bapa mempunyai akses ke:</p>
            </div>
            <!-- .heading-title end -->
          </div>
          <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->
        <div class="row">
          <!-- feature Panel #1 -->
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="feature-panel">
              <div class="feature--icon">
                <!-- <span style="font-size: 72px;color: rgb(75,165,158);"><i class="fa fa-mobile"></i></span> -->
                <img src="@/assets/images/laporan digital.png" alt="Image 1">

              </div>
              <div class="feature--content">
                <h3>Laporan Digital</h3>
                <p>Laporan perkembangan secara digital. Terus pantau perkembangan anak-anak melalui aplikasi Anak2U</p>
              </div>
            </div>
            <!-- .feature-panel end -->
          </div>
          <!-- .col-md-4 end -->
          <!-- feature Panel #2 -->
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="feature-panel">
              <div class="feature--icon">
                <img src="@/assets/images/pembayaran.png" alt="Image 2">
              </div>
              <div class="feature--content">
                <h3>Pembayaran mudah</h3>
                <p>Pembayaran yuran atas talian yang lebih mudah melalui aplikasi Anak2U. Invois dan resit terus didapati
                  di dalam aplikasi.</p>
              </div>
            </div>
            <!-- .feature-panel end -->
          </div>
          <!-- .col-md-4 end -->
          <!-- feature Panel #3 -->
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="feature-panel">
              <div class="feature--icon">
                <img src="@/assets/images/pembelajaran digital.png" alt="Image 4">
              </div>
              <div class="feature--content">
                <h3>Pembelajaran Digital lebih menarik</h3>
                <p>Akses ke aplikasi pembelajaran alaf baru digital yang lebih menarik untuk perkembangan pembelajaran
                  anak-anak di rumah.</p>
              </div>
            </div>
            <!-- .feature-panel end -->
          </div>
          <!-- .col-md-4 end -->
        </div>
        <div class="row" style="margin-top: 32px">
          <!-- feature Panel #1 -->
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="feature-panel">
              <div class="feature--icon">
                <!-- <span style="font-size: 72px;color: rgb(75,165,158);"><i class="fa fa-bullhorn"></i></span> -->
                <img src="@/assets/images/komunikasi.png" alt="Image 3">
              </div>
              <div class="feature--content">
                <h3>Komunikasi mudah</h3>
                <p>Komunikasi antara ibu-bapa dan guru yang lebih mudah dan telus melalui fungsi pengumuman aplikasi
                  Anak2U.</p>
              </div>
            </div>
            <!-- .feature-panel end -->
          </div>

          <!-- .col-md-4 end -->
          <!-- feature Panel #2 -->
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="feature-panel">
              <div class="feature--icon">
                <img src="@/assets/images/pengurusan.png" alt="Image 5">
              </div>
              <div class="feature--content">
                <h3>Pengurusan lebih teratur</h3>
                <p>Tadika dan taska mempunyai pengurusan yang lebih teratur melalui sistem pengurusan Anak2U, solusi alaf
                  baru secara 'paperless'</p>
              </div>
            </div>
            <!-- .feature-panel end -->
          </div>
          <!-- .col-md-4 end -->
          <!-- feature Panel #3 -->
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="feature-panel">
              <div class="feature--icon">
                <img src="@/assets/images/akses bahan.png" alt="Image 6">
              </div>
              <div class="feature--content">
                <h3>Akses bahan pengajaran</h3>
                <p>Guru dan ibu-bapa mempunyai akses bahan pengajaran dan pembelajaran Anak2U, didikan awal tidak berhenti
                  di sekolah sahaja.</p>
              </div>
            </div>
            <!-- .feature-panel end -->
          </div>
          <!-- .col-md-4 end -->
        </div>
        <!-- .row end -->


      </div>
      <!-- .container end -->

      <div class="custom-shape-divider-bottom-1699878312">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"></path>
        </svg>
      </div>
    </section>


    <section id="feature" class="feature feature-1 text-center pb-90" style="background-color:#f1f6fc; position: relative !important;">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="heading heading-2 text-center mb-70">
              <h2 class="heading--title">Kaedah Penggunaan</h2>
              <p class="heading--desc">Terdapat 3 kaedah penggunaan sepertimana di bawah:</p>
            </div>
            <!-- .heading-title end -->
          </div>
          <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->
        <div class="row">
          <!-- feature Panel #1 -->
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="feature-panel">
              <div class="feature--icon">
                <img src="@/assets/images/cari tadika.png" alt="Anak2U carian tadika dan taska">
              </div>
              <div class="feature--content">
                <h3>Cari Tadika</h3>
                <p>Cari tadika yang anda berminat melalui website kami di sini</p>
              </div>
            </div>
            <!-- .feature-panel end -->
          </div>
          <!-- .col-md-4 end -->
          <!-- feature Panel #2 -->
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="feature-panel">
              <div class="feature--icon">
                <img src="@/assets/images/lihat tadika.png" alt="Anak2U carian tadika taska anda">
              </div>
              <div class="feature--content">
                <h3>Lihat Tadika</h3>
                <p>Lihat maklumat lanjut tentang tadika yang anda pilih</p>
              </div>
            </div>
            <!-- .feature-panel end -->
          </div>
          <!-- .col-md-4 end -->
          <!-- feature Panel #3 -->
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="feature-panel">
              <div class="feature--icon">
                <img src="@/assets/images/daftar tadika.png" alt="Anak2U carian tadika taska anda">
              </div>
              <div class="feature--content">
                <h3>Daftar tadika / taska pilihan</h3>
                <p>Daftar tadika dan taska pilihan anda. Pihak tadika dan taska akan menghubungi pihak anda untuk maklum
                  balas mengenai pendaftaran anda.</p>
              </div>
            </div>
            <!-- .feature-panel end -->

          </div>
          <!-- .col-md-4 end -->
        </div>
        <!-- .row end -->

      </div>
      <!-- .container end -->
      <div class="custom-shape-divider-bottom-1700455868">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </section>
    <!-- .feature end -->

    <section id="city-property" class="city-property text-center pb-70" style="position: relative !important;">

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="heading heading-2 text-center mb-70">
              <h2 class="heading--title">Tadika dan Taska Mengikut Negeri</h2>
              <p class="heading--desc">Tadika dan taska mengikut negeri</p>
            </div>
            <!-- .heading-title end -->
          </div>
          <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->
        <div class="row d-flex justify-content-center">

          <div class="swiper-container-negeri d-flex justify-content-center " id="carousel">
            <div class="swiper-wrapper">
              <div v-for="(state, index) in states" :key="index" class="swiper-slide" style="height: 50vh;width: 220px;">

                <div class="property-city-item">
                  <div class="property--city-img">
                    <a :href="'/negeri/' + state.slug">
                      <img :src="state.image || defaultLogoUrl" alt="Carian Tadika Taska " class="img-responsive"
                        style="object-fit: cover; height: 50vh; width: 100%;margin: 0;">
                      <div class="property--city-overlay">
                        <div class="property--item-content">
                          <h5 class="property--title">{{ state.city }}</h5>
                          <p class="property--numbers">{{ state.number }} Tadika/Taska</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <!-- .property-city-img end -->
                </div>
                <!-- . property-city-item end -->


              </div>
            </div>

            <div class="swiper-pagination" style="text-align: center;"></div>
            
          </div>
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->

    </section>




    <Footer />
  </section>
</template>

<script>

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Search from '@/components/Search.vue';
import Footer from '@/components/Footer.vue';





export default {
  name: 'CarouselSection',
  components: {
    Search,
    Footer
  },
  data() {
    return {
      defaultLogoUrl: 'https://anak2u.s3.ap-southeast-1.amazonaws.com/explore/logo/alc-mutiara-oakland.jpg',
      items: [],
      states: [],
      searchTadika: '',
      Swiper: null
    };
  },
  created() {
    this.initCarousel();
    this.initCarouselNegeri();
  },
  methods: {
    async initCarousel() {
      const response = await fetch('https://api-explore.anak2u.com.my/api/clients/category/tadika');
      this.items = await response.json();
      console.log("tadika list is", this.items.data)
      this.initializeSwiper();
    },

    // create swipper slides
    initializeSwiper() {

      this.swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 3,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
        },
      });
    },
    redirectToDetailsPage(clientSlug) {
      this.$router.push({ path: `/details/${clientSlug}` }); // Replace with your route path
    },
    redirectToRegisterPage(clientSlug) {
      this.$router.push({ path: `/register/${clientSlug}` }); // Replace with your route path
    },

    async initCarouselNegeri() {
      const response = await fetch('https://api-explore.anak2u.com.my/api/states');
      this.states = await response.json();
      console.log("states is", this.states);
      this.initializeSwiperNegeri();
    },

    initializeSwiperNegeri() {

      this.swiper = new Swiper(".swiper-container-negeri", {
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerGroup: 3,
        // direction:'vertical',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
        },
      });
    }

  },
};

</script>

<style scoped>
body,
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;

}

.senarai-tadika-container {
  background-color: #f1f6fc;
  /* Add your desired background color here */
  padding: 20px;
  /* Adjust the padding as needed */
}

.apa-itu-tadika-container {
  background-color: rgb(255, 255, 255);
  /* Add your desired background color here */
  padding: 20px;
  /* Adjust the padding as needed */
}

.kaedah-container {
  background: #f1f6fc;
  ;
  padding: 20px;
  /* Adjust the padding as needed */
}

/* .combined-heading {
      display: flex;
      align-items: center;
    }

    .combined-heading .pilihan {
      margin-left: 10px;
    } */

.pilihan {
  font-family: 'Dela Gothic One', sans-serif;
}

.huraian {
  font-family: 'Maven Pro', sans-serif;
}

.container {
  width: 100%;
  /* Smaller container width */

}

.thumb-wrapper {
  display: flex;
  flex-direction: column;
  /* margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px; */
  align-items: center;
  text-wrap: wrap;


}

.thumb-wrapper  h4 {
	font-size: 18px;
  color: #FFFFFF;
}

img {
  margin-top: 10px;
  /* Smaller margin */
  width: 100px;
  /* Smaller image width */
  height: 100px;
  margin-left: 25%;
  align-items: center;
}


.swiper-slide {
  height: auto;
  /* background: linear-gradient(to bottom, white 55%, #eb5a8c 45%); */
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  /* overflow: hidden; */
  position: relative;
}

.swiper-slide-negeri {
  height: auto;
  width: 500px;
  background: linear-gradient(to bottom, white 55%, #eb5a8c 45%);
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  /* overflow: hidden; */
  /* position: relative; */
}

.swiper-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  /* Add a margin to adjust the vertical position */
}

/* Hide the numbers in pagination */
.swiper-pagination-bullet {
  font-size: 0;
  background: black;
  width: 10px;
  height: 10px;

  border-radius: 50%;
}

/* Style the active bullet (optional) */
.swiper-pagination-bullet-active {
  background: #007aff;
  width: 12px;
  height: 12px;
}



.carousel .item:nth-child(odd) {
  background-color: #eb5a8c;
}


.thumb-wrapper img {
  width: 100%;
  height: auto;
}

.buttons {
  text-align: center;
  margin-top: 10px;
  padding-bottom: 0%;
  height: 50px;

}

.info {
  height: 900px;
}

.kindergarten-info h5 {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: #ffffff;
  font-weight: 300;
  text-align: center;
}


.kindergarten-info h6 {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  text-align: center;
  margin: 5px 0;
}


.btn {
  padding: 5px 10px;
  /* Smaller padding */
  border: solid;
  border-color: #eb5a8c;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 45px;
  width: 60px;
  background-color: green;
}

.see-more {
  background-color: #ffffff;
  color: #eb5a8c;
  /* margin-left: 40px; */
  font-family: 'Montserrat';
  font-size: 10px;
}

.register {
  background-color: #ffffff;
  color: #eb5a8c;
  /* margin-right: 20px;  */
  /* margin-left: 10px; */
  font-family: 'Montserrat';
  font-size: 10px;
  /* Smaller font size */
}


.buttons .btn:hover {
  background-color: #eb5a8c;
  color: white;
  border-color: #eb5a8c;
}

.swiper-container {
  width: 110vh;
  overflow: hidden;
}

.swiper-container-negeri {
  width: 110vh;
  overflow: hidden;
}

/*css for explaination*/
.senarai-tadika2 {
  background-color: #ffffff;
  padding: 20px;
}

.container-apa-itu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.row-apa-itu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  /* Adjust the margin as needed */
}

.image-column-apa-itu {
  flex: 1;
  text-align: center;
  width: 50px;
}

.text-column-apa-itu {
  line-height: 1.6;
  padding-left: 90px;
  padding-right: 90px;
  color: rgb(184, 109, 109)dad;
}


.image-column-apa-itu img {
  max-width: 100%;
  height: auto;
  margin-left: 1px;
}

.huraian-apa-itu {
  color: grey;
}

/*css kaedah*/
.image-container2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

.image-item {
  text-align: center;
  width: 200px;
  /* Adjust the width as needed */
  margin: 0 20px;
  height: 300px;
  /* Adjust the height as needed */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.connector-line {
  border: 1px solid black;
  /* Customize the style of the line */
  width: 50px;
  /* Adjust the width as needed */
  margin: 0 20px;
}

.bigger-width {
  width: 350px;
  /* Adjust the width for the third section */
}

.tittle-kaedah {
  font-family: 'Patua One', serif;
}

.custom-shape-divider-bottom-1699878312 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1699878312 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 104px;
}

.custom-shape-divider-bottom-1699878312 .shape-fill {
  fill: rgb(241, 246, 252);
  ;
}

.custom-shape-divider-top-1699878859 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-top-1699878859 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 50px;
}

.custom-shape-divider-top-1699878859 .shape-fill {
  fill: #F1F6FC;
}

.negeri {
  background-color: #007aff;
  height: 30vh;
  width: 30vw;
}

.thumb-wrapper {
  padding: 25px 15px;
  /* background: #fff; */
  background: linear-gradient(to bottom, white 50%, #eb5a8c 50%);
  border-radius: 6px;
  text-align: center;
  position: relative;
  box-shadow: 0 2px 3px #FFFFFF;
}

.img-box {
  height: 100px;
  /* margin-bottom: 20px; */
  width: 100%;
  position: relative;
}

.img-box img {
  /* max-width: 100%;
  max-height: 100%; */
  width: 50%;
  display: inline-block;
  position: absolute;
  /* top: 40%; */
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
}

.thumb-content .btn {
  color: #7ac400;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: bold;
  background: none;
  border: 1px solid #7ac400;
  padding: 6px 14px;
  margin-top: 5px;
  line-height: 16px;
  border-radius: 20px;
}

.thumb-content h4{
  font-size: 14px;
  margin-bottom: 0;
  color: #FFFFFF;
}

.thumb-content p{
  font-size: 14px;
  color: #FFFFFF;
}

.swipper-slide{
  width: 250px !important;
  margin: 0 !important;
  background: linear-gradient(to bottom, white 50%, #eb5a8c 50%);

}

.swiper-slide[data-v-9ea40744] {
  margin: 0 !important;
  margin-left: 5px !important;
}

.thumb-wrapper p{
  color: #FFFFFF;
}

.custom-shape-divider-bottom-1700455868 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1700455868 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 70px;
}

.custom-shape-divider-bottom-1700455868 .shape-fill {
    fill: #FFFFFF;
}
</style>