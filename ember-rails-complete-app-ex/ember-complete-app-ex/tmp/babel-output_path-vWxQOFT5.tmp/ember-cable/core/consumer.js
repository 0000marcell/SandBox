define('ember-cable/core/consumer', ['exports', 'ember', 'ember-cable/core/subscriptions', 'ember-cable/core/connection'], function (exports, _ember, _emberCableCoreSubscriptions, _emberCableCoreConnection) {
  'use strict';

  exports['default'] = _ember['default'].Object.extend({
    url: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.set('subscriptions', _emberCableCoreSubscriptions['default'].create({ consumer: this }));
      this.set('connection', _emberCableCoreConnection['default'].create({ consumer: this }));
    },

    send: function send(data) {
      this.get('connection').send(data);
    }

  });
});