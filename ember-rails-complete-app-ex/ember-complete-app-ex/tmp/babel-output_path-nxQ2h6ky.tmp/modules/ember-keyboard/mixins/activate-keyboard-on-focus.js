import Ember from 'ember';

var Mixin = Ember.Mixin;
var on = Ember.on;
var set = Ember.set;

export default Mixin.create({
  activateKeyboardWhenFocused: on('click', 'focusIn', function () {
    set(this, 'keyboardActivated', true);
  }),

  deactivateKeyboardWhenFocusOut: on('focusOut', function () {
    set(this, 'keyboardActivated', false);
  })
});