'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _jsonApiSerializer = require('ember-cli-mirage/serializers/json-api-serializer');

var _jsonApiSerializer2 = _interopRequireDefault(_jsonApiSerializer);

var _schemaHelper = require('../../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | JSON API Serializer | Associations | Collection', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();

    var link = this.schema.wordSmiths.create({ firstName: 'Link' });
    var blogPost = link.createBlogPost({ title: 'Lorem' });
    blogPost.createFineComment({ text: 'pwned' });

    link.createBlogPost({ title: 'Ipsum' });

    this.schema.wordSmiths.create({ firstName: 'Zelda' });
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('it can serialize a collection with a has-many relationship', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    wordSmith: _jsonApiSerializer2.default.extend({
      include: ['blogPosts']
    })
  });

  var wordSmiths = this.schema.wordSmiths.all();
  var result = registry.serialize(wordSmiths);

  assert.deepEqual(result, {
    data: [{
      type: 'word-smiths',
      id: '1',
      attributes: {
        'first-name': 'Link'
      },
      relationships: {
        'blog-posts': {
          data: [{ type: 'blog-posts', id: '1' }, { type: 'blog-posts', id: '2' }]
        }
      }
    }, {
      type: 'word-smiths',
      id: '2',
      attributes: {
        'first-name': 'Zelda'
      },
      relationships: {
        'blog-posts': {
          data: []
        }
      }
    }],
    included: [{
      type: 'blog-posts',
      id: '1',
      attributes: {
        title: 'Lorem'
      },
      relationships: {
        'fine-comments': {
          data: [{ type: 'fine-comments', id: '1' }]
        },
        'word-smith': {
          data: { type: 'word-smiths', id: '1' }
        }
      }
    }, {
      type: 'blog-posts',
      id: '2',
      attributes: {
        title: 'Ipsum'
      },
      relationships: {
        'fine-comments': {
          data: []
        },
        'word-smith': {
          data: { type: 'word-smiths', id: '1' }
        }
      }
    }]
  });
});

(0, _qunit.test)('it can serialize a collection with a chain of has-many relationships', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    wordSmith: _jsonApiSerializer2.default.extend({
      include: ['blogPosts']
    }),
    blogPost: _jsonApiSerializer2.default.extend({
      include: ['fineComments']
    })
  });

  var wordSmiths = this.schema.wordSmiths.all();
  var result = registry.serialize(wordSmiths);

  assert.deepEqual(result, {
    data: [{
      type: 'word-smiths',
      id: '1',
      attributes: {
        'first-name': 'Link'
      },
      relationships: {
        'blog-posts': {
          data: [{ type: 'blog-posts', id: '1' }, { type: 'blog-posts', id: '2' }]
        }
      }
    }, {
      type: 'word-smiths',
      id: '2',
      attributes: {
        'first-name': 'Zelda'
      },
      relationships: {
        'blog-posts': {
          data: []
        }
      }
    }],
    included: [{
      type: 'blog-posts',
      id: '1',
      attributes: {
        title: 'Lorem'
      },
      relationships: {
        'fine-comments': {
          data: [{ type: 'fine-comments', id: '1' }]
        },
        'word-smith': {
          data: { type: 'word-smiths', id: '1' }
        }
      }
    }, {
      type: 'fine-comments',
      id: '1',
      attributes: {
        text: 'pwned'
      },
      relationships: {
        'blog-post': {
          data: { type: 'blog-posts', id: '1' }
        }
      }
    }, {
      type: 'blog-posts',
      id: '2',
      attributes: {
        title: 'Ipsum'
      },
      relationships: {
        'fine-comments': {
          data: []
        },
        'word-smith': {
          data: { type: 'word-smiths', id: '1' }
        }
      }
    }]
  });
});

(0, _qunit.test)('it can serialize a collection with a belongs-to relationship', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    blogPost: _jsonApiSerializer2.default.extend({
      include: ['wordSmith']
    })
  });

  var blogPosts = this.schema.blogPosts.all();
  var result = registry.serialize(blogPosts);

  assert.deepEqual(result, {
    data: [{
      type: 'blog-posts',
      id: '1',
      attributes: {
        title: 'Lorem'
      },
      relationships: {
        'fine-comments': {
          data: [{ type: 'fine-comments', id: '1' }]
        },
        'word-smith': {
          data: { type: 'word-smiths', id: '1' }
        }
      }
    }, {
      type: 'blog-posts',
      id: '2',
      attributes: {
        title: 'Ipsum'
      },
      relationships: {
        'fine-comments': {
          data: []
        },
        'word-smith': {
          data: { type: 'word-smiths', id: '1' }
        }
      }
    }],
    included: [{
      type: 'word-smiths',
      id: '1',
      attributes: {
        'first-name': 'Link'
      },
      relationships: {
        'blog-posts': {
          data: [{ type: 'blog-posts', id: '1' }, { type: 'blog-posts', id: '2' }]
        }
      }
    }]
  });
});

(0, _qunit.test)('it can serialize a collection with a chain of belongs-to relationships', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    fineComment: _jsonApiSerializer2.default.extend({
      include: ['blogPost']
    }),
    blogPost: _jsonApiSerializer2.default.extend({
      include: ['wordSmith']
    })
  });

  var fineComments = this.schema.fineComments.all();
  var result = registry.serialize(fineComments);

  assert.deepEqual(result, {
    data: [{
      type: 'fine-comments',
      id: '1',
      attributes: {
        text: 'pwned'
      },
      relationships: {
        'blog-post': {
          data: { type: 'blog-posts', id: '1' }
        }
      }
    }],
    included: [{
      type: 'blog-posts',
      id: '1',
      attributes: {
        title: 'Lorem'
      },
      relationships: {
        'fine-comments': {
          data: [{
            id: '1',
            type: 'fine-comments'
          }]
        },
        'word-smith': {
          data: { type: 'word-smiths', id: '1' }
        }
      }
    }, {
      type: 'word-smiths',
      id: '1',
      attributes: {
        'first-name': 'Link'
      },
      relationships: {
        'blog-posts': {
          data: [{
            id: '1',
            type: 'blog-posts'
          }, {
            id: '2',
            type: 'blog-posts'
          }]
        }
      }
    }]
  });
});

(0, _qunit.test)('it can serialize a collection of models that have both belongs-to and has-many relationships', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    blogPost: _jsonApiSerializer2.default.extend({
      include: ['wordSmith', 'fineComments']
    })
  });

  var blogPost = this.schema.blogPosts.find(1);
  var result = registry.serialize(blogPost);

  assert.deepEqual(result, {
    data: {
      type: 'blog-posts',
      id: '1',
      attributes: {
        title: 'Lorem'
      },
      relationships: {
        'word-smith': {
          data: { type: 'word-smiths', id: '1' }
        },
        'fine-comments': {
          data: [{ type: 'fine-comments', id: '1' }]
        }
      }
    },
    included: [{
      type: 'word-smiths',
      id: '1',
      attributes: {
        'first-name': 'Link'
      },
      relationships: {
        'blog-posts': {
          data: [{
            id: '1',
            type: 'blog-posts'
          }, {
            id: '2',
            type: 'blog-posts'
          }]
        }
      }
    }, {
      type: 'fine-comments',
      id: '1',
      attributes: {
        'text': 'pwned'
      },
      relationships: {
        'blog-post': {
          data: {
            id: '1',
            type: 'blog-posts'
          }
        }
      }
    }]
  });
});