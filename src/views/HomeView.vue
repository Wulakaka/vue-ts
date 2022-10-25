<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <FontExample></FontExample>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import FontExample from "@/components/FontExample.vue";

@Component({
  components: {
    HelloWorld,
    FontExample,
  },
})
export default class HomeView extends Vue {}
</script>
