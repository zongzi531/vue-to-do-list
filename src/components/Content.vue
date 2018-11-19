<template>
  <v-content>
    <v-container fluid>
      <!-- <router-view /> -->
      <Card
        v-for="(item, index) in data"
        :class="{ 'mb-4': index !== data.length - 1 }"
        :key="index"
        :item="item"
        @delete="del(index)"
        @edit="edit(item, index)"
        @done="done(index)" />
      <div v-if="data.length <= 0" class="font-weight-thin display-1 text-xs-center grey--text">No items.</div>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import Card, { todos } from '@/components/Card.vue';

@Component({
  components: {
    Card,
  },
})
export default class Content extends Vue {

  @Prop({ default: [] })
  private data!: todos;

  @Emit('delete')
  private del(index: number) {
    return index;
  }

  @Emit('edit')
  private edit(item: todos, index: number) {
    return { item, index };
  }

  @Emit('done')
  private done(index: number) {
    return index;
  }
}
</script>
