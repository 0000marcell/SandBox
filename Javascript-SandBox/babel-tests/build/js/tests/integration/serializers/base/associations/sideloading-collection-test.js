'use strict';

var _serializer = require('ember-cli-mirage/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _schemaHelper = require('../../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | Base | Associations | Sideloading Collections', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();

    var link = this.schema.wordSmiths.create({ name: 'Link' });
    var blogPost = link.createBlogPost({ title: 'Lorem' });
    link.createBlogPost({ title: 'Ipsum' });

    blogPost.createFineComment({ text: 'pwned' });

    var zelda = this.schema.wordSmiths.create({ name: 'Zelda' });
    zelda.createBlogPost({ title: 'Zeldas blogPost' });

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

  var wordSmiths = this.schema.wordSmiths.all();

  assert.throws(function () {
    registry.serialize(wordSmiths);
  }, /disables the root/);
});

(0, _qunit.test)('it can sideload an empty collection', function (assert) {
  this.schema.db.emptyData();
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    wordSmith: this.BaseSerializer.extend({
      include: ['blogPosts']
    })
  });

  var result = registry.serialize(this.schema.wordSmiths.all());

  assert.deepEqual(result, {
    wordSmiths: []
  });
});

(0, _qunit.test)('it can sideload a collection with a has-many relationship', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    wordSmith: this.BaseSerializer.extend({
      embed: false,
      include: ['blogPosts']
    })
  });

  var wordSmiths = this.schema.wordSmiths.all();
  var result = registry.serialize(wordSmiths);

  assert.deepEqual(result, {
    wordSmiths: [{ id: '1', name: 'Link', blogPostIds: ['1', '2'] }, { id: '2', name: 'Zelda', blogPostIds: ['3'] }],
    blogPosts: [{ id: '1', title: 'Lorem', wordSmithId: '1' }, { id: '2', title: 'Ipsum', wordSmithId: '1' }, { id: '3', title: 'Zeldas blogPost', wordSmithId: '2' }]
  });
});

(0, _qunit.test)('it can sideload a collection with a chain of has-many relationships', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    wordSmith: this.BaseSerializer.extend({
      embed: false,
      include: ['blogPosts']
    }),
    blogPost: this.BaseSerializer.extend({
      include: ['fineComments']
    })
  });

  var wordSmiths = this.schema.wordSmiths.all();
  var result = registry.serialize(wordSmiths);

  assert.deepEqual(result, {
    wordSmiths: [{ id: '1', name: 'Link', blogPostIds: ['1', '2'] }, { id: '2', name: 'Zelda', blogPostIds: ['3'] }],
    blogPosts: [{ id: '1', title: 'Lorem', wordSmithId: '1', fineCommentIds: ['1'] }, { id: '2', title: 'Ipsum', wordSmithId: '1', fineCommentIds: [] }, { id: '3', title: 'Zeldas blogPost', wordSmithId: '2', fineCommentIds: [] }],
    fineComments: [{ id: '1', text: 'pwned', blogPostId: '1' }]
  });
});

(0, _qunit.test)('it avoids circularity when serializing a collection', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    wordSmith: this.BaseSerializer.extend({
      embed: false,
      include: ['blogPosts']
    }),
    blogPost: this.BaseSerializer.extend({
      include: ['wordSmith']
    })
  });

  var wordSmiths = this.schema.wordSmiths.all();
  var result = registry.serialize(wordSmiths);

  assert.deepEqual(result, {
    wordSmiths: [{ id: '1', name: 'Link', blogPostIds: ['1', '2'] }, { id: '2', name: 'Zelda', blogPostIds: ['3'] }],
    blogPosts: [{ id: '1', title: 'Lorem', wordSmithId: '1' }, { id: '2', title: 'Ipsum', wordSmithId: '1' }, { id: '3', title: 'Zeldas blogPost', wordSmithId: '2' }]
  });
});

(0, _qunit.test)('it can sideload a collection with a belongs-to relationship', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    blogPost: this.BaseSerializer.extend({
      embed: false,
      include: ['wordSmith']
    })
  });

  var blogPosts = this.schema.blogPosts.all();
  var result = registry.serialize(blogPosts);

  assert.deepEqual(result, {
    blogPosts: [{ id: '1', title: 'Lorem', wordSmithId: '1' }, { id: '2', title: 'Ipsum', wordSmithId: '1' }, { id: '3', title: 'Zeldas blogPost', wordSmithId: '2' }],
    wordSmiths: [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }]
  });
});

(0, _qunit.test)('it can sideload a collection with a chain of belongs-to relationships', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    fineComment: this.BaseSerializer.extend({
      embed: false,
      include: ['blogPost']
    }),
    blogPost: this.BaseSerializer.extend({
      include: ['wordSmith']
    })
  });

  var fineComments = this.schema.fineComments.all();
  var result = registry.serialize(fineComments);

  assert.deepEqual(result, {
    fineComments: [{ id: '1', text: 'pwned', blogPostId: '1' }],
    blogPosts: [{ id: '1', title: 'Lorem', wordSmithId: '1' }],
    wordSmiths: [{ id: '1', name: 'Link' }]
  });
});

(0, _qunit.test)('it skips an empty belongs-to relationship', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: this.BaseSerializer,
    foo: this.BaseSerializer.extend({
      include: ['bar']
    })
  });

  var foo1 = this.schema.foos.create({ name: 'test foo' });
  var result = registry.serialize(foo1);

  assert.deepEqual(result, {
    foo: { id: '1', name: 'test foo', barId: null }
  });
});