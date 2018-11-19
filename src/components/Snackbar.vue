<template>
  <v-snackbar
    v-model="show"
    color="info"
    top
    :timeout="timeout"
  >
    {{ text }}
    <v-btn
      flat
      @click="close"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class Snackbar extends Vue {

  @Prop({ default: false })
  private show!: boolean;

  @Prop({ default: 0 })
  private timeout!: number;

  @Prop({ default: '' })
  private text!: string;

  @Emit('close')
  private close() {}
}
</script>
