<template>
  <div id="app" class="row" @click="changecancel">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <Title :title="title" :author="author"></Title>
      <div class="list-wrapper">
        <Input v-model="newTodo" @submit="addTodo"></Input>
        <ColorBtn :colors="colors" @choice="havecolor"></ColorBtn>
        <HelpNote :note="helpNote"></HelpNote>
        <List></List>
 <!--        <ul class="nav nav-tabs nav-justified" v-bind:class="todotabsClass" role="tablist" @click="reversetodo(todoflag)"><li role="presentation" class="active"><a href="#">未完成 <span class="badge">{{todos.length}}</span></a></li></ul>
        <ul class="list-ul" v-show="todoflag">
          <li v-for="(todo, index) in todos" class="list-item" v-bind:class="'bg-' + todo.color" v-dragging="{item:todo, list:todos, group:'todo'}" :key="todo.text">
            <span class="glyphicon glyphicon-option-vertical"></span>
            <span class="checkbox-todo" @click.stop="haveDo(index)"></span>
            <span class="glyphicon glyphicon-remove btn-del" @click.stop="removeTodo(index)"></span>
            <p class="list-text" v-bind:title="todo.text" @click.stop="change(index)">{{todo.text}}</p>
            <input v-if="changeflag == index" @click.stop="change(index)" class="form-control changeText" v-model="changeText" type="text" v-on:keyup.enter="changeTodo(index)">
          </li>
        </ul>
        <ul class="nav nav-tabs nav-justified" v-bind:class="havedotabsClass" role="tablist" @click="reversehavedo(havedoflag)"><li role="presentation" class="active"><a href="#">已完成 <span class="badge">{{havedos.length}}</span></a></li></ul>
        <ul class="list-ul" v-show="havedoflag">
          <li v-for="(havedo, index) in havedos" class="list-item" v-bind:class="'bg-' + havedo.color" v-dragging="{item:havedo, list:havedos, group:'havedo'}" :key="havedo.text">
            <span class="glyphicon glyphicon-option-vertical"></span>
            <span class="glyphicon glyphicon-ok checkbox-havedo" @click.stop="unDo(index)"></span>
            <span class="glyphicon glyphicon-remove btn-del" @click.stop="removeUndo(index)"></span>
            <p class="list-text" v-bind:title="havedo.text"><span class="through">{{havedo.text}}</span></p>
          </li>
        </ul> -->
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

  import { title, author, helpNote, colors } from './config'

  export default {
    data () {
      return {
        title,
        author,
        helpNote,
        newTodo: '',
        changeText: '',
        todoflag: true,
        havedoflag: false,
        changeflag: -1,
        todos: [],
        havedos: [],
        color: 0,
        colors
      }
    },
    computed: {
      havedotabsClass: function () {
        return {
          'tabs-bottom': !this.havedoflag || !this.havedos.length
        }
      },
      todotabsClass: function () {
        return {
          'tabs-bottom': !this.todoflag || !this.todos.length
        }
      }
    },
    mounted () {
      this.$dragging.$on('dragged', ({value}) => {
        this.changeflag = -1
        this.changeText = ''
        console.log(value.item)
        console.log(value.list)
        console.log(value.otherData)
      })
    },
    methods: {
      addTodo: function () {
        console.log(this.newTodo)
        let text = this.newTodo.trim()
        let color = this.colors[this.color].color
        if (text) {
          this.todos.push({text: text, color: color})
          this.newTodo = ''
        }
      },
      removeTodo: function (index) {
        this.todos.splice(index, 1)
      },
      removeUndo: function (index) {
        this.havedos.splice(index, 1)
      },
      haveDo: function (index) {
        this.havedos.push({text: this.todos[index].text, color: this.todos[index].color})
        this.todos.splice(index, 1)
      },
      unDo: function (index) {
        this.todos.push({text: this.havedos[index].text, color: this.havedos[index].color})
        this.havedos.splice(index, 1)
      },
      reversetodo: function (val) {
        this.todoflag = !val
      },
      reversehavedo: function (val) {
        this.havedoflag = !val
      },
      havecolor: function (index) {
        console.log(index)
        this.colors[this.color].flag = ''
        this.color = index
        this.colors[index].flag = 'active'
      },
      change: function (index) {
        this.changeflag = index
      },
      changeTodo: function (index) {
        let changeText = this.changeText.trim()
        this.changeflag = -1
        this.changeText = ''
        this.todos[index].text = changeText
      },
      changecancel: function () {
        this.changeflag = -1
        this.changeText = ''
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
