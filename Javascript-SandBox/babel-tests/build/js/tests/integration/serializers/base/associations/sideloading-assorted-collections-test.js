'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _serializer = require('ember-cli-mirage/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _schemaHelper = require('../../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | Base | Associations | Sideloading Assorted Collections', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();
    var BaseSerializer = _serializer2.default.extend({
      embed: false
    });
    this.registry = new _serializerRegistry2.default(this.schema, {
      application: BaseSerializer,
      wordSmith: BaseSerializer.extend({
        include: ['blogPosts']
      }),
      greatPhoto: BaseSerializer.extend({
        attrs: ['id', 'title']
      })
    });
    this.wordSmiths = [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }, { id: '3', name: 'Epona' }];
    this.blogPosts = [{ id: '1', title: 'Lorem', wordSmithId: '1' }, { id: '2', title: 'Ipsum', wordSmithId: '1' }];
    this.greatPhotos = [{ id: '1', title: 'Amazing', location: 'Hyrule' }, { id: '2', title: 'greatPhoto', location: 'Goron City' }];
    this.schema.db.loadData({
      wordSmiths: this.wordSmiths,
      blogPosts: this.blogPosts,
      greatPhotos: this.greatPhotos
    });
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

/*
  This is a strange response from a route handler, but it's used in the array get shorthand. Deprecate that shorthand?
*/
(0, _qunit.test)('it can sideload an array of assorted collections that have relationships', function (assert) {
  var _this = this;

  var result = this.registry.serialize([this.schema.wordSmiths.all(), this.schema.greatPhotos.all()]);

  assert.deepEqual(result, {
    wordSmiths: this.wordSmiths.map(function (attrs) {
      attrs.blogPostIds = _this.blogPosts.filter(function (blogPost) {
        return blogPost.wordSmithId === attrs.id;
      }).map(function (blogPost) {
        return blogPost.id;
      });
      return attrs;
    }),
    blogPosts: this.blogPosts,
    greatPhotos: this.greatPhotos.map(function (attrs) {
      delete attrs.location;
      return attrs;
    })
  });
});