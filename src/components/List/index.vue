<template>
  <div>
    <ul
      :class="[{ 'tabs-bottom': !havedoflag || !havedos.length }, 'nav nav-tabs nav-justified']"
      role="tablist"
      @click="reversetodo(todoflag)">

      <li role="presentation" class="active"><a href="#">未完成 <span class="badge">{{todos.length}}</span></a></li>
    </ul>
    <ListItem></ListItem>
  </div>
</template>

<script>
  import ListItem from '../ListItem'

  export default {
    components: {
      ListItem
    }
  }
</script>

<style></style>
