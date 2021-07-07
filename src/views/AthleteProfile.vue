<template>
  <div v-if="athleteBannerData === null" class="p-d-flex">
    <Skeleton width="80rem" height="20rem" class="p-ml-6 p-mt-3" />
    <Skeleton shape="circle" size="22rem" class="p-ml-3 p-mt-3" />
  </div>
  <AthleteProfileBanner
    v-else
    :banner-data="athleteBannerData"
    class="p-mt-3"
  />

  <h2 class="p-d-block p-mx-auto p-mt-6 p-mb-6 stats_subheader">STATS</h2>
  <!-- AthleteStatCards depicting tag/evasion percentages with other stats -->
  <div class="p-d-flex p-jc-center p-mb-6">
    <div v-if="athleteStatsData.chaser === null">Loading...</div>
    <div v-else>
      <AthleteStatCard
        :headers="{ title: 'Chaser', subject: 'Tags' }"
        :athlete-stats="athleteStatsData.chaser"
      />
    </div>
    <Divider layout="vertical" class="p-pr-5 p-pl-5" />
    <div v-if="athleteStatsData.evader === null">Loading...</div>
    <div v-else>
      <AthleteStatCard
        :headers="{ title: 'Evader', subject: 'Evasions' }"
        :athlete-stats="athleteStatsData.evader"
      />
    </div>
  </div>

  <h2 class="p-d-block p-mx-auto p-mt-6 p-mb-6 stats_subheader">CHASES</h2>
  <!-- Loading placeholder for chases table -->
  <div v-if="athleteChaseData === null">
    <Skeleton width="110rem" height="20rem" class="p-jc-center p-mx-6" />
  </div>
  <!-- Chases table -->
  <div v-else class="p-jc-center p-mx-6 p-px-6 p-mb-6">
    <AthleteChasesTable :table-data="athleteChaseData" />
  </div>
</template>

<script>
import AthleteProfileBanner from "@/components/AthleteProfileBanner";
import AthleteStatCard from "@/components/AthleteStatCard";
import AthleteChasesTable from "@/components/AthleteChasesTable";
import axios from "axios";

export default {
  mounted() {
    window.scrollTo(0,0);
  },
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
    AthleteChasesTable,
  },
  data() {
    return {
      athleteBannerData: null,
      athleteStatsData: {
        chaser: null,
        evader: null,
      },
      athleteChaseData: null,
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
      const chaserInfoRequest = axios.get(
        `http://127.0.0.1:8000/athlete/${this.athleteId}/chases/chaser`
      );
      const evaderInfoRequest = axios.get(
        `http://127.0.0.1:8000/athlete/${this.athleteId}/chases/evader`
      );

      axios
        .all([
          bannerInfoRequest,
          statsInfoRequest,
          chaserInfoRequest,
          evaderInfoRequest,
        ])
        .then(
          axios.spread((...responses) => {
            const bannerResponse = responses[0].data.athlete[0];
            const statsResponse = responses[1].data;
            const chasesResponse = responses[2].data["athlete_chasing"].concat(
              responses[3].data["athlete_evading"]
            );
            this.parseAthleteBannerData(bannerResponse, statsResponse);
            this.parseAthleteStatsData(statsResponse);
            this.parseAthleteChaseData(chasesResponse);
          })
        )
        .catch((errors) => {
          console.log(errors);
        });
    },
    /* parses data to be injected into AthleteProfileBanner component */
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
    /* parses data to be injected into AthleteStatCard component. */
    parseAthleteStatsData(statsResponse) {
      this.athleteStatsData.chaser = {
        percentage: statsResponse.chaser.tag_percentage,
        avgTime: statsResponse.chaser.average_time,
        zScore: statsResponse.chaser.z_score,
      };
      this.athleteStatsData.evader = {
        percentage: statsResponse.evader.evade_percentage,
        avgTime: statsResponse.evader.average_time,
        zScore: statsResponse.evader.z_score,
      };
    },
    /* parses data to be injected into AthleteChasesTable component. */
    parseAthleteChaseData(chasesResponse) {
      this.athleteChaseData = chasesResponse.map((chase) => {
        return {
          id: chase.id,
          match: `${chase.chaser.team.name}  v.s.  ${chase.evader.team.name}`,
          chaseNo: chase.chase_no,
          chaser: {
            id: chase.chaser.id,
            name: `${chase.chaser.first_name} ${chase.chaser.last_name}`,
            img: chase.chaser.image_url,
          },
          evader: {
            id: chase.evader.id,
            name: `${chase.evader.first_name} ${chase.evader.last_name}`,
            img: chase.evader.image_url,
          },
          result: { tagMade: chase.tag_made },
          time: chase.tag_time === 0 ? 20 : chase.tag_time,
          sd: chase.sudden_death,
        };
      });
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
