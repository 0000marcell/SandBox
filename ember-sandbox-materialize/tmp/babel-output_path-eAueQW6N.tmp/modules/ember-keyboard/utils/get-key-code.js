

export default getKeyCode;
import KEY_MAP from 'ember-keyboard/fixtures/key-map';
function getKeyCode(key) {
  return Object.keys(KEY_MAP).filter(function (keyCode) {
    return KEY_MAP[keyCode] === key;
  })[0];
}