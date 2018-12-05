<template>
  <v-card light>
    <v-card-title primary-title>
      <div :class="{ 'grey--text': item.type === HAVEDO }">
        <h3 class="headline mb-0">{{item.title}}</h3>
        <div>{{item.desc}}</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-spacer />
      <v-btn flat color="red" @click.stop="del">delete</v-btn>
      <v-btn flat color="info" @click.stop="edit" v-if="item.type === UNDO">edit</v-btn>
      <v-btn flat color="amber" @click.stop="done">{{item.type === UNDO ? 'done' : 'return'}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { ITodo } from '@/store/interface';
import { TODOTYPE } from '@/config';

@Component
export default class Card extends Vue {

  @Prop({
    default: () => ({
      title: '',
      desc: '',
      type: TODOTYPE.UNDO,
    }),
  })
  private item!: ITodo;

  private UNDO: string = TODOTYPE.UNDO;

  private HAVEDO: string = TODOTYPE.HAVEDO;

  @Emit('delete') private del() {}

  @Emit('edit') private edit() {}

  @Emit('done') private done() {}
}
</script>
