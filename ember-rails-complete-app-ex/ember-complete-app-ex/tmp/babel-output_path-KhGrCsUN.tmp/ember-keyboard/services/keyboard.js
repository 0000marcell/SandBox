define('ember-keyboard/services/keyboard', ['exports', 'ember', 'ember-get-config', 'ember-keyboard/utils/handle-key-event'], function (exports, _ember, _emberGetConfig, _emberKeyboardUtilsHandleKeyEvent) {
  'use strict';

  var Service = _ember['default'].Service;
  var computed = _ember['default'].computed;
  var get = _ember['default'].get;
  var on = _ember['default'].on;
  var set = _ember['default'].set;
  var typeOf = _ember['default'].typeOf;

  exports['default'] = Service.extend({
    priorityLevels: computed(function () {
      return _ember['default'].Object.create();
    }),

    activate: function activate(responder) {
      var priorityLevels = get(this, 'priorityLevels');
      var priority = get(responder, '_keyboardPriorityLevel').toString();

      var priorityLevel = get(priorityLevels, priority) || set(priorityLevels, priority, _ember['default'].A());

      if (!priorityLevel.contains(responder)) {
        get(priorityLevels, priority).pushObject(responder);

        responder.on('willDestroyElement', this, function () {
          this.deactivate(responder);
        });
      }
    },

    deactivate: function deactivate(responder) {
      var priorityLevels = get(this, 'priorityLevels');

      Object.keys(priorityLevels).forEach(function (key) {
        var priorityLevel = get(priorityLevels, key);

        if (typeOf(priorityLevel) !== 'array') {
          return;
        }

        if (priorityLevel.contains(responder)) {
          priorityLevel.removeObject(responder);

          if (get(priorityLevel, 'length') === 0) {
            delete priorityLevels[key];
          }
        }
      });
    },

    _initializeListener: on('init', function () {
      var _this = this;

      var listeners = get(_emberGetConfig['default'], 'emberKeyboard.listeners') || ['keyUp', 'keyDown', 'keyPress'];
      var eventNames = listeners.map(function (name) {
        return name.toLowerCase() + '.ember-keyboard-listener';
      }).join(' ');

      _ember['default'].$(document).on(eventNames, null, function (event) {
        (0, _emberKeyboardUtilsHandleKeyEvent['default'])(event, get(_this, 'priorityLevels'));
      });
    }),

    _teardownListener: on('isDestroying', function () {
      _ember['default'].$(document).off('.ember-keyboard-listener');
    })
  });
});