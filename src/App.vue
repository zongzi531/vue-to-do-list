<template>
  <div id="app" class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <Title :title="title" :author="author"></Title>
      <div class="list-wrapper">
        <Input v-model="newTodo" @submit="addTodo"></Input>
        <ColorBtn :colors="colors" @choice="havecolor"></ColorBtn>
        <HelpNote :note="helpNote"></HelpNote>
        <List
          :label="labelTodos"
          :todos="todos"
          :showFlag="todoflag"
          :group="todosGroup"
          :isToDos="true"
          :changeflag="changeflag"
          v-model="changeText"
          @on-Click="reversetodo"
          @on-Change="haveDo"
          @on-Del="removeTodo"
          @on-Blur="changecancel"
          @on-Edit="change"
          @on-Submit="changeTodo">
        </List>
        <List
          :label="labelHavedos"
          :todos="havedos"
          :showFlag="havedoflag"
          :group="havedosGroup"
          :isToDos="false"
          :changeflag="changeflag"
          @on-Click="reversehavedo"
          @on-Change="unDo"
          @on-Del="removeUndo">
        </List>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
  import Title from './components/Title'
  import Input from './components/Input'
  import ColorBtn from './components/ColorBtn'
  import HelpNote from './components/HelpNote'
  import List from './components/List'

  import { title, author, helpNote, colors, labelTodos, labelHavedos, activeColor, ONE, MinusONE, NullString, todosGroup, havedosGroup } from './config'

  export default {
    data () {
      return {
        title,
        author,
        helpNote,
        colors,
        labelTodos,
        labelHavedos,
        todosGroup,
        havedosGroup,
        newTodo: '',
        changeText: '',
        todoflag: true,
        havedoflag: false,
        changeflag: -1,
        todos: [],
        havedos: [],
        color: 0,
        keyIndex: 0
      }
    },
    mounted () {
      this.$dragging.$on('dragged', ({value}) => {
        this.changeflag = MinusONE
        this.changeText = NullString
        // console.log(value.item)
        // console.log(value.list)
        // console.log(value.otherData)
      })
    },
    methods: {
      addTodo () {
        const text = this.newTodo.trim()
        const color = this.colors[this.color].color
        const key = `${text}${color}${this.keyIndex++}`
        if (text) {
          this.todos.push({text, color, key})
          this.newTodo = NullString
        }
      },
      removeTodo (index) {
        this.todos.splice(index, ONE)
      },
      removeUndo (index) {
        this.havedos.splice(index, ONE)
      },
      haveDo (index) {
        const text = this.todos[index].text
        const color = this.todos[index].color
        this.havedos.push({text, color})
        this.todos.splice(index, ONE)
      },
      unDo (index) {
        const text = this.havedos[index].text
        const color = this.havedos[index].color
        this.todos.push({text, color})
        this.havedos.splice(index, ONE)
      },
      reversetodo (val) {
        this.todoflag = !val
      },
      reversehavedo (val) {
        this.havedoflag = !val
      },
      havecolor (index) {
        this.colors[this.color].flag = NullString
        this.color = index
        this.colors[index].flag = activeColor
      },
      change (index) {
        this.changeflag = index
        const text = this.todos[index].text
        this.changeText = text
      },
      changeTodo (index) {
        const changeText = this.changeText.trim()
        this.changeflag = MinusONE
        this.changeText = NullString
        this.todos[index].text = changeText
      },
      changecancel () {
        this.changeflag = MinusONE
        this.changeText = NullString
      }
    },
    components: {
      Title,
      Input,
      ColorBtn,
      HelpNote,
      List
    }
  }
</script>

<style>
  @import '../static/css/app.css'
</style>
