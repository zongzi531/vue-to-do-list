<template>
  <v-content>
    <v-container fluid>
      <router-view />
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Content extends Vue {}
</script>
