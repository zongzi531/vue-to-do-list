<template>
  <div id="app">
    <h1>To Do List</h1>
    <div class="list-wrapper">
      <input class="form-control" type="text" name="list" v-model="newTodo" v-on:keyup.enter="addTodo">
      <p class="help-block">Example block-level help text here.哈哈哈</p>
      <h4 class="listTitle">未完成</h4>
      <ul>
        <li v-for="(todo, index) in todos">
          <p class="bg-primary list-text"><input type="checkbox"  v-model="checked" @click="haveDo(index)">{{todo.text}}<button class="btn btn-primary btn-sm removebtn" type="button" @click="removeTodo(index)">X</button></p>
        </li>
      </ul>
      <h4 class="listTitle">已完成</h4>
      <ul>
        <li v-for="(todo, index) in havedos">
          {{todo.text}}
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
      checked: false,
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
      this.things = this.todos[index].text
      this.todos.splice(index, 1)
    },
    haveDo: function (index) {
      this.things = this.todos[index].text
      this.todos.splice(index, 1)
      this.checked = false
      this.havedos.push({text: this.things})
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

.listTitle {
  text-align: left;
}
</style>
