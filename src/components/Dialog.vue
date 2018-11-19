<template>
  <v-dialog v-model="show" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">Add New Todo</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field color="amber" v-model="title" label="Todo Title" clearable />
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field color="amber" v-model="desc" label="Todo Description" clearable />
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
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator';
import { ITodo } from '@/components/Card.vue';

@Component
export default class Dialog extends Vue {

  @Prop({ default: false })
  private show!: boolean;

  private title: string = '';

  private desc: string = '';

  private initDialog() {
    this.title = '';
    this.desc = '';
  }

  @Watch('show')
  private isShow() {
    if (!this.show) {
      this.initDialog();
    }
  }

  @Emit('close')
  private close() {}

  @Emit('save')
  private save() {
    const todo: ITodo = {
      title: this.title,
      desc: this.desc,
    };
    return todo;
  }
}
</script>
