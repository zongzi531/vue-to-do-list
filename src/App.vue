<template>
  <v-app dark>
    <Navigation app :show="navigation" @on-change="navChange"/>
    <Toolbar app @side="navigationOpen" @add="add"/>
    <Content />
    <Footer app />
    <Dialog />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import Toolbar from '@/components/Toolbar.vue';
import Content from '@/components/Content.vue';
import Footer from '@/components/Footer.vue';
import Dialog from '@/components/Dialog.vue';
import { DIALOGTODOFORM } from '@/store/types';
import { DIALOGTITLE } from '@/config';

@Component({
  components: {
    Navigation,
    Toolbar,
    Content,
    Footer,
    Dialog,
  },
})
export default class App extends Vue {

  private navigation: boolean = false;

  private get commit() { return this.$store.commit; }

  private add() {
    this.commit(DIALOGTODOFORM.SETTITLE, DIALOGTITLE.NEW);
    this.commit(DIALOGTODOFORM.SHOW);
  }

  private navigationOpen() {
    this.navigation = !this.navigation;
  }

  private navChange(value: boolean) {
    this.navigation = value;
  }
}
</script>
