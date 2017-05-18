var data = [{id: 1, name: 'buy new socks',
  active: true},
  {id: 2, name: 'buy new things', active: true},
  {id: 3, name: 'buy another things', active: false}];

var todoList = Vue.component('todo-list', {
  props: ['createTodo', 'deactivateTodo',
          'todos'],
  template: `
    <div>
      <input v-model="name">
      <button @click="createTodo(name)">add todo</button>
      <button @click="showActive">Show Active</button>
      <button @click="showInactive">Show Inactive</button>
      <button @click="showAll">Show All</button>
      <todo-item v-for="todo in filterItems"
        :todo="todo"
        :key="todo.id"
        :deactivate-todo="deactivateTodo"
      >
      </todo-item>
    </div>
  `,
  computed: {
    filterItems: function () {
      if(this.filterActive){
        return this.todos.filter((item) => {
          return item.active; 
        });
      }else if(this.filterInactive){
        return this.todos.filter((item) => {
          return !item.active; 
        });
      }else{
        return this.todos;
      }
    }
  },
  data: function (){
    return {
      name: null,
      filterActive: true,
      filterInactive: false
    }
  },
  methods: {
    showActive(){
      this.filterActive = true;
      this.filterInactive = false;
    },
    showInactive(){
      this.filterActive = false;
      this.filterInactive = true;
    },
    showAll(){
      this.filterActive = false;
      this.filterInactive = false;
    }
  }
});

var todoItem = Vue.component('todo-item', {
  props: ['todo', 'deactivateTodo'],
  template: `
    <div>
      {{todo.name}} 
      <button @click="deactivateTodo(todo.id)">
        deactivate
      </button>
    </div>
  `
});

var app = new Vue({
  el: '#app', 
  data: {
    todos: data 
  },
  methods: {
    createTodo(name){
      this.todos.push({id: this.todos.length + 1, 
        name: name, active: true});
    },
    deactivateTodo(id){
      this.todos[id - 1].active = false; 
    }
  }
});


