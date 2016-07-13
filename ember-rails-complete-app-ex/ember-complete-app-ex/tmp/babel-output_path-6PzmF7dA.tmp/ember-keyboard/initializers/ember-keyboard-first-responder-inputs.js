define('ember-keyboard/initializers/ember-keyboard-first-responder-inputs', ['exports', 'ember', 'ember-keyboard'], function (exports, _ember, _emberKeyboard) {
  'use strict';

  exports.initialize = initialize;

  var TextArea = _ember['default'].TextArea;
  var TextField = _ember['default'].TextField;

  function initialize() {
    TextField.reopen(_emberKeyboard.EKMixin, _emberKeyboard.EKFirstResponderOnFocusMixin);
    TextArea.reopen(_emberKeyboard.EKMixin, _emberKeyboard.EKFirstResponderOnFocusMixin);
  }

  exports['default'] = {
    name: 'ember-keyboard-first-responder-inputs',
    initialize: initialize
  };
});