import Ember from 'ember';
import ConnectionMonitor from 'ember-cable/core/connection_monitor';

export default Ember.Object.extend({
  consumer: null,
  connected: false,

  init: function init() {
    this._super.apply(this, arguments);
    this.open();
    this.set('monitor', ConnectionMonitor.create({ connection: this }));
  },

  send: function send(data) {
    if (this.isOpen()) {
      this.get('webSocket').send(JSON.stringify(data));
    }
  },

  open: function open() {
    this.set('webSocket', new WebSocket(this.get('consumer.url')));
    for (var eventName in this.events) {
      this.get('webSocket')['on' + eventName] = this.events[eventName].bind(this);
    }
  },

  close: function close() {
    Ember.tryInvoke(this.get('webSocket'), 'close');
  },

  reopen: function reopen() {
    var _this = this;

    if (this.isClose()) {
      this.open();
    } else {
      this.close();
      Ember.run.later(this, function () {
        _this.open();
      }, 500);
    }
  },

  isClose: function isClose() {
    return !this.isOpen();
  },

  isOpen: function isOpen() {
    return Ember.isEqual(this.get('connected'), true);
  },

  disconnect: function disconnect() {
    this.set('connected', false);
    this.get('consumer.subscriptions').notifyAll('disconnected');
  },

  events: {
    message: function message(event) {
      var data = JSON.parse(event.data);
      switch (data.type) {
        case 'welcome':
          this.get('monitor').connected();
          break;
        case 'ping':
          this.get('monitor').ping();
          break;
        case 'confirm_subscription':
          this.get('consumer.subscriptions').notify(data.identifier, 'connected');
          break;
        case 'reject_subscription':
          this.get('consumer.subscriptions').reject(data.identifier);
          break;
        default:
          this.get('consumer.subscriptions').notify(data.identifier, 'received', data.message);
      }
    },

    open: function open() {
      this.set('connected', true);
      this.get('consumer.subscriptions').reload();
    },

    close: function close() {
      this.disconnect();
    },

    error: function error() {
      this.disconnect();
    }
  }

});