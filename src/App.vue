<template>
  <div id="nav" :style="{ backgroundImage: 'url(' + require('@/assets/nav.png') + ')' }">
    <router-link to="/teams" >Teams</router-link> |
    <router-link to="/athletes">Athletes</router-link> |
    <router-link to="/matches">Matches</router-link>

    
  </div>
  <router-view />
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
 
 background-repeat: no-repeat; 
 max-width:1000px;
}

#nav a {
  font-weight: bold;
  color: #fdfdfd;
  
  padding-right: 15px;
}

#nav a.router-link-exact-active {
  color: #dd2626;
}
.alet{
  display: flex;
  max-width:1280px;
  padding:25px;
  margin:0 auto;
}
</style>
