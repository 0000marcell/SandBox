define('ember-keyboard/mixins/keyboard-first-responder-on-focus', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var Mixin = _ember['default'].Mixin;
  var on = _ember['default'].on;
  var set = _ember['default'].set;
  var setProperties = _ember['default'].setProperties;

  exports['default'] = Mixin.create({
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
});