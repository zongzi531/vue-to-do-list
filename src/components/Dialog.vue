<template>
  <v-dialog v-model="dialog.isShow" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">{{dialog.title}}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field color="amber" v-model="dialog.form.title" label="Todo Title" clearable />
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field color="amber" v-model="dialog.form.desc" label="Todo Description" clearable />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" flat @click="close">Close</v-btn>
        <v-btn color="amber" flat @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ITodo } from '@/store/interface';
import { TODOS, DIALOGTODOFORM } from '@/store/types';
import { DIALOGTITLE } from '@/config';

@Component
export default class Dialog extends Vue {

  private get dialog() { return this.$store.state.dialogTodoForm; }

  private get commit() { return this.$store.commit; }

  private close() {
    this.commit(DIALOGTODOFORM.HIDE);
  }

  private save() {
    if (this.dialog.title === DIALOGTITLE.NEW) {
      this.commit(TODOS.ADD, {
        title: this.dialog.form.title,
        desc: this.dialog.form.desc,
      });
    } else if (this.dialog.title === DIALOGTITLE.EDIT) {
      this.commit(TODOS.EDIT, {
        title: this.dialog.form.title,
        desc: this.dialog.form.desc,
        index: this.dialog.index,
      });
    }
    this.commit(DIALOGTODOFORM.HIDE);
  }
}
</script>
