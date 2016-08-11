define('ember-cable/services/cable', ['exports', 'ember', 'ember-cable/core/consumer'], function (exports, _ember, _emberCableCoreConsumer) {
  'use strict';

  exports['default'] = _ember['default'].Service.extend({

    createConsumer: function createConsumer(url) {
      return _emberCableCoreConsumer['default'].create({ url: url });
    }

  });
});