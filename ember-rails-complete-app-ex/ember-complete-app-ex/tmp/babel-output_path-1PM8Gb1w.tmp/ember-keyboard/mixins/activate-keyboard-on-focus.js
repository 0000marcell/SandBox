define('ember-keyboard/mixins/activate-keyboard-on-focus', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var Mixin = _ember['default'].Mixin;
  var on = _ember['default'].on;
  var set = _ember['default'].set;

  exports['default'] = Mixin.create({
    activateKeyboardWhenFocused: on('click', 'focusIn', function () {
      set(this, 'keyboardActivated', true);
    }),

    deactivateKeyboardWhenFocusOut: on('focusOut', function () {
      set(this, 'keyboardActivated', false);
    })
  });
});