define('ember-keyboard/listeners/key-events', ['exports', 'ember', 'ember-keyboard/fixtures/key-map', 'ember-keyboard/utils/listener-name'], function (exports, _ember, _emberKeyboardFixturesKeyMap, _emberKeyboardUtilsListenerName) {
  'use strict';

  exports.keyDown = keyDown;
  exports.keyUp = keyUp;
  exports.keyPress = keyPress;

  var keyMapValues = Object.keys(_emberKeyboardFixturesKeyMap['default']).map(function (key) {
    return _emberKeyboardFixturesKeyMap['default'][key];
  });
  var validKeys = keyMapValues.concat(['alt', 'ctrl', 'meta', 'shift']);

  var validateKeys = function validateKeys(keys) {
    keys.forEach(function (key) {
      if (validKeys.indexOf(key) === -1) {
        _ember['default'].Logger.error('`' + key + '` is not a valid key name');
      }
    });
  };

  var formattedListener = function formattedListener(type, keysString) {
    var keys = keysString !== undefined ? keysString.split('+') : [];

    validateKeys(keys);

    return (0, _emberKeyboardUtilsListenerName['default'])(type, keys);
  };

  function keyDown(keys) {
    return formattedListener('keydown', keys);
  }

  function keyUp(keys) {
    return formattedListener('keyup', keys);
  }

  function keyPress(keys) {
    return formattedListener('keypress', keys);
  }
});