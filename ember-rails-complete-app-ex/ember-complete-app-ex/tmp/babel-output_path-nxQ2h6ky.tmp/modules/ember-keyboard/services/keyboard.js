import Ember from 'ember';
import config from 'ember-get-config';
import handleKeyEvent from 'ember-keyboard/utils/handle-key-event';

var Service = Ember.Service;
var computed = Ember.computed;
var get = Ember.get;
var on = Ember.on;
var set = Ember.set;
var typeOf = Ember.typeOf;

export default Service.extend({
  priorityLevels: computed(function () {
    return Ember.Object.create();
  }),

  activate: function activate(responder) {
    var priorityLevels = get(this, 'priorityLevels');
    var priority = get(responder, '_keyboardPriorityLevel').toString();

    var priorityLevel = get(priorityLevels, priority) || set(priorityLevels, priority, Ember.A());

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

    var listeners = get(config, 'emberKeyboard.listeners') || ['keyUp', 'keyDown', 'keyPress'];
    var eventNames = listeners.map(function (name) {
      return name.toLowerCase() + '.ember-keyboard-listener';
    }).join(' ');

    Ember.$(document).on(eventNames, null, function (event) {
      handleKeyEvent(event, get(_this, 'priorityLevels'));
    });
  }),

  _teardownListener: on('isDestroying', function () {
    Ember.$(document).off('.ember-keyboard-listener');
  })
});