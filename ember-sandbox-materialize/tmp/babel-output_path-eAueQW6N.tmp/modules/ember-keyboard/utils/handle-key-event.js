

export default handleKeyEvent;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import Ember from 'ember';
import getKey from 'ember-keyboard/utils/get-key';
import listenerName from 'ember-keyboard/utils/listener-name';

var hasListeners = Ember.hasListeners;
var get = Ember.get;

var gatherKeys = function gatherKeys(event) {
  var key = getKey(event);

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
  var listenerNames = [listenerName(event.type, keys), listenerName(event.type)];
  var sortedPriorityLevelKeys = sortPriorityLevelKeys(priorityLevels);

  sortedPriorityLevelKeys.every(function (key) {
    return triggerListeners(event, get(priorityLevels, key), listenerNames);
  });
}