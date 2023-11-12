<template>
  <!-- Footer #1	============================================= -->
    <footer id="footer" class="footer footer-1">
      <!-- Widget Section  ============================================= -->
      <div class="footer-widget">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3 widget--about">
              <div class="widget--content">
                <div class="footer--logo">
                  <img class="h-16" src="https://static.shuffle.dev/uploads/files/e6/e6ae8dde43f8cf7f662974d89d758bc88e79fc8a/Anak2u-Logo.png" alt="Logo" width="60px" height="60px" >
                </div>
                <div>
                <p>Explore @ Anak2U adalah laman carian tadika, taska, pusat transit dan penjagaan kanak-kanak untuk memudahkan ibu-bapa mencari pusat-pusat ini mengikut kriteria mereka. Ia adalah salah satu produk Anak2U.</p>
                </div>
              </div>
            </div>
            <!-- .col-md-2 end -->
            <div class="col-xs-12 col-sm-3 col-md-2 col-md-offset-1 widget--links">
              <div class="widget--title">
                <h5>Company</h5>
              </div>
              <div class="widget--content">
                <ul id="link" class="list-unstyled mb-0">
                  <li><a href="https://anak2u.com.my/kami/">Tentang Kami</a></li>
                  <!-- <li><a href="#">Career</a></li> -->
                  <li><a href="https://explore.anak2u.com.my/">Explore</a></li>
                  <!-- <li><a href="#">Properties</a></li> -->
                  <li><a href="https://api.whatsapp.com/send?phone=601158613929text=Hi, saya ada pertanyaan mengenai laman web Explore Anak2U.source=Websitedata=">Hubungi Anak2U</a></li>
                </ul>
              </div>
            </div>
            <!-- .col-md-2 end -->
            <div class="col-xs-12 col-sm-3 col-md-2 widget--links">
              <div class="widget--title">
                <h5>Maklumat Lanjut</h5>
              </div>
              <div class="widget--content">
                <ul id="link" class="list-unstyled mb-0">
                  <li><a href="https://anak2u.com.my/polisi-privasi/">Notis Privasi</a></li>
                  <li><a href="https://anak2u.com.my/terma/">Terma dan Syarat</a></li>
                  <li><a href="https://www.facebook.com/anak2uofficial/">Media Sosial</a></li>
                  <li><a href="https://anak2u.com.my/soalan-lazim/">Soalan Lazim</a></li>
                </ul>
              </div>
            </div>
            <!-- .col-md-2 end -->
            <div class="col-xs-12 col-sm-12 col-md-4 widget--newsletter">
              <div class="widget--newsletter">
              <div class="widget--title">
                <h5>Newsletter</h5>
              </div>
              <div class="widget--content">
                <h6>Kami di Media Sosial</h6>
                  <div class="social-icons">
                    <a class="social-link" href="https://twitter.com/CommonRoomBangi"><i class="fab fa-twitter"></i></a>
                    <a class="social-link" href="https://www.facebook.com/anak2uofficial"><i class="fab fa-facebook"></i></a>
                    <a class="social-link" href="https://www.youtube.com/watch?v=p5922xLnPLo"><i class="fab fa-youtube"></i></a>
                  </div>
              </div>
              </div>
                </div>
                <!-- .col-md-4 end -->

              </div>
            </div>
            <!-- .container end -->
          </div>
          <!-- .footer-widget end -->

          <!-- Copyrights
            ============================================= -->
            <div class="footer--copyright text-center">
              <div class="container">
                <div class="row footer--bar">
                  <div  class="col-xs-12 col-sm-12 col-md-12">
                    <span id="link">© 2023 <a href="#">Anak2U Sdn Bhd</a>, Hakcipta terpelihara.</span>
                  </div>

                </div>
                <!-- .row end -->
              </div>
              <!-- .container end -->
            </div>
            <!-- .footer-copyright end -->
          </footer>
</template>



<script>

export default { 
  name: 'AppFooter',

}
</script>

<style>
footer{
  background: #01A099;
  color: white;

}


#link li a {
  color: white;
  text-decoration: none; /* Remove underlines from links */
  transition: color 0.3s; /* Smooth color transition on hover */
}

/* Change link color to gray on hover */
#link li a:hover {
  color: gray;
}

/* Style the social media links */
.social-link {
  color: #01A099; /* Set the link color */
  text-decoration: none; /* Remove underlines from links */
  margin-right: 10px; /* Add some spacing between links (adjust as needed) */
  font-size: 20px; /* Adjust the icon size as needed */
  transition: color 0.3s; /* Smooth color transition on hover */
}

/* Change link color to gray on hover */
.social-link:hover {
  color: gray;
}

</style>
