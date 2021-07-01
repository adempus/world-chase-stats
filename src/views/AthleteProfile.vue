<template>
  <div>
    <h1>Athlete's Profile</h1>
    <p>Athlete ID: {{ athleteId }}</p>
  </div>
  <!--  <AthleteProfileBanner-->
  <!--    :banner-data="{-->
  <!--      athleteName: 'Kyle Soderman',-->
  <!--      smHandle: '@minnesoderman',-->
  <!--      team: 'Hollywood Freerunners',-->
  <!--      tags: '9/10',-->
  <!--      evasions: '17/27',-->
  <!--      athleteImage:-->
  <!--        'https://wct-athlete-images.s3.us-east-2.amazonaws.com/hollywood_freeruners/kyle_soderman.png',-->
  <!--    }"-->
  <!--  />-->

  <div v-if="athleteBannerData === null">Loading ...</div>
  <AthleteProfileBanner v-else :banner-data="athleteBannerData" />

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
  beforeRouteEnter(to, from, next) {
    console.log("Route has entered.");
    next((vm) => {
      vm.queryAthleteData();
    }).then((vm) => {
      console.log(vm.athleteQueryResponse);
    });
  },
  beforeRouteUpdate() {
    console.log("Route has updated (before).");
  },
  name: "AthleteProfile",
  components: {
    AthleteProfileBanner,
    AthleteStatCard,
  },
  data() {
    return {
      athleteBannerData: null,
    };
  },
  methods: {
    queryAthleteData() {
      const bannerInfoRequest = axios.get(
        `http://127.0.0.1:8000/athlete/${this.athleteId}`
      );
      const statsInfoRequest = axios.get(
        `http://127.0.0.1:8000/athlete/${this.athleteId}/stats`
      );

      axios
        .all([bannerInfoRequest, statsInfoRequest])
        .then(
          axios.spread((...responses) => {
            const bannerResponse = responses[0].data.athlete[0];
            const statsResponse = responses[1].data;
            this.parseAthleteBannerData(bannerResponse, statsResponse);
            console.log(statsResponse);
          })
        )
        .catch((errors) => {
          console.log(errors);
        });
    },
    parseAthleteBannerData(bannerResponse, statsResponse) {
      this.athleteBannerData = {
        athleteName: `${statsResponse.name}`,
        smHandle: `${bannerResponse.sm_handle}`,
        athleteImage: `${bannerResponse.image_url}`,
        team: `${bannerResponse.team.name}`,
        tags: `${statsResponse.chaser.tags_made}/${statsResponse.chaser.tag_attempts}`,
        evasions: `${statsResponse.evader.evasions_made}/${statsResponse.evader.evasion_attempts}`,
      };
    },
  },
  computed: {
    athleteId() {
      return this.$route.params.id;
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
