<template>
  <v-navigation-drawer light :app="app" v-model="currentShow">
    <v-list dense>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>info</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Coming soon...</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {

  @Prop({ default: false })
  private app!: boolean;

  @Prop({ default: false })
  private show!: boolean;

  private get currentShow() {
    return this.show;
  }

  private set currentShow(value) {
    this.setCurrentShow(value);
  }

  @Emit('on-change')
  private setCurrentShow(value: boolean) {
    return value;
  }
}
</script>
