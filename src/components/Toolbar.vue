<template>
  <v-toolbar :app="app">
    <v-toolbar-side-icon @click="side" />
    <v-toolbar-title class="font-weight-thin">{{title}}</v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon @click.stop="add">add_circle</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { VIEWSTITLE } from '@/config';

@Component
export default class Toolbar extends Vue {

  @Prop({ default: false })
  private app!: boolean;

  private title: string = VIEWSTITLE.HOME;

  @Emit('add')
  private add() {}

  @Emit('side')
  private side() {}
}
</script>
