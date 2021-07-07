<template>
  <DataTable
    :value="tableData"
    :scrollable="true"
    scrollHeight="350px"
    responsiveLayout="scroll"
    class="p-mx-6 p-px-3 table_style"
  >
    <Column field="chaser" header="Chaser">
      <template #body="{ data }">
        <img
          :src="`${data.chaser.img}`"
          @click="navToAthlete(data.chaser.id)"
        />
        <span class="image-text">{{ data.chaser.name }}</span>
      </template>
    </Column>
    <Column field="evader" header="Evader">
      <template #body="{ data }">
        <img
          :src="`${data.evader.img}`"
          @click="navToAthlete(data.evader.id)"
        />
        <span class="image-text">{{ data.evader.name }}</span>
      </template>
    </Column>
    <Column field="result" header="Result" class="p-jc-center">
      <template #body="{ data }">
        <ResultBadge :tag-made="data.result.tagMade" />
      </template>
    </Column>
    <Column field="time" header="Time (seconds)" class="p-jc-center" />
    <Column field="match" header="Match" class="p-jc-center" />
    <Column field="chaseNo" header="Chase No." class="p-jc-center" />
    <Column field="sd" header="SD" class="p-jc-center">
      <template #body="{ data }">
        <i
          :class="[
            data.sd
              ? 'sd_true pi pi-check-circle'
              : 'sd_false pi pi-times-circle',
          ]"
        />
      </template>
    </Column>
  </DataTable>
</template>

<script>
import ResultBadge from "@/components/ResultBadge";

export default {
  name: "AthleteChasesTable",
  components: {
    ResultBadge,
  },
  props: {
    tableData: Array,
  },
  methods: {
    navToAthlete(athleteId) {
      this.$router
        .push({ name: "AthleteProfile", params: { id: athleteId } })
        .then(() => {
          location.reload();
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700&display=swap");

img {
  width: 65px;
  height: 65px;
  /*border-radius: 50px;*/
  object-fit: cover;
  margin-right: 15px;
}
img:hover {
  cursor: pointer;
}

.table_style {
  font-family: "Bai Jamjuree", sans-serif;
}

.sd_true {
  color: #689f38;
}

.sd_false {
  color: #d32f2f;
}
</style>
