<template>
  <div>
    <ul
      :class="[{ 'tabs-bottom': !showFlag || !todos.length }, 'nav nav-tabs nav-justified']"
      role="tablist"
      @click="click(showFlag)">

      <li role="presentation" class="active"><a href="#">{{label}} <span class="badge">{{todos.length}}</span></a></li>
    </ul>
    <ListItem
      :isToDos="isToDos"
      :showFlag="showFlag"
      :todos="todos"
      :changeflag="changeflag"
      :group="group"
      v-model="currentValue"
      @on-Change="handleChange"
      @on-Del="handleDel"
      @on-Edit="handleEdit"
      @on-Blur="handleBlur"
      @on-Submit="handleSubmit">
    </ListItem>
  </div>
</template>

<script>
  import ListItem from '../ListItem'

  export default {
    props: {
      label: String,
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
    computed: {
      currentValue: {
        get () {
          return this.value
        },
        set (val) {
          return this.$emit('input', val)
        }
      }
    },
    methods: {
      click (showFlag) {
        this.$emit('on-Click', showFlag)
      },
      handleChange (index) {
        this.$emit('on-Change', index)
      },
      handleDel (index) {
        this.$emit('on-Del', index)
      },
      handleEdit (index) {
        this.$emit('on-Edit', index)
      },
      handleSubmit (index) {
        this.$emit('on-Submit', index)
      },
      handleBlur () {
        this.$emit('on-Blur')
      }
    },
    components: {
      ListItem
    }
  }
</script>

<style></style>
