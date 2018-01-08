<template>
  <div class="input-group">
    <input class="form-control" ref="input" type="text" name="list" :value="value" @input="update($event.target.value)" @keyup.enter="submit">
    <span class="input-group-addon" @click="submit"><span class="glyphicon glyphicon-plus btn-add"></span></span>
  </div>
</template>

<script>
  export default {
    props: {
      value: String
    },
    methods: {
      submit () {
        this.$emit('submit')
      },
      update (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style></style>
