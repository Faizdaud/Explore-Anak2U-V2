<template>
  <div id="app">
    <nav>
      <div class="w-1/4">
        <a href="#">
        </a>
      </div>
      <router-link to="/">Utama</router-link> |                                                
      <router-link to="/">Explore</router-link> 
       
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
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
