import Ember from 'ember';

const initialState = 
  [{id: 1, name: 'buy new socks!', active: true},
   {id: 2, name: 'buy orange juice', active: false}];

export default Ember.Route.extend({
  data: initialState,
  model(){
    return this.get('data');
  },
  actions: {
    add(name){
      let obj = {id: this.get('data.length') + 1, 
        name: name, active: true};
      this.get('data').pushObject(obj); 
      this.set('showActive', true);
    },
    remove(todo){
      this.get('data').removeObject(todo);
    },
    toggleActive(todo){
      Ember.set(todo, 'active', (todo.active) ? 
        false : true);
    }
  }
});
