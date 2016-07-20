'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _jsonApiSerializer = require('ember-cli-mirage/serializers/json-api-serializer');

var _jsonApiSerializer2 = _interopRequireDefault(_jsonApiSerializer);

var _schemaHelper = require('../../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | JSON API Serializer | Associations | Model', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();

    var link = this.schema.wordSmiths.create({ firstName: 'Link' });
    var blogPost = link.createBlogPost({ title: 'Lorem' });
    blogPost.createFineComment({ text: 'pwned' });

    link.createBlogPost({ title: 'Ipsum' });

    this.schema.wordSmiths.create({ name: 'Zelda' });
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('it can include a has many relationship', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    wordSmith: _jsonApiSerializer2.default.extend({
      include: ['blogPosts']
    })
  });

  var link = this.schema.wordSmiths.find(1);
  var result = registry.serialize(link);

  assert.deepEqual(result, {
    data: {
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
    },
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
          data: {
            id: '1',
            type: 'word-smiths'
          }
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
          data: {
            id: '1',
            type: 'word-smiths'
          }
        }
      }
    }]
  });
});

(0, _qunit.test)('it can include a chain of has-many relationships', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    wordSmith: _jsonApiSerializer2.default.extend({
      include: ['blogPosts']
    }),
    blogPost: _jsonApiSerializer2.default.extend({
      include: ['fineComments']
    })
  });

  var link = this.schema.wordSmiths.find(1);
  var result = registry.serialize(link);

  assert.deepEqual(result, {
    data: {
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
    },
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
          data: {
            id: '1',
            type: 'word-smiths'
          }
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
          data: {
            id: '1',
            type: 'blog-posts'
          }
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
          data: {
            id: '1',
            type: 'word-smiths'
          }
        }
      }
    }]
  });
});

(0, _qunit.test)('it can embed a belongs-to relationship', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    blogPost: _jsonApiSerializer2.default.extend({
      include: ['wordSmith']
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
        'fine-comments': {
          data: [{
            id: '1',
            type: 'fine-comments'
          }]
        },
        'word-smith': {
          data: {
            id: '1',
            type: 'word-smiths'
          }
        }
      }
    },
    'included': [{
      attributes: {
        'first-name': 'Link'
      },
      id: '1',
      type: 'word-smiths',
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

(0, _qunit.test)('it gracefully handles null belongs-to relationship', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    blogPost: _jsonApiSerializer2.default.extend({
      include: ['wordSmith']
    })
  });

  this.schema.blogPosts.create({ title: 'Lorem3' });
  var blogPost = this.schema.blogPosts.find(3);
  var result = registry.serialize(blogPost);

  assert.deepEqual(result, {
    data: {
      type: 'blog-posts',
      id: '3',
      attributes: {
        title: 'Lorem3'
      },
      relationships: {
        'fine-comments': {
          data: []
        }
      }
    }
  });
});

(0, _qunit.test)('it can serialize a chain of belongs-to relationships', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    blogPost: _jsonApiSerializer2.default.extend({
      include: ['wordSmith']
    }),
    fineComment: _jsonApiSerializer2.default.extend({
      include: ['blogPost']
    })
  });

  var fineComment = this.schema.fineComments.find(1);
  var result = registry.serialize(fineComment);

  assert.deepEqual(result, {
    data: {
      type: 'fine-comments',
      id: '1',
      attributes: {
        text: 'pwned'
      },
      relationships: {
        'blog-post': {
          data: {
            id: '1',
            type: 'blog-posts'
          }
        }
      }
    },
    'included': [{
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
          data: {
            type: 'word-smiths',
            id: '1'
          }
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

(0, _qunit.test)('it ignores relationships that refer to serialized ancestor resources', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    wordSmith: _jsonApiSerializer2.default.extend({
      include: ['blogPosts']
    }),
    blogPost: _jsonApiSerializer2.default.extend({
      include: ['wordSmith']
    })
  });

  var wordSmith = this.schema.wordSmiths.find(1);
  var result = registry.serialize(wordSmith);

  assert.deepEqual(result, {
    data: {
      attributes: {
        'first-name': 'Link'
      },
      id: '1',
      relationships: {
        'blog-posts': {
          data: [{ type: 'blog-posts', id: '1' }, { type: 'blog-posts', id: '2' }]
        }
      },
      type: 'word-smiths'
    },
    included: [{
      attributes: {
        title: 'Lorem'
      },
      id: '1',
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
      },
      type: 'blog-posts'
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

(0, _qunit.test)('it ignores relationships that refer to serialized ancestor resources, multiple levels down', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    wordSmith: _jsonApiSerializer2.default.extend({
      include: ['blogPosts']
    }),
    blogPost: _jsonApiSerializer2.default.extend({
      include: ['wordSmith', 'fineComments']
    }),
    fineComment: _jsonApiSerializer2.default.extend({
      include: ['blogPost']
    })
  });

  var wordSmith = this.schema.wordSmiths.find(1);
  var result = registry.serialize(wordSmith);

  assert.deepEqual(result, {
    data: {
      attributes: {
        'first-name': 'Link'
      },
      id: '1',
      relationships: {
        'blog-posts': {
          data: [{ type: 'blog-posts', id: '1' }, { type: 'blog-posts', id: '2' }]
        }
      },
      type: 'word-smiths'
    },
    included: [{
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
        'word-smith': {
          data: { type: 'word-smiths', id: '1' }
        },
        'fine-comments': {
          data: []
        }
      }
    }]
  });
});