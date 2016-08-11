import Ember from 'ember';
import Subscriptions from 'ember-cable/core/subscriptions';
import Connection from 'ember-cable/core/connection';

export default Ember.Object.extend({
  url: null,

  init: function init() {
    this._super.apply(this, arguments);
    this.set('subscriptions', Subscriptions.create({ consumer: this }));
    this.set('connection', Connection.create({ consumer: this }));
  },

  send: function send(data) {
    this.get('connection').send(data);
  }

});