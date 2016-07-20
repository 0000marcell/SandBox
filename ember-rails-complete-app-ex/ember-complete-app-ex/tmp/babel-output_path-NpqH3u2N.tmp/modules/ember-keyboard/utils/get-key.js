

export default getKey;
import KEY_MAP from 'ember-keyboard/fixtures/key-map';
function getKey(event) {
  return event.key || KEY_MAP[event.keyCode];
}