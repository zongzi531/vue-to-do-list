<template>
  <div id="app">
    <h1 class="title">{ To Do List }<small class="by">by Zong</small></h1>
    <div class="list-wrapper">
      <div class="input-group">
        <input class="form-control" type="text" name="list" v-model="newTodo" v-on:keyup.enter="addTodo">
        <span class="input-group-addon" @click="addTodo"><span class="glyphicon glyphicon-plus btn-add"></span></span>
      </div>
      <p class="help-block help-note">来添加你的备忘录吧！</p>
      <ul class="nav nav-pills list-title" role="tablist" @click="reversetodo(todoflag)"><li role="presentation" class="active"><a href="#">未完成 <span class="badge">{{todos.length}}</span></a></li></ul>
      <ul v-show="todoflag">
        <li v-for="(todo, index) in todos" class="list-item" @click.stop="haveDo(index)">
          <p class="list-text" v-bind:title="todo.text">{{todo.text}}<span class="glyphicon glyphicon-remove btn-del" @click.stop="removeTodo(index)"></span></p>
        </li>
      </ul>
      <ul class="nav nav-pills list-title" role="tablist" @click="reversehavedo(havedoflag)"><li role="presentation" class="active"><a href="#">已完成 <span class="badge">{{havedos.length}}</span></a></li></ul>
      <ul v-show="havedoflag">
        <li v-for="(todo, index) in havedos" class="list-item" @click.stop="unDo(index)">
          <p class="list-text" v-bind:title="todo.text"><span class="through">{{todo.text}}</span><span class="glyphicon glyphicon-remove btn-del" @click.stop="removeUndo(index)"></span></p>
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
      todoflag: true,
      havedoflag: false,
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
    },
    reversetodo: function (val) {
      this.todoflag = !val
    },
    reversehavedo: function (val) {
      this.havedoflag = !val
    }
  }
}
</script>

<style>
@import '../static/normalize-css/normalize.css';
@import '../static/bootstrap/dist/css/bootstrap.min.css';

ul {
  padding: 0;
  margin-bottom: 10px;
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
  width: 35%;
  margin: 0 auto;
}

.list-text {
  text-align: left;
  margin-right: 60px;
  overflow: hidden;
  cursor: default;
}

.removebtn {
  float: right;
}

.help-note {
  text-align: left;
}

.list-item {
  position: relative;
  padding-left: 20px;
  font-size: 20px;
  height: 50px;
  line-height: 50px;
}

.list-title {
  background: #337ab7;
}

.list-title {
  margin-top: 10px;
}

.through {
  text-decoration: line-through;
  color: #ccc;
}

.btn-del {
  position: absolute;
  right: 20px;
  top: 15px;
  font-size: 12px;
  padding: 4px;
}

.btn-add {
  font-size: 12px;
}

.input-group-addon {
  cursor: pointer;
}

.title {
  position: relative;
}

.by {
  position: absolute;
  bottom: 0;
  font-size: 12px;
  margin-left: 10px;
}
</style>
