<template>
  <div>
    <ul class="list-ul" v-show="showFlag">
      <li
        v-for="(todo, index) in todos"
        :class="'list-item bg-' + todo.color"
        v-dragging="{ item: todo, list: todos, group: 'todo' }"
        :key="todo.text">

        <span class="glyphicon glyphicon-option-vertical"></span>

        <span
          :class="{ 'checkbox-todo': isToDos, 'glyphicon glyphicon-ok checkbox-havedo': !isToDos }"
          @click.stop="haveDo(index)">
        </span>

        <span
          class="glyphicon glyphicon-remove btn-del"
          @click.stop="removeTodo(index)">
        </span>

        <p
          class="list-text"
          :title="todo.text"
          @click.stop="change(index)">
          <span :class="{ 'through': !isToDos }">{{havedo.text}}</span>
        </p>

        <input
          v-if="isToDos && changeflag == index"
          @click.stop="change(index)"
          class="form-control changeText"
          v-model="changeText"
          type="text"
          v-on:keyup.enter="changeTodo(index)">

      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ListItem',
    props: {
      isToDos: {
        type: Boolean,
        default: true
      },
      showFlag: {
        type: Boolean,
        default: true
      },
      todos: {
        type: Array,
        default: []
      }
    },
    method: {
      change (index) {
        if (!this.isToDos) { return }
      }
    }
  }
</script>

<style></style>
