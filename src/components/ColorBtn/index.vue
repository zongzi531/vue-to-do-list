<template>
  <div class="colorBtn">
    <button
      v-for="(color, index) in colors"
      type="button"
      :class="'btn btn-' + color.color + ' ' + color.flag"
      @click="choice(index)">
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      colors: {
        type: Array,
        default: []
      }
    },
    methods: {
      choice (index) {
        this.$emit('choice', index)
      }
    }
  }
</script>

<style></style>
