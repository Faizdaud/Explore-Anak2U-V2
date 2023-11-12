<template>
  <section>
    <Search/>
    <div class="senarai-tadika-container">
   
      <div class="image-container2">
      <h4 class="combined-heading">SENARAI TADIKA <span class="pilihan">PILIHAN ANAK2U</span></h4>
    
    <p class="huraian">Senarai tadika yang berdaftar dengan Kami</p>
      </div> 
    <div class=" d-flex justify-content-center">
    <div class="swiper-container d-flex justify-content-center" id="carousel" >
      <div class="col-6 swiper-wrapper">
        <div v-for="(item, index) in items" :key="index" class="swiper-slide" style="height: 290px;width: 220px;">
          <div class="item">
            <div class="thumb-wrapper">
              <img :src="item.logo_url || defaultLogoUrl" alt="Kindergarten Logo" style="width: 120px; height: 120px;" />
            </div>
            <div class="kindergarten-info">
              <div class="buttons">
                <button class="btn see-more" @click="redirectToDetailsPage(item.client_slug)">Details</button>
                <button class="btn register" style="margin-left: 20px;" @click="redirectToRegisterPage(item.client_slug)">Register</button>
              </div>
              <div class="info">
                <h5 class="kindergarten-name">{{ item.client_name }}</h5>
                <div>
                  <h6>Harga Yuran Sekitar</h6>
                  <h6>{{ item.client_fee !== null ? 'RM' + item.client_fee : 'RM -' }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div v-for="(item, index) in items" :key="index" class="swiper-slide">
          <div class="thumb-wrapper">
              <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
              <div class="img-box">
                <img :src="item.logo_url || defaultLogoUrl" class="img-responsive img-fluid" style="object-fit: contain;" alt="Kindergarten Logo">
              </div>

              <div class="buttons">
                <button class="btn see-more" @click="redirectToDetailsPage(item.client_slug)">Details</button>
                <button class="btn register" style="margin-left: 20px;" @click="redirectToRegisterPage(item.client_slug)">Register</button>
              </div>

              <div class="thumb-content" style="object-fit: contain;">
                <h4 style="display: block">{{item.client_name}}</h4>
                <p class="item-price">Harga Yuran sekitar <br/>
                <strong>{{ item.client_fee !== null ? 'RM' + item.client_fee : 'RM -' }}</strong></p>
              </div>
            </div>
        </div> -->
      </div>

      <div class="swiper-pagination" style="text-align: center;"></div>
    </div>
  </div>
    </div><!--pengakhiran senarai tadika-->

    <section id="feature-anak2u" class="feature feature-1 text-center bg-white pb-90">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="heading heading-2 text-center mb-70">
          <h2 class="heading--title">Apa itu Tadika Taska Pilihan Anak2U?</h2>
          <p class="heading--desc">Tadika pilihan Anak2U menggunakan aplikasi dan sistem pengurusan Anak2U. Aplikasi dan sistem kami membolehkan ibu-bapa mempunyai akses ke:</p>
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
            <p>Pembayaran yuran atas talian yang lebih mudah melalui aplikasi Anak2U. Invois dan resit terus didapati di dalam aplikasi.</p>
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
            <p>Akses ke aplikasi pembelajaran alaf baru digital yang lebih menarik untuk perkembangan pembelajaran anak-anak di rumah.</p>
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
            <p>Komunikasi antara ibu-bapa dan guru yang lebih mudah dan telus melalui fungsi pengumuman aplikasi Anak2U.</p>
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
            <p>Tadika dan taska mempunyai pengurusan yang lebih teratur melalui sistem pengurusan Anak2U, solusi alaf baru secara 'paperless'</p>
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
            <p>Guru dan ibu-bapa mempunyai akses bahan pengajaran dan pembelajaran Anak2U, didikan awal tidak berhenti di sekolah sahaja.</p>
          </div>
        </div>
        <!-- .feature-panel end -->
      </div>
      <!-- .col-md-4 end -->
    </div>
    <!-- .row end -->
  </div>
  <!-- .container end -->
</section>
<!-- 
  <div class="apa-itu-tadika-container">
      <div class="image-container2">
      <h2 class="combined-heading">APA ITU TADIKA TASKA <span class="pilihan">PILIHAN ANAK2U</span></h2>
      <p class="huraian">Tadika pilihan Anak 2u menggunakan aplikasi dan sistem pengurusan Anak2u. Aplikasi dan sistem kami membolehkan ibu bapa mempunyai akses ke :</p>
      </div>

      <div class="container-apa-itu">
        <div class="row-apa-itu">
          <div class="image-column-apa-itu">
            <img src="@/assets/images/laporan digital.png" alt="Image 1">
          </div>
          <div class="image-column-apa-itu">
            <img src="@/assets/images/pembayaran.png" alt="Image 2">
          </div>
        </div>
        <div class="row-apa-itu">
          <div class="text-column-apa-itu">
            <h4 class="tittle-kaedah">Laporan digital</h4>
            <p class="huraian-apa-itu">Laporan perkembangan secara digital.Terus pantau perkembangan anak-anak melalui aplikasi Anak2u</p>
          </div>
          <div class="text-column-apa-itu">
            <h4 class="tittle-kaedah">Pembayaran mudah</h4>
            <p class="huraian-apa-itu">Pembayaran yuran atas talian yang lebih mudah melalui aplikasi Anak2U. Invois dan resit terus didapati di dalam aplikasi</p>
          </div>
        </div>
        <div class="row-apa-itu">
          <div class="image-column-apa-itu">
            <img src="@/assets/images/komunikasi.png" alt="Image 3">
          </div>
          <div class="image-column-apa-itu">
            <img src="@/assets/images/pembelajaran digital.png" alt="Image 4">
          </div>
        </div>
        <div class="row-apa-itu">
          <div class="text-column-apa-itu">
            <h4 class="tittle-kaedah">Komunikasi mudah</h4>
            <p class="huraian-apa-itu">Komunikasi antara ibu bapa dan guru yang lebih mudah dan telus melalui fungsi pengumuman aplikasi anak2U</p>
          </div>
          <div class="text-column-apa-itu">
            <h4 class="tittle-kaedah">Pembelajaran Digital Lebih Menarik</h4>
            <p class="huraian-apa-itu">Akses ke aplikasi pembelajaran alaf baru digital yang lebih menarik untuk perkembangan pembelajaran anak-anak di rumah</p>
          </div>
        </div>
        <div class="row-apa-itu">
          <div class="image-column-apa-itu">
            <img src="@/assets/images/pengurusan.png" alt="Image 5">
          </div>
          <div class="image-column-apa-itu">
            <img src="@/assets/images/akses bahan.png" alt="Image 6">
          </div>
        </div>
        <div class="row-apa-itu">
          <div class="text-column-apa-itu">
            <h4 class="tittle-kaedah">Pengurusan lebih teratur</h4>
            <p class="huraian-apa-itu">Tadika dan taska mempunyai pengurusan yang lebih teratur melalui sistem pengurusan anak2U, solusi alaf baru secara 'paperless'</p>
          </div>
          <div class="text-column-apa-itu">
            <h4 class="tittle-kaedah">Akses Bahan Pengajaran</h4>
            <p class="huraian-apa-itu" style="center">Guru dan ibu bapa mempunyai akses bahan pengajaran dan pembelajaran anak2U, didikan awal tidak berhenti di sekolah sahaja</p>
          </div>
        </div>
      </div>


    </div> -->
    <!--pengakhiran untuk apa itu tadika-->

    <section id="feature" class="feature feature-1 text-center pb-90" style="background-color:#f1f6fc">
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
            <p>Daftar tadika dan taska pilihan anda. Pihak tadika dan taska akan menghubungi pihak anda untuk maklum balas mengenai pendaftaran anda.</p>
          </div>
        </div>
        <!-- .feature-panel end -->
      </div>
      <!-- .col-md-4 end -->
    </div>
    <!-- .row end -->
  </div>
  <!-- .container end -->
</section>
<!-- .feature end -->
    


    
    <Footer/>
  </section>

</template>

<script>

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Search from '@/components/Search.vue';
import Footer from '@/components/Footer.vue';


 

export default {
  name: 'CarouselSection',
  components:{
    Search,
    Footer
},
  data() {
    return {
      defaultLogoUrl: 'https://anak2u.s3.ap-southeast-1.amazonaws.com/explore/logo/alc-mutiara-oakland.jpg',
      items:[],
      searchTadika:'',
      Swiper:null
    };
  },
  created() {
    this.initCarousel();
  },
  methods: {
    async initCarousel() {
      const response = await fetch('https://api-explore.anak2u.com.my/api/clients-filter?category_id=1');
      this.items = await response.json();
      this.initializeSwiper();
    },

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
  },
};

</script>

<style scoped>
body, h1, h2, h3, p {
      margin: 0;
      padding: 0;

    }

  .senarai-tadika-container {
  background-color: #f1f6fc; /* Add your desired background color here */
  padding: 20px; /* Adjust the padding as needed */
}
.apa-itu-tadika-container{
  background-color: rgb(255, 255, 255); /* Add your desired background color here */
  padding: 20px; /* Adjust the padding as needed */
}

.kaedah-container{
  background:  #f1f6fc;;
  padding: 20px; /* Adjust the padding as needed */
}
    
    .combined-heading {
      display: flex;
      align-items: center;
    }

    .combined-heading .pilihan {
      margin-left: 10px;
    }

    .pilihan{
      font-family: 'Dela Gothic One', sans-serif;
    }

    .huraian{
    font-family: 'Maven Pro', sans-serif;
    }
    
    .container {
      width: 100%; /* Smaller container width */
      
    }
    
    .thumb-wrapper {
        display: flex;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 10px;
        margin-right: 10px;
        align-items: center;
        
    }
    img {
      margin-top: 10px; /* Smaller margin */
      width: 100px; /* Smaller image width */
      height: 100px;
      margin-left: 25%;
      align-items: center;
    }
    
    
  .swiper-slide {
    height: auto;
  background: linear-gradient(to bottom, white 55%, #eb5a8c 45%);
  margin: 10px; 
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative; 
}


.swiper-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px; /* Add a margin to adjust the vertical position */
}

Hide the numbers in pagination
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

.info{
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
      padding: 5px 10px; /* Smaller padding */
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
      font-size: 10px; /* Smaller font size */
    }


.buttons .btn:hover {
  background-color:#eb5a8c; 
  color: white; 
border-color: #eb5a8c;
}
.swiper-container{
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
    margin-bottom: 10px; /* Adjust the margin as needed */
  }

  .image-column-apa-itu
  {
    flex: 1;
    text-align: center;
    width: 50px;
  }
.text-column-apa-itu{
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
  .huraian-apa-itu{
    color:grey;
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
  width: 200px; /* Adjust the width as needed */
  margin: 0 20px;
  height: 300px; /* Adjust the height as needed */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.connector-line {
  border: 1px solid black; /* Customize the style of the line */
  width: 50px; /* Adjust the width as needed */
  margin: 0 20px;
}

.bigger-width {
  width: 350px; /* Adjust the width for the third section */
}

.tittle-kaedah{
  font-family: 'Patua One', serif;
}




</style>