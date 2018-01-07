<template>
  <div>
    <h1 class="title">{{title}}<small class="by">{{author}}</small></h1>
  </div>
</template>

<script>
  export default {
    name: 'Title',
    props: {
      title: String,
      author: String
    }
  }
</script>

<style></style>
