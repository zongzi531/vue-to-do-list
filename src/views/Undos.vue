<template>
  <div>
    <Card
      v-for="(item, index) in todos"
      v-if="item.type === type"
      :class="{ 'mb-4': index !== todos.length - 1 }"
      :key="index"
      :item="item"
      @delete="del(index)"
      @edit="edit(item, index)"
      @done="done(index)" />
    <div v-if="undoLen <= 0" class="font-weight-thin display-1 text-xs-center grey--text">No Undos.</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import { todos } from '@/store/interface';
import { TODOS, DIALOGTODOFORM } from '@/store/types';
import { DIALOGTITLE, TODOTYPE } from '@/config';

@Component({
  components: {
    Card,
  },
})
export default class Undos extends Vue {

  private get todos() { return this.$store.state.todos; }

  private get undoLen() { return this.todos.filter(({ type }: { type: TODOTYPE }) => (type === TODOTYPE.UNDO)).length; }

  private get commit() { return this.$store.commit; }

  private type: string = TODOTYPE.UNDO;

  private del(index: number) {
    this.commit(TODOS.DEL, index);
  }

  private edit(todo: todos, index: number) {
    this.commit(DIALOGTODOFORM.SETTITLE, DIALOGTITLE.EDIT);
    this.commit(DIALOGTODOFORM.SETINDEX, index);
    this.commit(DIALOGTODOFORM.SHOW, {
      ...todo,
    });
  }

  private done(index: number) {
    this.commit(TODOS.DONE, index);
  }
}
</script>
