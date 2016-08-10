define('ember-keyboard/utils/get-key-code', ['exports', 'ember-keyboard/fixtures/key-map'], function (exports, _emberKeyboardFixturesKeyMap) {
  'use strict';

  exports['default'] = getKeyCode;

  function getKeyCode(key) {
    return Object.keys(_emberKeyboardFixturesKeyMap['default']).filter(function (keyCode) {
      return _emberKeyboardFixturesKeyMap['default'][keyCode] === key;
    })[0];
  }
});