import Ember from 'ember';

var computed = Ember.computed;
var Component = Ember.Component;

export default Component.extend({
  actionArgs: null,
  large: true,

  actions: {
    fireButtonAction: function fireButtonAction() {
      var actionArgs = this.get('actionArgs');
      if (actionArgs) {
        this.sendAction('action', actionArgs || null);
      } else {
        this.sendAction('action');
      }
    }
  },

  _btnClassString: computed('btnClass', function () {
    return this.get('btnClass') + ' btn-floating ' + (this.get('large') ? 'btn-large' : '');
  })
});