<template>
  <div>
    <ul class="list-ul" v-show="showFlag">
      <li
        v-for="(todo, index) in todos"
        v-dragging="{ item: todo, list: todos, group }"
        :class="'list-item bg-' + todo.color"
        :key="todo.key">

        <span class="glyphicon glyphicon-option-vertical"></span>

        <span
          :class="{ 'checkbox-todo': isToDos, 'glyphicon glyphicon-ok checkbox-havedo': !isToDos }"
          @click.stop="handleChange(index)">
        </span>

        <span
          class="glyphicon glyphicon-remove btn-del"
          @click.stop="handleDel(index)">
        </span>

        <p
          class="list-text"
          :title="todo.text"
          @click.stop="handleEdit(index)">
          <span :class="{ 'through': !isToDos }">{{todo.text}}</span>
        </p>

        <input
          v-if="isToDos && changeflag == index"
          v-focus
          type="text"
          class="form-control changeText"
          :value="value"
          @blur="handleBlur"
          @input="update($event.target.value)"
          @click.stop="handleEdit(index)"
          @keyup.enter="handleSubmit(index)">

      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ListItem',
    props: {
      value: String,
      group: String,
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
      },
      changeflag: {
        type: Number,
        default: -1
      }
    },
    directives: {
      focus: {
        inserted (el) {
          el.focus()
        }
      }
    },
    methods: {
      handleChange (index) {
        this.$emit('on-Change', index)
      },
      handleDel (index) {
        this.$emit('on-Del', index)
      },
      handleEdit (index) {
        if (!this.isToDos) { return }
        this.$emit('on-Edit', index)
      },
      handleSubmit (index) {
        this.$emit('on-Submit', index)
      },
      update (value) {
        this.$emit('input', value)
      },
      handleBlur () {
        this.$emit('on-Blur')
      }
    }
  }
</script>

<style></style>
