'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _jsonApiSerializer = require('ember-cli-mirage/serializers/json-api-serializer');

var _jsonApiSerializer2 = _interopRequireDefault(_jsonApiSerializer);

var _schemaHelper = require('../../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// jscs:disable disallowConstOutsideModuleScope


(0, _qunit.module)('Integration | Serializers | JSON API Serializer | Associations | Included', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();

    var smith = this.schema.wordSmiths.create();
    var post = smith.createBlogPost();
    post.createFineComment();
    post.createFineComment();
    this.schema.blogPosts.create();

    var foo = this.schema.foos.create();
    var bar = foo.createBar();
    foo.save();
    var baz = bar.createBaz();
    bar.save();
    var quux1 = baz.createQuux();
    var quux2 = baz.createQuux();
    baz.save();
    var zomg1 = quux1.createZomg();
    var zomg2 = quux1.createZomg();
    quux1.save();
    var zomg3 = quux2.createZomg();
    var zomg4 = quux2.createZomg();
    quux2.save();
    zomg1.createLol();
    zomg2.createLol();
    zomg3.createLol();
    zomg4.createLol();
    zomg1.save();
    zomg2.save();
    zomg3.save();
    zomg4.save();
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('model: it can include relationships specified by the include query param', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default
  });

  var post = this.schema.blogPosts.find(1);
  var request = {
    queryParams: {
      include: 'word-smith,fine-comments'
    }
  };
  var result = registry.serialize(post, request);

  assert.propEqual(result, {
    data: {
      type: 'blog-posts',
      id: '1',
      attributes: {},
      relationships: {
        'word-smith': {
          data: { type: 'word-smiths', id: '1' }
        },
        'fine-comments': {
          data: [{ type: 'fine-comments', id: '1' }, { type: 'fine-comments', id: '2' }]
        }
      }
    },
    included: [{
      type: 'word-smiths',
      id: '1',
      attributes: {},
      relationships: {
        'blog-posts': {
          data: [{ type: 'blog-posts', id: '1' }]
        }
      }
    }, {
      type: 'fine-comments',
      id: '1',
      attributes: {},
      relationships: {
        'blog-post': {
          data: { type: 'blog-posts', id: '1' }
        }
      }
    }, {
      type: 'fine-comments',
      id: '2',
      attributes: {},
      relationships: {
        'blog-post': {
          data: { type: 'blog-posts', id: '1' }
        }
      }
    }]
  });
});

(0, _qunit.test)('model: it can include relationships specified by a combination of the include query param (hasMany) and serializer.relationships (belongsTo, ignored)', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    blogPost: _jsonApiSerializer2.default.extend({
      include: ['wordSmith']
    })
  });

  var post = this.schema.blogPosts.find(1);
  var request = {
    queryParams: {
      include: 'fine-comments'
    }
  };
  var result = registry.serialize(post, request);

  assert.propEqual(result, {
    data: {
      type: 'blog-posts',
      id: '1',
      attributes: {},
      relationships: {
        'word-smith': {
          data: { type: 'word-smiths', id: '1' }
        },
        'fine-comments': {
          data: [{ type: 'fine-comments', id: '1' }, { type: 'fine-comments', id: '2' }]
        }
      }
    },
    included: [{
      type: 'fine-comments',
      id: '1',
      attributes: {},
      relationships: {
        'blog-post': {
          data: { type: 'blog-posts', id: '1' }
        }
      }
    }, {
      type: 'fine-comments',
      id: '2',
      attributes: {},
      relationships: {
        'blog-post': {
          data: { type: 'blog-posts', id: '1' }
        }
      }
    }]
  });
});

(0, _qunit.test)('model: it can include relationships specified by a combination of the include query param (belongsTo) and serializer.relationships (hasMany, ignored)', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    blogPost: _jsonApiSerializer2.default.extend({
      include: ['fineComments']
    })
  });

  var post = this.schema.blogPosts.find(1);
  var request = {
    queryParams: {
      include: 'word-smith'
    }
  };
  var result = registry.serialize(post, request);

  assert.propEqual(result, {
    data: {
      type: 'blog-posts',
      id: '1',
      attributes: {},
      relationships: {
        'word-smith': {
          data: { type: 'word-smiths', id: '1' }
        },
        'fine-comments': {
          data: [{ type: 'fine-comments', id: '1' }, { type: 'fine-comments', id: '2' }]
        }
      }
    },
    included: [{
      type: 'word-smiths',
      id: '1',
      attributes: {},
      relationships: {
        'blog-posts': {
          data: [{ type: 'blog-posts', id: '1' }]
        }
      }
    }]
  });
});

(0, _qunit.test)('collection: it can include relationships specified by the include query param', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default
  });

  var post = this.schema.blogPosts.find([1, 2]);
  var request = {
    queryParams: {
      include: 'word-smith,fine-comments'
    }
  };
  var result = registry.serialize(post, request);

  assert.propEqual(result, {
    data: [{
      type: 'blog-posts',
      id: '1',
      attributes: {},
      relationships: {
        'word-smith': {
          data: { type: 'word-smiths', id: '1' }
        },
        'fine-comments': {
          data: [{ type: 'fine-comments', id: '1' }, { type: 'fine-comments', id: '2' }]
        }
      }
    }, {
      type: 'blog-posts',
      id: '2',
      attributes: {},
      relationships: {
        'fine-comments': {
          data: []
        }
      }
    }],
    included: [{
      type: 'word-smiths',
      id: '1',
      attributes: {},
      relationships: {
        'blog-posts': {
          data: [{ type: 'blog-posts', id: '1' }]
        }
      }
    }, {
      type: 'fine-comments',
      id: '1',
      attributes: {},
      relationships: {
        'blog-post': {
          data: { type: 'blog-posts', id: '1' }
        }
      }
    }, {
      type: 'fine-comments',
      id: '2',
      attributes: {},
      relationships: {
        'blog-post': {
          data: { type: 'blog-posts', id: '1' }
        }
      }
    }]
  });
});

(0, _qunit.test)('dot-paths in include query params include query param', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default
  });

  var foo = this.schema.foos.find(1);
  var request = {
    queryParams: {
      include: 'bar.baz.quuxes.zomgs.lol'
    }
  };
  var result = registry.serialize(foo, request);

  assert.propEqual(result, {
    data: {
      type: 'foos',
      id: '1',
      attributes: {},
      relationships: {
        'bar': {
          data: { type: 'bars', id: '1' }
        }
      }
    },
    included: [{
      type: 'bars',
      id: '1',
      attributes: {},
      relationships: {
        'baz': {
          data: { type: 'bazs', id: '1' }
        }
      }
    }, {
      type: 'bazs',
      id: '1',
      attributes: {},
      relationships: {
        'quuxes': {
          data: [{ type: 'quuxes', id: '1' }, { type: 'quuxes', id: '2' }]
        }
      }
    }, {
      type: 'quuxes',
      id: '1',
      attributes: {},
      relationships: {
        'zomgs': {
          data: [{ type: 'zomgs', id: '1' }, { type: 'zomgs', id: '2' }]
        }
      }
    }, {
      type: 'quuxes',
      id: '2',
      attributes: {},
      relationships: {
        'zomgs': {
          data: [{ type: 'zomgs', id: '3' }, { type: 'zomgs', id: '4' }]
        }
      }
    }, {
      type: 'zomgs',
      id: '1',
      attributes: {},
      relationships: {
        'lol': {
          data: { type: 'lols', id: '1' }
        }
      }
    }, {
      type: 'zomgs',
      id: '2',
      attributes: {},
      relationships: {
        'lol': {
          data: { type: 'lols', id: '2' }
        }
      }
    }, {
      type: 'zomgs',
      id: '3',
      attributes: {},
      relationships: {
        'lol': {
          data: { type: 'lols', id: '3' }
        }
      }
    }, {
      type: 'zomgs',
      id: '4',
      attributes: {},
      relationships: {
        'lol': {
          data: { type: 'lols', id: '4' }
        }
      }
    }, {
      type: 'lols',
      id: '1',
      attributes: {}
    }, {
      type: 'lols',
      id: '2',
      attributes: {}
    }, {
      type: 'lols',
      id: '3',
      attributes: {}
    }, {
      type: 'lols',
      id: '4',
      attributes: {}
    }]
  });
});

(0, _qunit.test)('dot-paths in the serializer returns related resources', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default.extend({
      include: ['bar.baz.quuxes.zomgs.lol']
    })
  });

  var foo = this.schema.foos.find(1);
  var request = { queryParams: {} };
  var result = registry.serialize(foo, request);

  assert.propEqual(result, {
    data: {
      type: 'foos',
      id: '1',
      attributes: {},
      relationships: {
        'bar': {
          data: { type: 'bars', id: '1' }
        }
      }
    },
    included: [{
      type: 'bars',
      id: '1',
      attributes: {},
      relationships: {
        'baz': {
          data: { type: 'bazs', id: '1' }
        }
      }
    }, {
      type: 'bazs',
      id: '1',
      attributes: {},
      relationships: {
        'quuxes': {
          data: [{ type: 'quuxes', id: '1' }, { type: 'quuxes', id: '2' }]
        }
      }
    }, {
      type: 'quuxes',
      id: '1',
      attributes: {},
      relationships: {
        'zomgs': {
          data: [{ type: 'zomgs', id: '1' }, { type: 'zomgs', id: '2' }]
        }
      }
    }, {
      type: 'quuxes',
      id: '2',
      attributes: {},
      relationships: {
        'zomgs': {
          data: [{ type: 'zomgs', id: '3' }, { type: 'zomgs', id: '4' }]
        }
      }
    }, {
      type: 'zomgs',
      id: '1',
      attributes: {},
      relationships: {
        'lol': {
          data: { type: 'lols', id: '1' }
        }
      }
    }, {
      type: 'zomgs',
      id: '2',
      attributes: {},
      relationships: {
        'lol': {
          data: { type: 'lols', id: '2' }
        }
      }
    }, {
      type: 'zomgs',
      id: '3',
      attributes: {},
      relationships: {
        'lol': {
          data: { type: 'lols', id: '3' }
        }
      }
    }, {
      type: 'zomgs',
      id: '4',
      attributes: {},
      relationships: {
        'lol': {
          data: { type: 'lols', id: '4' }
        }
      }
    }, {
      type: 'lols',
      id: '1',
      attributes: {}
    }, {
      type: 'lols',
      id: '2',
      attributes: {}
    }, {
      type: 'lols',
      id: '3',
      attributes: {}
    }, {
      type: 'lols',
      id: '4',
      attributes: {}
    }]
  });
});

(0, _qunit.test)('the include property in the request prevails over any configuration in the serializer (even if empty)', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default.extend({
      include: ['bar.baz.quuxes.zomgs.lol']
    })
  });

  var foo = this.schema.foos.find(1);
  var request = {
    queryParams: { include: 'bar' }
  };
  var result = registry.serialize(foo, request);

  assert.propEqual(result, {
    data: {
      type: 'foos',
      id: '1',
      attributes: {},
      relationships: {
        'bar': {
          data: { type: 'bars', id: '1' }
        }
      }
    },
    included: [{
      type: 'bars',
      id: '1',
      attributes: {},
      relationships: {
        'baz': {
          data: { type: 'bazs', id: '1' }
        }
      }
    }]
  });

  var request2 = {
    queryParams: { include: '' }
  };
  var result2 = registry.serialize(foo, request2);
  assert.propEqual(result2, {
    data: {
      type: 'foos',
      id: '1',
      attributes: {},
      relationships: {
        'bar': {
          data: { type: 'bars', id: '1' }
        }
      }
    }
  });
});