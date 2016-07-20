'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _serializer = require('ember-cli-mirage/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _schemaHelper = require('../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | Base | Array of Models', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();
    this.schema.wordSmiths.create({ id: 1, title: 'Link' });
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('it applies correct serializer when the response is an array of models', function (assert) {
  assert.expect(1);

  var wordSmiths = this.schema.wordSmiths.all().filter(function () {
    return true;
  });
  var registry = new _serializerRegistry2.default(this.schema, {
    wordSmith: _serializer2.default.extend({
      serialize: function serialize() {
        assert.ok('serializer ran');
        return {};
      }
    })
  });

  registry.serialize(wordSmiths);
});