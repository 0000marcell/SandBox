'use strict';

var _serializer = require('ember-cli-mirage/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _schemaHelper = require('../../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | Base | Associations | Embedded Models', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();

    var wordSmith = this.schema.wordSmiths.create({ name: 'Link' });
    var post = wordSmith.createBlogPost({ title: 'Lorem' });
    post.createFineComment({ text: 'pwned' });

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

(0, _qunit.test)('it can embed has-many relationships', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    wordSmith: this.BaseSerializer.extend({
      include: ['blogPosts']
    })
  });

  var link = this.schema.wordSmiths.find(1);
  var result = registry.serialize(link);

  assert.deepEqual(result, {
    wordSmith: {
      id: '1',
      name: 'Link',
      blogPosts: [{ id: '1', title: 'Lorem' }, { id: '2', title: 'Ipsum' }]
    }
  });
});

(0, _qunit.test)('it can embed a chain of has-many relationships', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    wordSmith: this.BaseSerializer.extend({
      include: ['blogPosts']
    }),
    blogPost: this.BaseSerializer.extend({
      include: ['fineComments']
    })
  });

  var wordSmith = this.schema.wordSmiths.find(1);
  var result = registry.serialize(wordSmith);

  assert.deepEqual(result, {
    wordSmith: {
      id: '1',
      name: 'Link',
      blogPosts: [{ id: '1', title: 'Lorem', fineComments: [{ id: '1', text: 'pwned' }] }, { id: '2', title: 'Ipsum', fineComments: [] }]
    }
  });
});

(0, _qunit.test)('it can embed a belongs-to relationship', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    blogPost: this.BaseSerializer.extend({
      embed: true,
      include: ['wordSmith']
    })
  });

  var blogPost = this.schema.blogPosts.find(1);
  var result = registry.serialize(blogPost);

  assert.deepEqual(result, {
    blogPost: {
      id: '1',
      title: 'Lorem',
      wordSmith: { id: '1', name: 'Link' }
    }
  });
});

(0, _qunit.test)('it can serialize a chain of belongs-to relationships', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    fineComment: this.BaseSerializer.extend({
      include: ['blogPost']
    }),
    blogPost: this.BaseSerializer.extend({
      include: ['wordSmith']
    })
  });

  var fineComment = this.schema.fineComments.find(1);
  var result = registry.serialize(fineComment);

  assert.deepEqual(result, {
    fineComment: {
      id: '1',
      text: 'pwned',
      blogPost: {
        id: '1',
        title: 'Lorem',
        wordSmith: {
          id: '1', name: 'Link'
        }
      }
    }
  });
});

(0, _qunit.test)('it ignores relationships that refer to serialized ancestor resources', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    wordSmith: this.BaseSerializer.extend({
      include: ['blogPosts']
    }),
    blogPost: this.BaseSerializer.extend({
      include: ['wordSmith']
    })
  });

  var wordSmith = this.schema.wordSmiths.find(1);
  var result = registry.serialize(wordSmith);

  assert.deepEqual(result, {
    wordSmith: {
      id: '1',
      name: 'Link',
      blogPosts: [{ id: '1', title: 'Lorem' }, { id: '2', title: 'Ipsum' }]
    }
  });
});

(0, _qunit.test)('it ignores relationships that refer to serialized ancestor resources, multiple levels down', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    wordSmith: this.BaseSerializer.extend({
      embed: true,
      include: ['blogPosts']
    }),
    blogPost: this.BaseSerializer.extend({
      include: ['word-smith', 'fine-comments']
    }),
    fineComment: this.BaseSerializer.extend({
      include: ['blogPost']
    })
  });

  var wordSmith = this.schema.wordSmiths.find(1);
  var result = registry.serialize(wordSmith);

  assert.deepEqual(result, {
    wordSmith: {
      id: '1',
      name: 'Link',
      blogPosts: [{ id: '1', title: 'Lorem', fineComments: [{ id: '1', text: 'pwned' }] }, { id: '2', title: 'Ipsum', fineComments: [] }]
    }
  });
});