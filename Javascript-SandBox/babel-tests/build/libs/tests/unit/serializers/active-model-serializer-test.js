'use strict';

var _activeModelSerializer = require('ember-cli-mirage/serializers/active-model-serializer');

var _activeModelSerializer2 = _interopRequireDefault(_activeModelSerializer);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// jscs:disable requireCamelCaseOrUpperCaseIdentifiers


(0, _qunit.module)('Unit | Serializers | ActiveModelSerializer', {
  beforeEach: function beforeEach() {
    this.serializer = new _activeModelSerializer2.default();
  }
});

(0, _qunit.test)('normalize works', function (assert) {
  var payload = {
    contact: {
      id: 1,
      name: 'Link'
    }
  };
  var jsonApiDoc = this.serializer.normalize(payload);

  assert.deepEqual(jsonApiDoc, {
    data: {
      type: 'contacts',
      id: 1,
      attributes: {
        name: 'Link'
      }
    }
  });
});

(0, _qunit.test)('it hyphenates snake_cased words', function (assert) {
  var payload = {
    contact: {
      id: 1,
      first_name: 'Link'
    }
  };
  var jsonApiDoc = this.serializer.normalize(payload);

  assert.deepEqual(jsonApiDoc, {
    data: {
      type: 'contacts',
      id: 1,
      attributes: {
        'first-name': 'Link'
      }
    }
  });
});

(0, _qunit.test)('it works without an id', function (assert) {
  var payload = {
    contact: {
      first_name: 'Link',
      last_name: 'zor'
    }
  };
  var jsonApiDoc = this.serializer.normalize(payload);

  assert.deepEqual(jsonApiDoc, {
    data: {
      type: 'contacts',
      attributes: {
        'first-name': 'Link',
        'last-name': 'zor'
      }
    }
  });
});