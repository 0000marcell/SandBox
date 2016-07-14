define('ember-keyboard/utils/get-key', ['exports', 'ember-keyboard/fixtures/key-map'], function (exports, _emberKeyboardFixturesKeyMap) {
  'use strict';

  exports['default'] = getKey;

  function getKey(event) {
    return event.key || _emberKeyboardFixturesKeyMap['default'][event.keyCode];
  }
});