<template>
  <div>
    <h1>Athlete's Profile</h1>
    <p>Athlete ID: {{ $route.params.id }}</p>
  </div>
  <AthleteProfileBanner />
  <!--  <div>-->
  <h2 class="p-d-block p-mx-auto p-mt-6 p-mb-6 stats_subheader">STATS</h2>
  <!--  </div>-->
  <div class="p-d-flex p-jc-center">
    <div>
      <AthleteStatCard
        :headers="{ title: 'Chaser', subject: 'Tags' }"
        knob-value="90"
      />
    </div>
    <Divider layout="vertical" />
    <div>
      <AthleteStatCard
        :headers="{ title: 'Evader', subject: 'Evasions' }"
        knob-value="63"
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
