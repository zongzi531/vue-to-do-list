<template>
  <v-footer :app="app" class="font-weight-thin px-4" color="amber" light>
    <v-spacer />
    {{author}}
  </v-footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VIEWSAUTHOR } from '@/config';

@Component
export default class Footer extends Vue {

  @Prop({ default: false })
  private app!: boolean;

  private author: string = VIEWSAUTHOR.ZONG;
}
</script>
