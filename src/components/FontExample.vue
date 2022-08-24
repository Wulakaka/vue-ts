<template>
  <div>
    <p class="font-example">
      <span class="f55s">55s</span>
      <span class="f65s">65s</span>
      <span class="f75s">75s</span>
      <span class="f85s">85s</span>
    </p>
    <p class="font-example bold">
      <span class="f55s">55s</span>
      <span class="f65s">65s</span>
      <span class="f75s">75s</span>
      <span class="f85s">85s</span>
    </p>
    <p class="font-example hy">
      <span>HYQiHei</span>
      <span class="bold">HYQiHei bold</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class FontExample extends Vue {}
</script>

<style scoped lang="scss">
.font-example {
  display: flex;
  gap: 60px;
  font-size: 80px;
  .f55s {
    font-family: HYQiHei-55S;
  }
  .f65s {
    font-family: HYQiHei-65S;
  }
  .f75s {
    font-family: HYQiHei-75S;
  }
  .f85s {
    font-family: HYQiHei-85S;
  }
}
.bold {
  font-weight: 900;
}
.hy {
  font-family: HYQiHei;
}
</style>
