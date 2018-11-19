<template>
  <v-card light>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{item.title}}</h3>
        <div>{{item.desc}}</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-spacer />
      <v-btn flat color="red" @click.stop="del">delete</v-btn>
      <v-btn flat color="info" @click.stop="edit">edit</v-btn>
      <v-btn flat color="amber" @click.stop="done">done</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

export interface ITodo {
  title: string;
  desc: string;
}

export type todos = ITodo[];

@Component
export default class Card extends Vue {

  @Prop({
    default: {
      title: '',
      desc: '',
    },
  })
  private item!: ITodo;

  @Emit('delete')
  private del() {}

  @Emit('edit')
  private edit() {}

  @Emit('done')
  private done() {}
}
</script>
