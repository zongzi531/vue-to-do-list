<template>
  <div id="app">
    <h1>{ To Do List }</h1>
    <div class="list-wrapper">
      <input class="form-control" type="text" name="list" v-model="newTodo" v-on:keyup.enter="addTodo">
      <p class="help-block help-note">来添加你的备忘录吧！</p>
      <ul class="nav nav-pills list-title" role="tablist"><li role="presentation" class="active"><a href="#">未完成 <span class="badge">{{todos.length}}</span></a></li></ul>
      <ul>
        <li v-for="(todo, index) in todos" class="list-item" @click.stop="haveDo(index)">
          <p class="list-text">{{todo.text}}<span class="glyphicon glyphicon-remove" @click.stop="removeTodo(index)"></span></p>
        </li>
      </ul>
      <ul class="nav nav-pills list-title" role="tablist"><li role="presentation" class="active"><a href="#">已完成 <span class="badge">{{havedos.length}}</span></a></li></ul>
      <ul>
        <li v-for="(todo, index) in havedos" class="list-item" @click.stop="unDo(index)">
          <p class="list-text">{{todo.text}}<span class="glyphicon glyphicon-remove" @click.stop="removeUndo(index)"></span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTodo: '',
      things: '',
      todos: [],
      havedos: []
    }
  },
  methods: {
    addTodo: function () {
      let text = this.newTodo.trim()
      if (text) {
        this.todos.push({text: text})
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
      this.things = this.todos[index].text
      this.todos.splice(index, 1)
      this.havedos.push({text: this.things})
      this.things = ''
    },
    unDo: function (index) {
      this.things = this.havedos[index].text
      this.havedos.splice(index, 1)
      this.todos.push({text: this.things})
      this.things = ''
    }
  }
}
</script>

<style>
@import '../static/normalize-css/normalize.css';
@import '../static/bootstrap/dist/css/bootstrap.min.css';

ul {
  padding: 0;
}

li {
  list-style: none;
}

button {
  outline: none !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.list-wrapper {
  width: 60%;
  margin: 0 auto;
}

.list-text {
  text-align: left;
}

.removebtn {
  float: right;
}

.help-note {
  text-align: left;
}

.list-item {
  padding-left: 20px;
  font-size: 20px;
  height: 50px;
  line-height: 50px;
}

.list-title {
  background: #337ab7;
}
</style>
