import Ember from 'ember';

var Subscription = Ember.Object.extend({
  subscriptions: null,
  params: {},

  identifier: Ember.computed('params', function () {
    return JSON.stringify(this.get('params'));
  }),

  init: function init() {
    this._super.apply(this, arguments);
    this.get('subscriptions').add(this);
  },

  perform: function perform(action) {
    var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    data.action = action;
    this.send(data);
  },

  send: function send(data) {
    this.get('subscriptions.consumer').send({
      command: 'message',
      identifier: this.get('identifier'),
      data: JSON.stringify(data)
    });
  },

  unsubscribe: function unsubscribe() {
    return this.get('subscriptions').remove(this);
  }

});

Subscription[Ember.NAME_KEY] = 'Subscription';

export default Subscription;