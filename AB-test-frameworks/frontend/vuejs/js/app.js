Vue.component('todo-item', {
  props: ['todo'],
  template: `<h2>{{todo.name}}</h2>`
});

Vue.component('todo-list', {
  props: ['todos'],
  template: `<ul>
               <todo-item 
                 v-for="todo in todos"
                 :todo="todo"
                 :key="todo.id">
               </todo-item>
             </ul>`
});

var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { name: 'buy new socks',    active: true},
      { name: 'buy other things', active: false }
    ]
  }
});
