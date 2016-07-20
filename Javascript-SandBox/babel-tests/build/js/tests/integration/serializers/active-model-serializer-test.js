'use strict';

var _activeModelSerializer = require('ember-cli-mirage/serializers/active-model-serializer');

var _activeModelSerializer2 = _interopRequireDefault(_activeModelSerializer);

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

(0, _qunit.module)('Integration | Serializer | ActiveModelSerializer', {
  beforeEach: function beforeEach() {
    var db = new _db2.default();
    this.schema = new _schema2.default(db);
    this.schema.registerModels({
      wordSmith: _model2.default.extend({
        blogPosts: (0, _emberCliMirage.hasMany)()
      }),
      blogPost: _model2.default.extend({
        wordSmith: (0, _emberCliMirage.belongsTo)()
      }),
      user: _model2.default.extend({
        contactInfos: (0, _emberCliMirage.hasMany)()
      }),
      contactInfo: _model2.default.extend({
        user: (0, _emberCliMirage.belongsTo)()
      })
    });

    var link = this.schema.wordSmiths.create({ name: 'Link', age: 123 });
    link.createBlogPost({ title: 'Lorem' });
    link.createBlogPost({ title: 'Ipsum' });

    this.schema.wordSmiths.create({ name: 'Zelda', age: 230 });

    var user = this.schema.users.create({ name: 'John Peach', age: 123 });
    user.createContactInfo({ email: 'peach@bb.me' });
    user.createContactInfo({ email: 'john3000@mail.com' });

    this.schema.users.create({ name: 'Pine Apple', age: 230 });

    this.registry = new _serializerRegistry2.default(this.schema, {
      application: _activeModelSerializer2.default,
      wordSmith: _activeModelSerializer2.default.extend({
        attrs: ['id', 'name'],
        include: ['blogPosts']
      }),
      user: _activeModelSerializer2.default.extend({
        attrs: ['id', 'name'],
        include: ['ContactInfos'],
        embed: true
      })
    });
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
}); // jscs:disable requireCamelCaseOrUpperCaseIdentifiers


(0, _qunit.test)('it sideloads associations and snake-cases relationships and attributes correctly for a model', function (assert) {
  var link = this.schema.wordSmiths.find(1);
  var result = this.registry.serialize(link);

  assert.deepEqual(result, {
    word_smith: {
      id: '1',
      name: 'Link',
      blog_post_ids: ['1', '2']
    },
    blog_posts: [{
      id: '1',
      title: 'Lorem',
      word_smith_id: '1'
    }, {
      id: '2',
      title: 'Ipsum',
      word_smith_id: '1'
    }]
  });
});

(0, _qunit.test)('it sideloads associations and snake-cases relationships and attributes correctly for a collection', function (assert) {
  var wordSmiths = this.schema.wordSmiths.all();
  var result = this.registry.serialize(wordSmiths);

  assert.deepEqual(result, {
    word_smiths: [{
      id: '1',
      name: 'Link',
      blog_post_ids: ['1', '2']
    }, {
      id: '2',
      name: 'Zelda',
      blog_post_ids: []
    }],
    blog_posts: [{
      id: '1',
      title: 'Lorem',
      word_smith_id: '1'
    }, {
      id: '2',
      title: 'Ipsum',
      word_smith_id: '1'
    }]
  });
});

(0, _qunit.test)('it embeds associations and snake-cases relationships and attributes correctly for a collection', function (assert) {
  var users = this.schema.users.all();
  var result = this.registry.serialize(users);

  assert.deepEqual(result, {
    users: [{
      id: '1',
      name: 'John Peach',
      contact_infos: [{
        id: '1',
        email: 'peach@bb.me',
        user_id: '1'
      }, {
        id: '2',
        email: 'john3000@mail.com',
        user_id: '1'
      }]
    }, {
      id: '2',
      name: 'Pine Apple',
      contact_infos: []
    }]
  });
});