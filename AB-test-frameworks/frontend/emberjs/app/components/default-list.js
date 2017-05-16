import Ember from 'ember';

export default Ember.Component.extend({
  showActive: true,
  actions: {
    showActive(){
      this.set('showActive', true);
    },
    showInactive(){
      this.set('showActive', false);
    }
  }
});
