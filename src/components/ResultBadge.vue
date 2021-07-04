<!-- badge indicator of a tag or evasion result in AthleteChasesTable -->
<template class="basic">
  <Tag
    :value="tagMade ? 'Tag' : 'Evasion'"
    :class="[tagMade ? 'result_tag' : 'result_evasion']"
  />
</template>

<script>
export default {
  name: "ResultBadge",
  props: {
    tagMade: Boolean,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700&display=swap");

.result_tag {
  background-color: #d32f2f;
  color: #ffffff;
  width: 75px;
  opacity: 80%;
  font-family: "Bai Jamjuree", sans-serif;
}
.result_evasion {
  background-color: #689f38;
  color: #ffffff;
  width: 75px;
  opacity: 80%;
  font-family: "Bai Jamjuree", sans-serif;
}
</style>
