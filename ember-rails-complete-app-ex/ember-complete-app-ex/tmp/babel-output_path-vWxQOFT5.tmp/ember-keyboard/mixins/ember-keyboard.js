define('ember-keyboard/mixins/ember-keyboard', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var Mixin = _ember['default'].Mixin;
  var computed = _ember['default'].computed;
  var _get = _ember['default'].get;
  var getProperties = _ember['default'].getProperties;
  var observer = _ember['default'].observer;
  var on = _ember['default'].on;
  var service = _ember['default'].inject.service;

  exports['default'] = Mixin.create({
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
});