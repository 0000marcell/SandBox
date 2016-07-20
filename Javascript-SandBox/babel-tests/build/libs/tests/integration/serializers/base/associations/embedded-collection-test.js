'use strict';

var _serializer = require('ember-cli-mirage/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _schemaHelper = require('../../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | Base | Associations | Embedded Collections', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();

    var wordSmith = this.schema.wordSmiths.create({ name: 'Link' });
    var blogPost = wordSmith.createBlogPost({ title: 'Lorem' });
    blogPost.createFineComment({ text: 'pwned' });

    wordSmith.createBlogPost({ title: 'Ipsum' });

    this.schema.wordSmiths.create({ name: 'Zelda' });

    this.BaseSerializer = _serializer2.default.extend({
      embed: true
    });
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('it can embed a collection with a has-many relationship', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    wordSmith: this.BaseSerializer.extend({
      include: ['blogPosts']
    })
  });

  var wordSmiths = this.schema.wordSmiths.all();
  var result = registry.serialize(wordSmiths);

  assert.deepEqual(result, {
    wordSmiths: [{
      id: '1',
      name: 'Link',
      blogPosts: [{ id: '1', title: 'Lorem' }, { id: '2', title: 'Ipsum' }]
    }, {
      id: '2',
      name: 'Zelda',
      blogPosts: []
    }]
  });
});

(0, _qunit.test)('it can embed a collection with a chain of has-many relationships', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    wordSmith: this.BaseSerializer.extend({
      include: ['blogPosts']
    }),
    blogPost: this.BaseSerializer.extend({
      include: ['fineComments']
    })
  });

  var wordSmiths = this.schema.wordSmiths.all();
  var result = registry.serialize(wordSmiths);

  assert.deepEqual(result, {
    wordSmiths: [{
      id: '1',
      name: 'Link',
      blogPosts: [{
        id: '1',
        title: 'Lorem',
        fineComments: [{ id: '1', text: 'pwned' }]
      }, {
        id: '2',
        title: 'Ipsum',
        fineComments: []
      }]
    }, {
      id: '2',
      name: 'Zelda',
      blogPosts: []
    }]
  });
});

(0, _qunit.test)('it can embed a collection with a belongs-to relationship', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    blogPost: this.BaseSerializer.extend({
      include: ['wordSmith']
    })
  });

  var blogPosts = this.schema.blogPosts.all();
  var result = registry.serialize(blogPosts);

  assert.deepEqual(result, {
    blogPosts: [{
      id: '1',
      title: 'Lorem',
      wordSmith: { id: '1', name: 'Link' }
    }, {
      id: '2',
      title: 'Ipsum',
      wordSmith: { id: '1', name: 'Link' }
    }]
  });
});

(0, _qunit.test)('it can embed a collection with a chain of belongs-to relationships', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    fineComment: this.BaseSerializer.extend({
      include: ['blogPost']
    }),
    blogPost: this.BaseSerializer.extend({
      include: ['wordSmith']
    })
  });

  var fineComments = this.schema.fineComments.all();
  var result = registry.serialize(fineComments);

  assert.deepEqual(result, {
    fineComments: [{
      id: '1',
      text: 'pwned',
      blogPost: {
        id: '1',
        title: 'Lorem',
        wordSmith: { id: '1', name: 'Link' }
      }
    }]
  });
});