import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [{id: 1, name: 'buy socks', active: true},
      {id: 2, name: 'buy clocks', active: true},
      {id: 3, name: 'buy bananas', active: false}];
  }
});
