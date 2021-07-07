<template>
<!--  <div id="nav">-->
  <div id="nav" :style="{ backgroundImage: 'url(' + require('@/assets/nav.png') + ')' }">
  <div class="  navImageColor"></div>
    <router-link to="/teams">Teams</router-link> |
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*#nav {*/
/*  padding: 30px;*/

/*  background-repeat: no-repeat;*/
/*  min-width: 100%;*/
/*}*/

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
  z-index: -100;

}

/*#nav {*/
/*  background-color: #111111;*/
/*  color: #ffffff;*/
/*  !*position: relative;*!*/
/*  width: 100%;*/
/*  height: 100px;*/
/*}*/
/*#nav::before {*/
/*  content: "";*/
/*  position: absolute;*/
/*  display: block;*/
/*  width: 100%;*/
/*  height: 100px;*/
/*  top: 0;*/
/*  left: 0;*/
/*  z-index: -1;*/
/*  background: #111111;*/
/*  transform-origin: top right;*/
/*  -ms-transform: skew(-30deg, 0deg);*/
/*  -webkit-transform: skew(-30deg, 0deg);*/
/*  transform: skew(-20deg, 0deg);*/
/*}*/
#nav a {
  font-weight: bold;
  color: #fdfdfd;

  padding-right: 15px;
}

#nav a.router-link-exact-active {
  color: #dd2626;
}
.alet {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  margin: 0 auto;
}
</style>
