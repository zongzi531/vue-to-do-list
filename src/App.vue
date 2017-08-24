<template>
  <div id="app" class="row" @click="changecancel">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <h1 class="title">{ To Do List }<small class="by">by Zong</small></h1>
      <div class="list-wrapper">
        <div class="input-group">
          <input class="form-control" type="text" name="list" v-model="newTodo" v-on:keyup.enter="addTodo">
          <span class="input-group-addon" @click="addTodo"><span class="glyphicon glyphicon-plus btn-add"></span></span>
        </div>
        <div class="colorBtn">
          <button v-for="(color, index) in colors" type="button" class="btn" v-bind:class="'btn-' + color.color + ' ' + color.flag" @click="havecolor(index)"></button>
        </div>
        <p class="help-block help-note">来添加你的备忘录吧！</p>
        <ul class="nav nav-tabs nav-justified" v-bind:class="todotabsClass" role="tablist" @click="reversetodo(todoflag)"><li role="presentation" class="active"><a href="#">未完成 <span class="badge">{{todos.length}}</span></a></li></ul>
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
        </ul>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTodo: '',
      changeText: '',
      todoflag: true,
      havedoflag: false,
      changeflag: -1,
      todos: [],
      havedos: [],
      color: 0,
      colors: [
        {color: 'default', flag: 'active'},
        {color: 'primary', flag: ''},
        {color: 'success', flag: ''},
        {color: 'info', flag: ''},
        {color: 'warning', flag: ''},
        {color: 'danger', flag: ''}
      ]
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
  }
}
</script>

<style>
@import '../static/normalize.css';
@import '../static/bootstrap/dist/css/bootstrap.min.css';

ul {
  padding: 0;
  margin-bottom: 0;
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
  font-size: 0;
}

.list-text {
  text-align: left;
  margin-right: 60px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: default;
}

.removebtn {
  float: right;
}

.help-note {
  text-align: left;
  font-size: 14px;
}

.list-item {
  position: relative;
  padding-left: 70px;
  font-size: 20px;
  height: 50px;
  line-height: 50px;
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

.btn {
  border-radius: 50%;
  font-size: 0;
  padding: 8px;
  margin: 0 6px;
}

.colorBtn {
  text-align: left;
  margin-top: 8px;
  margin-bottom: 8px;
}

.nav-justified {
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  margin-top: 10px;
}

.tabs-bottom {
  border-radius: 4px !important;
  border: 1px solid #ddd !important;
}

.nav-justified li a {
  font-size: 14px;
  text-align: left !important;
  border: none !important;
  border-radius: 4px !important;
}

.list-ul {
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}

.list-ul li:last-child {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom: 1px solid #ddd;
}

.checkbox-todo {
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 8px;
  border: 2px solid #2c3e50;
  left: 30px;
  top: 15px;
}

.checkbox-todo:hover {
  background: rgba(0, 0, 0, 0.1);
}

.checkbox-havedo {
  position: absolute;
  left: 30px;
  top: 15px;
  color: #ccc;
}

.checkbox-havedo:hover,
.checkbox-havedo:hover ~ .through {
  color: #8e8d8d;
}

.glyphicon-option-vertical {
  position: absolute;
  top: 15px;
  left: 5px;
}

.glyphicon-option-vertical {
  cursor: move;
}

.changeText {
  position: absolute;
  top: 8px;
  left: 70px;
  width: calc(100% - 130px);
  z-index: 1;
}
</style>
