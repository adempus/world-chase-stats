<template>
  <div>
    <h1>Athlete's Profile</h1>
    <p>Athlete ID: {{ $route.params.id }}</p>
  </div>
  <AthleteProfileBanner />
</template>

<script>
import AthleteProfileBanner from "@/components/AthleteProfileBanner";
export default {
  name: "AthleteProfile",
  components: {
    AthleteProfileBanner,
  },
};
</script>

<style scoped>
</style>
