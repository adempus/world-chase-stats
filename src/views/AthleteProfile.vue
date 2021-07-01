<template>
  <div>
    <h1>Athlete's Profile</h1>
    <p>Athlete ID: {{ athleteId }}</p>
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
  <h2 class="p-d-block p-mx-auto p-mt-6 p-mb-6 stats_subheader">STATS</h2>
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
import axios from "axios";


export default {
  mounted() {
    this.$nextTick(function () {
      // console.log(`athlete id: ${ this.athleteId }`);
      this.queryAthlete();
    });
  },
  name: "AthleteProfile",
  components: {
    AthleteProfileBanner,
    AthleteStatCard,
  },
  data() {
    return {
      athleteQueryResponse: null,
    };
  },
  methods: {
    queryAthlete() {
      const athleteUrl = `http://127.0.0.1:8000/athlete/${this.athleteId}`;
      axios.get(athleteUrl).then((res) => {
        if (res.data["athlete"].length > 0) {
          this.athleteQueryResponse = res.data["athlete"][0];
        }
        console.log(this.athleteQueryResponse);
      });
    },
  },
  computed: {
    athleteId() {
      return this.$route.params.id;
    },
    athleteBannerData() {
      return {
        athleteName: `${this.athleteQueryResponse["first_name"]} ${this.athleteQueryResponse["last_name"]}`,
        smHandle: `${this.athleteQueryResponse["sm_handle"]}`,
        team: `${this.athleteQueryResponse["team"]["name"]}`,
      };
    },
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
