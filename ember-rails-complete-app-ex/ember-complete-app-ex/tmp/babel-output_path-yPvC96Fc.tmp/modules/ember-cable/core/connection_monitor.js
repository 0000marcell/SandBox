import Ember from 'ember';

var ConnectionMonitor = Ember.Object.extend({
  connection: null,
  stoppedAt: null,
  startedAt: null,
  pingedAt: null,
  disconnectedAt: null,
  staleThreshold: 6,
  reconnectAttempts: 0,

  init: function init() {
    this._super.apply(this, arguments);
    this.start();
  },

  start: function start() {
    this.reset();
    this.set('stoppedAt', null);
    this.set('startedAt', Date.now());
    this.poll();
  },

  connected: function connected() {
    this.reset();
    this.set('pingedAt', Date.now());
    this.set('disconnectedAt', null);
  },

  disconnected: function disconnected() {
    this.set('disconnectedAt', Date.now());
  },

  ping: function ping() {
    this.set('pingedAt', Date.now());
  },

  reset: function reset() {
    this.set('reconnectAttempts', 0);
  },

  poll: function poll() {
    var _this = this;

    Ember.run.later(this, function () {
      _this.reconnectIfStale();
      _this.poll();
    }, this.interval());
  },

  interval: function interval() {
    return Math.max(3, Math.min(30, 5 * Math.log(this.get('reconnectAttempts') + 1))) * 1000;
  },

  reconnectIfStale: function reconnectIfStale() {
    if (this.connectionIsStale()) {
      this.incrementProperty('reconnectAttempts');
      if (!this.disconnectedRecently()) {
        this.get('connection').reopen();
      }
    }
  },

  connectionIsStale: function connectionIsStale() {
    return this.secondsSince(this.get('pingedAt') || this.get('startedAt')) > this.get('staleThreshold');
  },

  disconnectedRecently: function disconnectedRecently() {
    return this.get('disconnectedAt') && this.secondsSince(this.get('disconnectedAt')) < this.get('staleThreshold');
  },

  secondsSince: function secondsSince(time) {
    return (Date.now() - time) / 1000;
  }
});

ConnectionMonitor[Ember.NAME_KEY] = 'ConnectionMonitor';

export default ConnectionMonitor;