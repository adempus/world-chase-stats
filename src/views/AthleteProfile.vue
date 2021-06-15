<template>
  <div>
    <h1>Athlete's Profile</h1>
    <p>Athlete ID: {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: "AthleteProfile",
};
</script>

<style scoped></style>
