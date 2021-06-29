<template>
  <Card style="padding: 10px 100px; margin: 0 50px;">
    <template #header>
      <h1 class="stat_details">{{ headers.subject }}</h1>
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
        strokeWidth="9"
        valueColor="#dd2626"
        rangeColor="#f3f3f3"
        textColor="#111111"
      />
    </template>
    <template #content>
      <!-- TODO -->
<!--      <h3 class="stat_details_subheader">{{ headers.title }}</h3>-->
<!--      <div class="stats">-->
<!--        <h4 style="padding: 0 10px 0 10px">Avg. Time:</h4> <p>10.2</p>-->
<!--      </div>-->
<!--      <div class="stats">-->
<!--        <h4 style="padding: 0 10px 0 10px">Z-Score:</h4> <p>+23%</p>-->
<!--      </div>-->
    </template>
  </Card>
</template>

<script>
export default {
  name: "AthleteStatCard",
  props: {
    knobValue: String,
    headers: Object,
  },
  data() {
    return {
      knob_val: this.knobValue,
    };
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

.stat_details {
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 600;
}

.stats {
  display: flex;
}

.stat_details_subheader {
  color: #111111;
  margin: -15px 0 0 0;
}
</style>
