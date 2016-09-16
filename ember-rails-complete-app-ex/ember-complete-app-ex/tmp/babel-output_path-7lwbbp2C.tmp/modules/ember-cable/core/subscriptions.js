import Ember from 'ember';
import Subscription from 'ember-cable/core/subscription';

var Subscriptions = Ember.Object.extend({
  consumer: null,
  subscriptions: Ember.A(),

  create: function create(channelName, mixin) {
    var params = Ember.isEqual(Ember.typeOf(channelName), 'object') ? channelName : { channel: channelName };
    return Subscription.extend(Ember.Mixin.create(mixin), {
      subscriptions: this, params: params
    }).create();
  },

  add: function add(subscription) {
    this.get('subscriptions').push(subscription);
    this.sendCommand(subscription, 'subscribe');
  },

  remove: function remove(subscription) {
    this.forget(subscription);
    if (!this.findAll(subscription.get('identifier')).length) {
      return this.sendCommand(subscription, 'unsubscribe');
    }
  },

  reload: function reload() {
    var _this = this;

    this.get('subscriptions').forEach(function (subscription) {
      _this.sendCommand(subscription, 'subscribe');
    });
  },

  reject: function reject(identifier) {
    var _this2 = this;

    this.findAll(identifier).forEach(function (subscription) {
      _this2.sendCommand(subscription, 'rejected');
    });
  },

  forget: function forget(subscription) {
    this.get('subscriptions').removeObject(subscription);
  },

  findAll: function findAll(identifier) {
    return this.get('subscriptions').filter(function (item) {
      return item.get('identifier').toLowerCase() === identifier.toLowerCase();
    });
  },

  notifyAll: function notifyAll(callbackName) {
    var _this3 = this;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.get('subscriptions').forEach(function (subscription) {
      _this3.notify.apply(_this3, [subscription, callbackName].concat(args));
    });
  },

  notify: function notify(subscription, callbackName) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var subscriptions = undefined;
    if (Ember.typeOf(subscription) === 'string') {
      subscriptions = this.findAll(subscription);
    } else {
      subscriptions = [subscription];
    }

    subscriptions.forEach(function (subscription) {
      Ember.tryInvoke(subscription, callbackName, args);
    });
  },

  sendCommand: function sendCommand(subscription, command) {
    var identifier = subscription.get('identifier');
    if (Ember.isEqual(identifier, '_ping')) {
      this.get('consumer.connection').isOpen();
    } else {
      this.get('consumer').send({ command: command, identifier: identifier });
    }
  }

});

Subscriptions[Ember.NAME_KEY] = 'Subscriptions';

export default Subscriptions;