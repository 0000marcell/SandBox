'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _jsonApiSerializer = require('ember-cli-mirage/serializers/json-api-serializer');

var _jsonApiSerializer2 = _interopRequireDefault(_jsonApiSerializer);

var _schemaHelper = require('../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _inflector = require('ember-cli-mirage/utils/inflector');

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | JSON API Serializer | Key Formatting', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
}); // jscs:disable requireCamelCaseOrUpperCaseIdentifiers


(0, _qunit.test)('keyForAttribute formats the attributes of a model', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default.extend({
      keyForAttribute: _inflector.underscore
    })
  });
  var wordSmith = this.schema.wordSmiths.create({
    id: 1,
    firstName: 'Link',
    lastName: 'Jackson',
    age: 323
  });

  var result = registry.serialize(wordSmith);

  assert.deepEqual(result, {
    data: {
      type: 'word-smiths',
      id: '1',
      attributes: {
        age: 323,
        first_name: 'Link',
        last_name: 'Jackson'
      },
      relationships: {
        'blog-posts': {
          data: []
        }
      }
    }
  });
});

(0, _qunit.test)('keyForAttribute also formats the models in a collections', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default.extend({
      keyForAttribute: _inflector.underscore
    })
  });

  this.schema.wordSmiths.create({ id: 1, 'firstName': 'Link', 'lastName': 'Jackson' });
  this.schema.wordSmiths.create({ id: 2, 'firstName': 'Zelda', 'lastName': 'Brown' });
  var wordSmiths = this.schema.wordSmiths.all();

  var result = registry.serialize(wordSmiths);

  assert.deepEqual(result, {
    data: [{
      type: 'word-smiths',
      id: '1',
      attributes: {
        'first_name': 'Link',
        'last_name': 'Jackson'
      },
      relationships: {
        'blog-posts': {
          data: []
        }
      }
    }, {
      type: 'word-smiths',
      id: '2',
      attributes: {
        'first_name': 'Zelda',
        'last_name': 'Brown'
      },
      relationships: {
        'blog-posts': {
          data: []
        }
      }
    }]
  });
});

(0, _qunit.test)('keyForRelationship works', function (assert) {
  var ApplicationSerializer = _jsonApiSerializer2.default.extend({
    keyForRelationship: _inflector.underscore
  });
  var registry = new _serializerRegistry2.default(this.schema, {
    application: ApplicationSerializer,
    wordSmith: ApplicationSerializer.extend({
      include: ['blogPosts']
    })
  });
  var wordSmith = this.schema.wordSmiths.create({
    id: 1,
    firstName: 'Link',
    lastName: 'Jackson',
    age: 323
  });
  wordSmith.createBlogPost({ title: 'Lorem ipsum' });

  var result = registry.serialize(wordSmith);

  assert.deepEqual(result, {
    data: {
      type: 'word-smiths',
      id: '1',
      attributes: {
        age: 323,
        'first-name': 'Link',
        'last-name': 'Jackson'
      },
      relationships: {
        'blog_posts': {
          data: [{ id: '1', type: 'blog-posts' }]
        }
      }
    },
    included: [{
      attributes: {
        title: 'Lorem ipsum'
      },
      id: '1',
      relationships: {
        fine_comments: {
          data: []
        },
        word_smith: {
          data: {
            type: 'word-smiths',
            id: '1'
          }
        }
      },
      type: 'blog-posts'
    }]
  });
});