<template>
  <div id="app">
    <nav>
      <div class="w-1/4">
        <a href="#">
        </a>
      </div>
      <router-link to="/">Utama</router-link> |                                                
      <router-link to="/">Explore</router-link> 
      <div class="custom-shape-divider-bottom-1699832138">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </nav>
    <router-view/>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background: #f45d8c; 
  position: relative;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ffffff;
}

.custom-shape-divider-bottom-1699832138 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1699832138 svg {
    position: relative;
    display: block;
    width: calc(108% + 1.3px);
    height: 25px;
}

.custom-shape-divider-bottom-1699832138 .shape-fill {
    fill: #01A099;
}
</style>
