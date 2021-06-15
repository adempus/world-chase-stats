<template>
  <div>
    <h1>Athletes Page</h1>
    <router-link :to="{ name: 'AthleteProfile', params: { id: 123 } }"
      >Click to see athlete profile</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Athletes",
  methods: {},
};
</script>

<style scoped></style>
