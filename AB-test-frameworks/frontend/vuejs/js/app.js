var data = [
  { id: 1, name: 'buy new socks',    active: true},
  { id: 2, name: 'buy other things', active: true},
  { id: 3, name: 'buy a clock', active: false },
  { id: 4, name: 'buy a car', active: false }
];

Vue.component('todo-item', {
  props: ['todo', 'deactivateTodo'],
  template: `
    <div>
      <h2>{{todo.name}}</h2>
      <button @click="deactivateTodo(todo)">remove</button>
    </div>`
});

Vue.component('todo-list', {
  props: ['todos', 'addTodo', 'deactivateTodo'],
  template: `<div>
               <input v-model="newTodo">
               <button @click="addTodo(newTodo)">Do</button>
               <button @click="showActive">
                  Show active
               </button>
               <button @click="showInactive">
                  Show inactive
               </button>
               <button @click="showAll">
                  Show all
               </button>
               <ul>
                 <todo-item 
                   v-for="todo in filteredTodos"
                   :deactivate-todo="deactivateTodo"
                   :todo="todo"
                   :key="todo.id">
                 </todo-item>
               </ul>
             </div>`,
  computed: {
    filteredTodos: function(){
      console.log('showActive: ', this.filterActive);
      if(this.filterActive){
        return this.todos.filter((item) => {
          return item.active 
        });
      }else if(this.filterInactive){
        return this.todos.filter((item) => {
          return !item.active 
        });
      }else{
        return this.todos;
      }
    }
  },
  data: function(){
    return {
      newTodo: '',
      filterActive: false,
      filterInactive: false
    };
  },
  methods: {
    showActive: function(){
      console.log('show Active!!!');
      this.filterActive = true;
      this.filterInactive = false;
    },
    showInactive: function() {
      this.filterActive = false;
      this.filterInactive = true;
    },  
    showAll: function(){
      this.filterActive = false;
      this.filterInactive = false;
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    todos: data,
    newTodo: '',
    price: ''
  },
  methods: {
    addTodo: function (name){
      console.log('name: ', name);
      this.todos.push({name: name, 
        active: true});
    },
    deactivateTodo: function(todo){
      let result = this.todos.filter((item) => {
        if(item.id === todo.id){
          item.active = false; 
        }
        return item;
      });
      this.todos = result;
    }
  }
});
