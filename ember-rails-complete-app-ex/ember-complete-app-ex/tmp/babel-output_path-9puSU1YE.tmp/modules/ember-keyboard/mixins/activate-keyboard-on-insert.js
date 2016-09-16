import Ember from 'ember';

var Mixin = Ember.Mixin;
var on = Ember.on;
var set = Ember.set;

export default Mixin.create({
  activateKeyboardWhenPresent: on('didInsertElement', function () {
    set(this, 'keyboardActivated', true);
  })
});