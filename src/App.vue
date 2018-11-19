<template>
  <v-app dark>
    <Navigation app :show="navigation" @on-change="navChange"/>
    <Toolbar app @side="navigationOpen" @add="add"/>
    <Content :data="todos" @delete="del" @edit="edit" @done="done" />
    <Footer app />
    <Dialog :show="dialog" @close="close" @save="save"/>
    <!-- <Snackbar :show="snackbar" text="Coming soon..." @close="snackbarClose" /> -->
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import Toolbar from '@/components/Toolbar.vue';
import Content from '@/components/Content.vue';
import Footer from '@/components/Footer.vue';
import Dialog from '@/components/Dialog.vue';
import Snackbar from '@/components/Snackbar.vue';
import { ITodo, todos } from '@/components/Card.vue';

@Component({
  components: {
    Navigation,
    Toolbar,
    Content,
    Footer,
    Dialog,
    Snackbar,
  },
})
export default class App extends Vue {

  private dialog: boolean = false;
  private snackbar: boolean = false;
  private navigation: boolean = false;
  private todos: todos = [];

  private add() {
    this.dialog = true;
  }

  private close() {
    this.dialog = false;
  }

  private save(todo: ITodo) {
    this.todos.push(todo);
    this.dialog = false;
  }

  private navigationOpen() {
    this.navigation = !this.navigation;
    this.snackbar = true;
  }

  private snackbarClose() {
    this.snackbar = false;
  }

  private navChange(value: boolean) {
    this.navigation = value;
  }

  private del(index: number) {
    this.todos.splice(index, 1);
  }

  private edit({ item, index }: { item: todos, index: number }) {}
  private done(index: number) {}
}
</script>
