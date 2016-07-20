'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _jsonApiSerializer = require('ember-cli-mirage/serializers/json-api-serializer');

var _jsonApiSerializer2 = _interopRequireDefault(_jsonApiSerializer);

var _schemaHelper = require('../../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | JSON API Serializer | Associations | Links', {
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

(0, _qunit.test)('it can link to relationships, omitting \'data\'', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    application: _jsonApiSerializer2.default,
    blogPost: _jsonApiSerializer2.default.extend({
      links: function links(model) {
        return {
          'wordSmith': {
            related: '/api/word_smiths/' + model.id,
            self: '/api/blog_posts/' + model.id + '/relationships/word_smith'
          },
          'fineComments': {
            related: '/api/fine_comments?blog_post_id=' + model.id,
            self: '/api/blog_posts/' + model.id + '/relationships/fine_comments'
          }
        };
      }
    })
  });

  var wordSmith = this.schema.wordSmiths.find(1);
  var blogPost = this.schema.blogPosts.find(1);
  var result = registry.serialize(blogPost);

  assert.deepEqual(result, {
    data: {
      type: 'blog-posts',
      id: blogPost.id,
      attributes: {
        'title': 'Lorem'
      },
      relationships: {
        'word-smith': {
          links: {
            related: {
              href: '/api/word_smiths/' + wordSmith.id
            },
            self: {
              href: '/api/blog_posts/' + blogPost.id + '/relationships/word_smith'
            }
          }
        },
        'fine-comments': {
          links: {
            related: {
              href: '/api/fine_comments?blog_post_id=' + blogPost.id
            },
            self: {
              href: '/api/blog_posts/' + blogPost.id + '/relationships/fine_comments'
            }
          }
        }
      }
    }
  });
});