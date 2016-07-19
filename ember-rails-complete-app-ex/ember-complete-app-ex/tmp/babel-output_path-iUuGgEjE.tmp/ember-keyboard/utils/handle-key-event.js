define('ember-keyboard/utils/handle-key-event', ['exports', 'ember', 'ember-keyboard/utils/get-key', 'ember-keyboard/utils/listener-name'], function (exports, _ember, _emberKeyboardUtilsGetKey, _emberKeyboardUtilsListenerName) {
  'use strict';

  exports['default'] = handleKeyEvent;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var hasListeners = _ember['default'].hasListeners;
  var get = _ember['default'].get;

  var gatherKeys = function gatherKeys(event) {
    var key = (0, _emberKeyboardUtilsGetKey['default'])(event);

    return ['ctrl', 'meta', 'alt', 'shift'].reduce(function (keys, keyName) {
      if (event[keyName + 'Key']) {
        keys.push(keyName);
      }

      return keys;
    }, [key]);
  };

  var sortPriorityLevelKeys = function sortPriorityLevelKeys(priorityLevels) {
    return Object.keys(priorityLevels).sort(function (a, b) {
      if (a === 'firstResponder') {
        return -1;
      } else if (b === 'firstResponder') {
        return 1;
      } else {
        return b - a;
      }
    });
  };

  var triggerListeners = function triggerListeners(event, responders, listenerNames) {
    var isLax = true;

    [].concat(_toConsumableArray(responders)).forEach(function (responder) {
      if (!get(responder, 'keyboardLaxPriority')) {
        isLax = false;
      }

      listenerNames.forEach(function (triggerName) {
        if (hasListeners(responder, triggerName)) {
          responder.trigger(triggerName, event);
        }
      });
    });

    return isLax;
  };
  function handleKeyEvent(event, priorityLevels) {
    var keys = gatherKeys(event);
    var listenerNames = [(0, _emberKeyboardUtilsListenerName['default'])(event.type, keys), (0, _emberKeyboardUtilsListenerName['default'])(event.type)];
    var sortedPriorityLevelKeys = sortPriorityLevelKeys(priorityLevels);

    sortedPriorityLevelKeys.every(function (key) {
      return triggerListeners(event, get(priorityLevels, key), listenerNames);
    });
  }
});