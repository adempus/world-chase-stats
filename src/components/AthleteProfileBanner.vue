<template>
  <div class="profile_banner p-shadow-4">
    <div class="banner_info">
      <p class="athlete_name p-text-uppercase">{{ bannerData.athleteName }}</p>
      <a
        class="athlete_sm_handle"
        :href="`https://www.instagram.com/${bannerData.smHandle.substring(1)}`"
        target="_blank"
        >{{ bannerData.smHandle }}</a
      >
      <div class="team_info">
        <h2>Team</h2>
        <p>{{ bannerData.team }}</p>
      </div>
      <div class="banner_stats">
        <div>
          <h2>Tags</h2>
          <p>{{ bannerData.tags }}</p>
        </div>
        <div style="margin-left: 20px">
          <h2>Evasions</h2>
          <p>{{ bannerData.evasions }}</p>
        </div>
      </div>
    </div>
    <img
      class="image_container"
      :src="`${ bannerData.athleteImage }`"
    />
  </div>
</template>

<script>
export default {
  name: "AthleteProfileBanner",
  props: {
    bannerData: Object,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700&display=swap");

.team_info {
  margin-top: 50px;
  margin-bottom: 25px;
  align-self: initial;
  left: 0;
}

.team_info p {
  font-size: 20px;
}

.banner_stats p {
  font-size: 20px;
}

.banner_stats {
  display: flex;
}

.banner_info {
  margin-top: 35px;
  position: relative;
  display: block;
  float: left;
  top: 0;
  padding-left: 165px;
  text-align: left;
  font-family: "Bai Jamjuree", sans-serif;
}

.banner_info h2 {
  color: #898989;
  font-weight: 500;
}

.athlete_name {
  font-size: 50px;
  margin-bottom: 0;
  font-weight: bold;
}
.athlete_sm_handle {
  margin-top: -10px;
  float: left;
  color: #dd2626;
  font-size: 25px;
  font-weight: 500;
  text-decoration: none;
}
.athlete_sm_handle:hover {
  text-decoration: underline;
}
.profile_banner {
  background-color: #111111;
  color: #ffffff;
  position: relative;
  width: 75%;
  height: 325px;
}
.profile_banner:after {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background: #111111;
  transform-origin: bottom left;
  -ms-transform: skew(-30deg, 0deg);
  -webkit-transform: skew(-30deg, 0deg);
  transform: skew(-20deg, 0deg);
}
.image_container {
  position: relative;
  float: right;
  top: 5%;
  right: -265px;
  height: 325px;
  width: 325px;
  border: 7px solid #ffffff;
  border-radius: 100%;
  display: inline-block;
  object-fit: cover;
}
</style>
