<template>
  <header>
    <nav>

    </nav>
    <div class="banner" :style="`background-image: url(${require('@/assets/banner.png')}); background-size: cover; background-repeat: no-repeat; background-position: center center; height: 300px;`">
      <div id="banner">
        <h1>Kenali Kami Lebih Lanjut</h1>
        <p>Anak2u Laman sesawang menyediakan perkhidmatan carian tadika-tadika di Malaysia. Apa tunggu lagi? Jom explore!</p>
      </div>
    </div>
  </header>
</template>

<script>

export default {
    name: "AppHeader",
};
</script>

<style scoped>
.banner {
  position: relative;
  text-align: center;
  color: #fff;
}

.banner::before {
  content: '';
  background: rgba(0, 0, 0, 0.5); /* Add a semi-transparent overlay */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#banner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
}

#banner h1 {
  font-size: 36px;
  margin: 0;
  padding: 0;
}

#banner p {
  font-size: 18px;
  margin: 20px 0;
}

</style>
