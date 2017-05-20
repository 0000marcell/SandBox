import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todo-list', 'Integration | Component | todo list', {
  integration: true
});

let baseData = [{id 1, name: 'buy socks', active: true},
  {id: 2, name: 'buy things', active: true},
  {id: 3, name: 'buy another', active: false}];

test('#todo-list-01 show all the todo', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let data = baseData.slice();
  this.set('model', data);
  this.render(hbs`{{todo-list model=model}}`);
  assert.equal(this.$('.todo-list li').length, 3);
});

test('#todo-list-02 add a new todo', function(assert){
  let data = baseData.slice();
  this.set('model', data);
  this.set('name', 'new todo');
  this.render(hbs`{{todo-list 
    name=name
    model=model}}`);
  this.$('#tl-test-addTodoBtn').click();
  assert.equal(this.$('.todo-list li').length, 4);
});
