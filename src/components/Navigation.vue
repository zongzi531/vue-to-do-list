<template>
  <v-navigation-drawer light :app="app" v-model="currentShow">
    <v-list dense>
      <v-list-tile v-for="(item, index) in routes" v-if="!item.meta.notShow" :key="index" @click="push(item.name)" :color="routeName === item.name ? 'amber' : ''">
        <v-list-tile-action>
          <v-icon :color="routeName === item.name ? 'amber' : ''">{{item.meta.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{item.name}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { routes } from '@/router';

@Component
export default class Navigation extends Vue {

  @Prop({ default: false })
  private app!: boolean;

  @Prop({ default: false })
  private show!: boolean;

  private routes = routes;

  private get routeName() { return this.$route.name; }

  private get currentShow() { return this.show; }

  private set currentShow(value) {
    this.setCurrentShow(value);
  }

  @Emit('on-change')
  private setCurrentShow(value: boolean) {
    return value;
  }

  private push(name: string) {
    this.$router.push({ name });
  }
}
</script>
