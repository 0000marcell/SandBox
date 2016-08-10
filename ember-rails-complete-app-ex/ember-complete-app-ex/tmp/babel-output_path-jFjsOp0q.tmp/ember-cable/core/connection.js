define('ember-cable/core/connection', ['exports', 'ember', 'ember-cable/core/connection_monitor'], function (exports, _ember, _emberCableCoreConnection_monitor) {
  'use strict';

  exports['default'] = _ember['default'].Object.extend({
    consumer: null,
    connected: false,

    init: function init() {
      this._super.apply(this, arguments);
      this.open();
      this.set('monitor', _emberCableCoreConnection_monitor['default'].create({ connection: this }));
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
      _ember['default'].tryInvoke(this.get('webSocket'), 'close');
    },

    reopen: function reopen() {
      var _this = this;

      if (this.isClose()) {
        this.open();
      } else {
        this.close();
        _ember['default'].run.later(this, function () {
          _this.open();
        }, 500);
      }
    },

    isClose: function isClose() {
      return !this.isOpen();
    },

    isOpen: function isOpen() {
      return _ember['default'].isEqual(this.get('connected'), true);
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
});