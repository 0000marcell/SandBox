export { keyDown };
export { keyUp };
export { keyPress };
import Ember from 'ember';
import KEY_MAP from 'ember-keyboard/fixtures/key-map';
import listenerName from 'ember-keyboard/utils/listener-name';

var keyMapValues = Object.keys(KEY_MAP).map(function (key) {
  return KEY_MAP[key];
});
var validKeys = keyMapValues.concat(['alt', 'ctrl', 'meta', 'shift']);

var validateKeys = function validateKeys(keys) {
  keys.forEach(function (key) {
    if (validKeys.indexOf(key) === -1) {
      Ember.Logger.error('`' + key + '` is not a valid key name');
    }
  });
};

var formattedListener = function formattedListener(type, keysString) {
  var keys = keysString !== undefined ? keysString.split('+') : [];

  validateKeys(keys);

  return listenerName(type, keys);
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