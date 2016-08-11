define('ember-keyboard/utils/listener-name', ['exports'], function (exports) {
  'use strict';

  exports['default'] = listenerName;

  function listenerName(type) {
    var keyArray = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

    var keys = keyArray.length === 0 ? '_all' : keyArray.sort().join('+');

    return type + ':' + keys;
  }
});