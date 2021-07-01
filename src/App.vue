<template>

  <div id="nav" :style="{ backgroundImage: 'url(' + require('@/assets/logo2.png') + ')' }" >
    <div class="navImageColor"></div>
  
  
    <router-link to="/teams" >Teams</router-link> |
    <router-link to="/athletes">Athletes</router-link> |
    <router-link to="/matches">Matches</router-link>
   

    
  </div>
  <router-view />
</template>



<style>
* {
  margin: 0;
  padding: 0;
}
#nav{
 padding: 30px;
  background-color: rgb(0, 0, 0);
  background-repeat: no-repeat;
  height: 100%;
  width:100%;
}
#nav .navImageColor{
    width: 45px;
    height: 80px;
    border-style: solid;
    border-width: 15px 120px 90px 90px;
    border-color: transparent transparent transparent rgb(255, 255, 255);
    position: absolute;
    left :160px;
    top: -20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
