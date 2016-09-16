define('app4/services/cable', ['exports', 'ember-cable/services/cable'], function (exports, _emberCableServicesCable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCableServicesCable['default'];
    }
  });
});