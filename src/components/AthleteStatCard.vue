<template>
  <Card style="padding: 10px 100px">
    <template #header>
      <h1 class="stat_details_subject_header">{{ headers.subject }}</h1>
    </template>
    <template #title>
      <Knob
        class="knob_style"
        v-model="knob_val"
        valueTemplate="{value}%"
        :min="0"
        :max="100"
        readonly="true"
        size="225"
        strokeWidth="7"
        valueColor="#dd2626"
        rangeColor="#f3f3f3"
        textColor="#111111"
      />
    </template>
    <template #content>
      <h3 class="stat_details_subheader">{{ headers.title }}</h3>
      <div class="p-grid p-jc-start p-pt-2">
        <div class="p-row-6 p-p-4">
          <p class="p-pb-2">Avg Time</p>
          <p class="stat_details">{{ athleteStats.avgTime }} sec.</p>
        </div>
        <div class="p-row-6 p-p-4">
          <p class="p-pb-2">Z-Score</p>
          <p class="stat_details">{{ getZScore }}%</p>
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  name: "AthleteStatCard",
  props: {
    headers: Object,
    athleteStats: Object,
  },
  data() {
    return {
      knob_val: this.athleteStats.percentage,
    };
  },
  computed: {
    getZScore() {
      const zScore = this.athleteStats.zScore;
      return zScore > 0 ? `+${zScore}` : zScore;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700&display=swap");

.knob_style {
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 600;
}

.stat_details_subject_header {
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 600;
}

.stat_details {
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 600;
  font-size: 24px;
}

.stat_details_subheader {
  color: #111111;
  margin: -15px 0 0 0;
}
</style>
