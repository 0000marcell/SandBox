'use strict';

var _restSerializer = require('ember-cli-mirage/serializers/rest-serializer');

var _restSerializer2 = _interopRequireDefault(_restSerializer);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Unit | Serializers | RestSerializer', {
  beforeEach: function beforeEach() {
    this.serializer = new _restSerializer2.default();
  }
});

(0, _qunit.test)('it hyphenates camelized words', function (assert) {
  var payload = {
    'person': {
      'id': 1,
      'firstName': 'Rick',
      'lastName': 'Sanchez'
    }
  };
  var jsonApiDoc = this.serializer.normalize(payload);

  assert.deepEqual(jsonApiDoc, {
    data: {
      type: 'people',
      id: 1,
      attributes: {
        'first-name': 'Rick',
        'last-name': 'Sanchez'
      }
    }
  });
});