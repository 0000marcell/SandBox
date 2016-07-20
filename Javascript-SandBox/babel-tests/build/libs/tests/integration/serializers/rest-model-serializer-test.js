'use strict';

var _restSerializer = require('ember-cli-mirage/serializers/rest-serializer');

var _restSerializer2 = _interopRequireDefault(_restSerializer);

var _emberCliMirage = require('ember-cli-mirage');

var _schema = require('ember-cli-mirage/orm/schema');

var _schema2 = _interopRequireDefault(_schema);

var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _db = require('ember-cli-mirage/db');

var _db2 = _interopRequireDefault(_db);

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializer | RestSerializer', {
  beforeEach: function beforeEach() {
    var db = new _db2.default();
    this.schema = new _schema2.default(db);
    this.schema.registerModels({
      wordSmith: _model2.default.extend({
        blogPosts: (0, _emberCliMirage.hasMany)()
      }),
      blogPost: _model2.default.extend({
        wordSmith: (0, _emberCliMirage.belongsTo)()
      })
    });

    var link = this.schema.wordSmiths.create({ name: 'Link', age: 123 });
    link.createBlogPost({ title: 'Lorem' });
    link.createBlogPost({ title: 'Ipsum' });

    this.schema.wordSmiths.create({ name: 'Zelda', age: 230 });

    this.registry = new _serializerRegistry2.default(this.schema, {
      application: _restSerializer2.default,
      wordSmith: _restSerializer2.default.extend({
        attrs: ['id', 'name'],
        include: ['blogPosts']
      })
    });
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('it sideloads associations and camel-cases relationships and attributes correctly for a model', function (assert) {
  var link = this.schema.wordSmiths.find(1);
  var result = this.registry.serialize(link);

  assert.deepEqual(result, {
    wordSmith: {
      id: '1',
      name: 'Link',
      blogPostIds: ['1', '2']
    },
    blogPosts: [{
      id: '1',
      title: 'Lorem',
      wordSmithId: '1'
    }, {
      id: '2',
      title: 'Ipsum',
      wordSmithId: '1'
    }]
  });
});