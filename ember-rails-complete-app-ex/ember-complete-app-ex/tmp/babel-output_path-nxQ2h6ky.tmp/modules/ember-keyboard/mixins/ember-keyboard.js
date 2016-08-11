import Ember from 'ember';

var Mixin = Ember.Mixin;
var computed = Ember.computed;
var _get = Ember.get;
var getProperties = Ember.getProperties;
var observer = Ember.observer;
var on = Ember.on;
var service = Ember.inject.service;

export default Mixin.create({
  keyboardPriority: 0,

  keyboard: service(),

  _activateKeyboard: on('init', observer('keyboardActivated', function () {
    var _getProperties = getProperties(this, 'keyboard', 'keyboardActivated');

    var keyboard = _getProperties.keyboard;
    var keyboardActivated = _getProperties.keyboardActivated;

    if (keyboardActivated === true) {
      keyboard.activate(this);
    } else if (keyboardActivated === false) {
      keyboard.deactivate(this);
    }
  })),

  _pushToKeyboardPriorityLevel: observer('_keyboardPriorityLevel', function () {
    var _getProperties2 = getProperties(this, 'keyboard', 'keyboardActivated');

    var keyboard = _getProperties2.keyboard;
    var keyboardActivated = _getProperties2.keyboardActivated;

    if (keyboardActivated === true) {
      keyboard.deactivate(this);
      keyboard.activate(this);
    }
  }),

  _keyboardPriorityLevel: computed('keyboardPriority', 'keyboardFirstResponder', {
    get: function get() {
      return _get(this, 'keyboardFirstResponder') ? 'firstResponder' : parseInt(_get(this, 'keyboardPriority'), 10);
    }
  }).readOnly()
});