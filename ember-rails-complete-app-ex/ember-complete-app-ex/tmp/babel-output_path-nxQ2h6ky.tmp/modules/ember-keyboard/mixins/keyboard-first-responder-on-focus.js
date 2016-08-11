import Ember from 'ember';

var Mixin = Ember.Mixin;
var on = Ember.on;
var set = Ember.set;
var setProperties = Ember.setProperties;

export default Mixin.create({
  makeFirstResponderOnFocusIn: on('click', 'focusIn', function () {
    setProperties(this, {
      keyboardActivated: true,
      keyboardFirstResponder: true
    });
  }),

  resignFirstResponderOnFocusOut: on('focusOut', function () {
    set(this, 'keyboardFirstResponder', false);
  })
});