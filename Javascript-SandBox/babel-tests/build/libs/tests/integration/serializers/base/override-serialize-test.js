'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _serializer = require('ember-cli-mirage/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _schemaHelper = require('../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | Base | Overriding Serialize', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('it can use a completely custom serialize function', function (assert) {
  this.registry = new _serializerRegistry2.default(this.schema, {
    wordSmith: _serializer2.default.extend({
      serialize: function serialize() {
        return 'blah';
      }
    })
  });

  var wordSmith = this.schema.wordSmiths.create({
    id: 1,
    title: 'Link'
  });

  var result = this.registry.serialize(wordSmith);

  assert.deepEqual(result, 'blah');
});

(0, _qunit.test)('it can access the request in a custom serialize function', function (assert) {
  this.registry = new _serializerRegistry2.default(this.schema, {
    wordSmith: _serializer2.default.extend({
      serialize: function serialize(response, request) {
        return request.queryParams.foo || 'blah';
      }
    })
  });

  var wordSmith = this.schema.wordSmiths.create({
    id: 1,
    title: 'Link'
  });

  var request = { url: '/word-smiths/1?foo=bar', params: { id: '1' }, queryParams: { foo: 'bar' } };
  var result = this.registry.serialize(wordSmith, request);

  assert.deepEqual(result, 'bar');
});