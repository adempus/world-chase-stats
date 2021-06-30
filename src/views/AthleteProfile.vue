<template>
  <div>
    <h1>Athlete's Profile</h1>
    <p>Athlete ID: {{ $route.params.id }}</p>
  </div>
  <AthleteProfileBanner
    :banner-data="{
      athleteName: 'Kyle Soderman',
      smHandle: '@minnesoderman',
      team: 'Hollywood Freerunners',
      tags: '9/10',
      evasions: '17/27',
      athleteImage:
        'https://wct-athlete-images.s3.us-east-2.amazonaws.com/hollywood_freeruners/kyle_soderman.png',
    }"
  />
  <!--  <div>-->
  <h2 class="p-d-block p-mx-auto p-mt-6 p-mb-6 stats_subheader">STATS</h2>
  <!--  </div>-->
  <div class="p-d-flex p-jc-center p-mb-6">
    <div>
      <AthleteStatCard
        :headers="{ title: 'Chaser', subject: 'Tags' }"
        :athlete-stats="{ percentage: 90, avgTime: 10.2, zScore: 23 }"
      />
    </div>
    <Divider layout="vertical" class="p-pr-5 p-pl-5" />
    <div>
      <AthleteStatCard
        :headers="{ title: 'Evader', subject: 'Evasions' }"
        :athlete-stats="{ percentage: 63, avgTime: 16.4, zScore: 24 }"
      />
    </div>
  </div>
</template>

<script>
import AthleteProfileBanner from "@/components/AthleteProfileBanner";
import AthleteStatCard from "@/components/AthleteStatCard";

export default {
  name: "AthleteProfile",
  components: {
    AthleteProfileBanner,
    AthleteStatCard,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700&display=swap");

.stats_subheader {
  font-size: 22px;
  text-decoration: underline #dd2626 4px;
  font-family: "Bai Jamjuree", sans-serif;
}
</style>
