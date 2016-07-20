'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _serializer = require('ember-cli-mirage/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _schemaHelper = require('../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | Base | Root', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();
    this.registry = new _serializerRegistry2.default(this.schema, {
      wordSmith: _serializer2.default.extend({
        embed: true,
        root: false
      })
    });
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('if root is false, it serializes a model by returning its attrs', function (assert) {
  var wordSmith = this.schema.wordSmiths.create({
    id: '1',
    name: 'Link'
  });

  var result = this.registry.serialize(wordSmith);
  assert.deepEqual(result, {
    id: '1',
    name: 'Link'
  });
});

(0, _qunit.test)('if root is false, it serializes a collection of models by returning an array of their attrs', function (assert) {
  this.schema.wordSmiths.create({ id: 1, name: 'Link' });
  this.schema.wordSmiths.create({ id: 2, name: 'Zelda' });
  var wordSmiths = this.schema.wordSmiths.all();

  var result = this.registry.serialize(wordSmiths);

  assert.deepEqual(result, [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }]);
});

(0, _qunit.test)('if root is false, it serializes an empty collection by returning an empty array', function (assert) {
  var emptywordSmithCollection = this.schema.wordSmiths.all();
  var result = this.registry.serialize(emptywordSmithCollection);

  assert.deepEqual(result, []);
});