'use strict';

var _emberCliMirage = require('ember-cli-mirage');

var _emberCliMirage2 = _interopRequireDefault(_emberCliMirage);

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _serializer = require('ember-cli-mirage/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | Base | Full Request', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'development',
      models: {
        author: _model2.default.extend({
          posts: _emberCliMirage2.default.hasMany()
        }),
        post: _model2.default.extend({
          author: _emberCliMirage2.default.belongsTo(),
          comments: _emberCliMirage2.default.hasMany()
        }),
        comment: _model2.default.extend({
          post: _emberCliMirage2.default.belongsTo()
        })
      },
      serializers: {
        application: _serializer2.default.extend({
          embed: true,
          root: false
        }),
        author: _serializer2.default.extend({
          embed: true,
          attrs: ['id', 'first'],
          include: ['posts']
        }),
        comment: _serializer2.default.extend({
          embed: true,
          root: false,
          include: function include(request) {
            return request.queryParams.include_post ? ['post'] : [];
          }
        })
      }
    });
    this.server.timing = 0;
    this.server.logging = false;
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
}); // jscs:disable requireCamelCaseOrUpperCaseIdentifiers


(0, _qunit.test)('the appropriate serializer is used', function (assert) {
  assert.expect(1);
  var done = assert.async();
  var author = this.server.schema.authors.create({
    first: 'Link',
    last: 'of Hyrule',
    age: 323
  });
  author.createPost({ title: 'Lorem ipsum' });

  this.server.get('/authors/:id', function (schema, request) {
    var id = request.params.id;


    return schema.authors.find(id);
  });

  $.ajax({
    method: 'GET',
    url: '/authors/1'
  }).done(function (res) {
    assert.deepEqual(res, {
      author: {
        id: '1',
        first: 'Link',
        posts: [{ id: '1', title: 'Lorem ipsum' }]
      }
    });
    done();
  });
});

(0, _qunit.test)('a response falls back to the application serializer, if it exists', function (assert) {
  assert.expect(1);
  var done = assert.async();
  this.server.schema.posts.create({
    title: 'Lorem',
    date: '20001010'
  });

  this.server.get('/posts/:id', function (schema, request) {
    var id = request.params.id;


    return schema.posts.find(id);
  });

  $.ajax({
    method: 'GET',
    url: '/posts/1'
  }).done(function (res) {
    assert.deepEqual(res, {
      id: '1',
      title: 'Lorem',
      date: '20001010'
    });
    done();
  });
});

(0, _qunit.test)('serializer.include is invoked when it is a function', function (assert) {
  assert.expect(1);
  var done = assert.async();
  var post = this.server.schema.posts.create({
    title: 'Lorem',
    date: '20001010'
  });
  post.createComment({
    description: 'Lorem is the best'
  });

  this.server.get('/comments/:id', function (schema, request) {
    var id = request.params.id;

    return schema.comments.find(id);
  });

  $.ajax({
    method: 'GET',
    url: '/comments/1?include_post=true'
  }).done(function (res) {
    assert.deepEqual(res, {
      id: '1',
      description: 'Lorem is the best',
      post: {
        id: '1',
        title: 'Lorem',
        date: '20001010'
      }
    });
    done();
  });
});