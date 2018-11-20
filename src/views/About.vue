<template>
  <div class="font-weight-thin">
    <div class="display-1 text-xs-center">About</div>
    <img src="@/assets/logo.png" alt="logo">
    <div class="my-2">This Project base Vue 2.5, Using @vue/cli 3.1.3 building this Project.</div>
    <div class="my-2">Technology Stack</div>
    <ul>
      <li>Vue</li>
      <li>Typescript</li>
      <li>@vue/cli 3.x</li>
      <li>vue-router</li>
      <li>vuex</li>
      <li>sass</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {}
</script>

<style lang="sass" scoped>
  div
    img
      display: block;
      margin: 0 auto;
</style>


