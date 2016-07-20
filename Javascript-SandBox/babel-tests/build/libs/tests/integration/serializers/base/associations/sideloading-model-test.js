'use strict';

var _serializer = require('ember-cli-mirage/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _schemaHelper = require('../../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | Base | Associations | Sideloading Models', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();

    var wordSmith = this.schema.wordSmiths.create({ name: 'Link' });
    var blogPost = wordSmith.createBlogPost({ title: 'Lorem' });
    blogPost.createFineComment({ text: 'pwned' });

    wordSmith.createBlogPost({ title: 'Ipsum' });

    this.schema.wordSmiths.create({ name: 'Zelda' });

    this.BaseSerializer = _serializer2.default.extend({
      embed: false
    });
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('it throws an error if embed is false and root is false', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    wordSmith: this.BaseSerializer.extend({
      root: false,
      include: ['blogPosts']
    })
  });

  var link = this.schema.wordSmiths.find(1);
  assert.throws(function () {
    registry.serialize(link);
  }, /disables the root/);
});

(0, _qunit.test)('it can sideload a model with a has-many relationship', function (assert) {
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
      blogPostIds: ['1', '2']
    },
    blogPosts: [{ id: '1', title: 'Lorem', wordSmithId: '1' }, { id: '2', title: 'Ipsum', wordSmithId: '1' }]
  });
});

(0, _qunit.test)('it can sideload a model with a chain of has-many relationships', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    wordSmith: this.BaseSerializer.extend({
      include: ['blogPosts']
    }),
    blogPost: this.BaseSerializer.extend({
      include: ['fineComments']
    })
  });

  var link = this.schema.wordSmiths.find(1);
  var result = registry.serialize(link);

  assert.deepEqual(result, {
    wordSmith: {
      id: '1',
      name: 'Link',
      blogPostIds: ['1', '2']
    },
    blogPosts: [{ id: '1', title: 'Lorem', wordSmithId: '1', fineCommentIds: ['1'] }, { id: '2', title: 'Ipsum', wordSmithId: '1', fineCommentIds: [] }],
    fineComments: [{ id: '1', text: 'pwned', blogPostId: '1' }]
  });
});

(0, _qunit.test)('it avoids circularity when serializing a model', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    wordSmith: this.BaseSerializer.extend({
      include: ['blogPosts']
    }),
    blogPost: this.BaseSerializer.extend({
      include: ['wordSmith']
    })
  });

  var link = this.schema.wordSmiths.find(1);
  var result = registry.serialize(link);

  assert.deepEqual(result, {
    wordSmith: {
      id: '1',
      name: 'Link',
      blogPostIds: ['1', '2']
    },
    blogPosts: [{ id: '1', title: 'Lorem', wordSmithId: '1' }, { id: '2', title: 'Ipsum', wordSmithId: '1' }]
  });
});

(0, _qunit.test)('it can sideload a model with a belongs-to relationship', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    blogPost: this.BaseSerializer.extend({
      include: ['wordSmith']
    })
  });

  var blogPost = this.schema.blogPosts.find(1);
  var result = registry.serialize(blogPost);

  assert.deepEqual(result, {
    blogPost: {
      id: '1', title: 'Lorem', wordSmithId: '1'
    },
    wordSmiths: [{ id: '1', name: 'Link' }]
  });
});

(0, _qunit.test)('it can sideload a model with a chain of belongs-to relationships', function (assert) {
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
      id: '1', text: 'pwned', blogPostId: '1'
    },
    blogPosts: [{ id: '1', title: 'Lorem', wordSmithId: '1' }],
    wordSmiths: [{ id: '1', name: 'Link' }]
  });
});