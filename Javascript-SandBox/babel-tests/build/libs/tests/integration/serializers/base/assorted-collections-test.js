'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _serializer = require('ember-cli-mirage/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _schemaHelper = require('../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | Base | Assorted Collections', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();
    this.registry = new _serializerRegistry2.default(this.schema, {
      greatPhoto: _serializer2.default.extend({
        attrs: ['id', 'title']
      })
    });
    this.wordSmiths = [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }, { id: '3', name: 'Epona' }];
    this.greatPhotos = [{ id: '1', title: 'Amazing', location: 'Hyrule' }, { id: '2', title: 'greatPhoto', location: 'Goron City' }];
    this.schema.db.loadData({
      wordSmiths: this.wordSmiths,
      greatPhotos: this.greatPhotos
    });
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('an array of assorted collections can be serialized', function (assert) {
  var result = this.registry.serialize([this.schema.wordSmiths.all(), this.schema.greatPhotos.all()]);

  assert.deepEqual(result, {
    wordSmiths: this.wordSmiths,
    greatPhotos: this.greatPhotos.map(function (attrs) {
      delete attrs.location;
      return attrs;
    })
  });
});