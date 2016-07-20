'use strict';

var _qunit = require('qunit');

var _emberCliMirage = require('ember-cli-mirage');

var _collection = require('ember-cli-mirage/orm/collection');

var _collection2 = _interopRequireDefault(_collection);

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

var _get = require('ember-cli-mirage/route-handlers/shorthands/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Route Handlers | GET shorthand', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'development',
      models: {
        author: _emberCliMirage.Model.extend({
          posts: (0, _emberCliMirage.hasMany)()
        }),
        post: _emberCliMirage.Model.extend({
          author: (0, _emberCliMirage.belongsTo)(),
          comments: (0, _emberCliMirage.hasMany)()
        }),
        comment: _emberCliMirage.Model.extend({
          post: (0, _emberCliMirage.belongsTo)()
        }),
        photo: _emberCliMirage.Model,
        'project-owner': _emberCliMirage.Model
      }
    });
    this.server.timing = 0;
    this.server.logging = false;

    this.authors = [{ id: 1, name: 'Link' }, { id: 2, name: 'Zelda' }, { id: 3, name: 'Epona' }];
    this.posts = [{ id: 1, title: 'Lorem', authorId: 1 }, { id: 2, title: 'Ipsum', authorId: 1 }];
    this.photos = [{ id: 1, title: 'Amazing', location: 'Hyrule' }, { id: 2, title: 'Photo', location: 'Goron City' }];
    this.projectOwners = [{ id: 1, name: 'Nintendo' }];
    this.server.db.loadData({
      authors: this.authors,
      posts: this.posts,
      photos: this.photos,
      projectOwners: this.projectOwners
    });

    this.schema = this.server.schema;
    this.serializer = new _emberCliMirage.JSONAPISerializer();
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('undefined shorthand returns the collection of models', function (assert) {
  var request = { url: '/authors' };
  var handler = new _get2.default(this.schema, this.serializer, undefined, '/authors');

  var authors = handler.handle(request);

  assert.equal(authors.models.length, 3);
  assert.ok(authors.models[0] instanceof _emberCliMirage.Model);
  assert.equal(authors.models[0].modelName, 'author');
});

(0, _qunit.test)('undefined shorthand ignores query params', function (assert) {
  var request = { url: '/authors?foo=bar' };
  var handler = new _get2.default(this.schema, this.serializer, undefined, '/authors');

  var authors = handler.handle(request);

  assert.equal(authors.models.length, 3);
  assert.ok(authors.models[0] instanceof _emberCliMirage.Model);
  assert.equal(authors.models[0].modelName, 'author');
});

(0, _qunit.test)('undefined shorthand can return a single model', function (assert) {
  var request = { url: '/authors/2', params: { id: 2 } };
  var handler = new _get2.default(this.schema, this.serializer, undefined, '/authors/:id');

  var author = handler.handle(request);

  assert.ok(author instanceof _emberCliMirage.Model);
  assert.equal(author.modelName, 'author');
  assert.equal(author.name, 'Zelda');
});

(0, _qunit.test)('undefined shorthand returns a 404 if a singular resource does not exist', function (assert) {
  var request = { url: '/authors/99', params: { id: 99 } };
  var handler = new _get2.default(this.schema, this.serializer, undefined, '/authors/:id');

  var author = handler.handle(request);

  assert.ok(author instanceof _emberCliMirage.Response);
  assert.equal(author.code, 404);
});

(0, _qunit.test)('undefined shorthand ignores query params for a singular resource', function (assert) {
  var request = { url: '/authors/2?foo=bar', params: { id: 2 } };
  var handler = new _get2.default(this.schema, this.serializer, undefined, '/authors/:id');

  var author = handler.handle(request);

  assert.ok(author instanceof _emberCliMirage.Model);
  assert.equal(author.modelName, 'author');
  assert.equal(author.name, 'Zelda');
});

(0, _qunit.test)('undefined shorthand with coalesce true returns the appropriate models', function (assert) {
  var request = { url: '/authors?ids[]=1&ids[]=3', queryParams: { ids: [1, 3] } };
  var options = { coalesce: true };
  var handler = new _get2.default(this.schema, this.serializer, undefined, '/authors', options);

  var authors = handler.handle(request);

  assert.equal(authors.models.length, 2);
  assert.deepEqual(authors.models.map(function (author) {
    return author.name;
  }), ['Link', 'Epona']);
});

(0, _qunit.test)('string shorthand returns the correct collection of models', function (assert) {
  var request = { url: '/people' };
  var handler = new _get2.default(this.schema, this.serializer, 'author');

  var authors = handler.handle(request);

  assert.equal(authors.models.length, 3);
  assert.ok(authors.models[0] instanceof _emberCliMirage.Model);
  assert.equal(authors.models[0].modelName, 'author');
});

(0, _qunit.test)('string shorthand with an id returns the correct model', function (assert) {
  var request = { url: '/people/2', params: { id: 2 } };
  var handler = new _get2.default(this.schema, this.serializer, 'author');

  var author = handler.handle(request);

  assert.ok(author instanceof _emberCliMirage.Model);
  assert.equal(author.modelName, 'author');
  assert.equal(author.name, 'Zelda');
});

(0, _qunit.test)('string shorthand with an id 404s if the model is not found', function (assert) {
  var request = { url: '/people/99', params: { id: 99 } };
  var handler = new _get2.default(this.schema, this.serializer, 'author');

  var author = handler.handle(request);

  assert.ok(author instanceof _emberCliMirage.Response);
  assert.equal(author.code, 404);
});

(0, _qunit.test)('string shorthand with coalesce returns the correct models', function (assert) {
  var request = { url: '/people?ids[]=1&ids[]=3', queryParams: { ids: [1, 3] } };
  var options = { coalesce: true };
  var handler = new _get2.default(this.schema, this.serializer, 'author', '/people', options);

  var authors = handler.handle(request);

  assert.equal(authors.models.length, 2);
  assert.deepEqual(authors.models.map(function (author) {
    return author.name;
  }), ['Link', 'Epona']);
});

(0, _qunit.test)('array shorthand returns the correct models', function (assert) {
  var url = '/home';
  var request = { url: url };
  var handler = new _get2.default(this.schema, this.serializer, ['authors', 'photos'], url);

  var models = handler.handle(request);

  assert.ok(models[0] instanceof _collection2.default);
  assert.equal(models[0].modelName, 'author');
  assert.equal(models[0].models.length, this.authors.length);

  assert.ok(models[1] instanceof _collection2.default);
  assert.equal(models[1].modelName, 'photo');
  assert.equal(models[1].models.length, this.photos.length);
});

(0, _qunit.test)('array shorthand for a singular resource errors', function (assert) {
  var url = '/authors/1';
  var request = { url: url, params: { id: 1 } };
  var handler = new _get2.default(this.schema, this.serializer, ['author', 'posts'], url);

  assert.throws(function () {
    handler.handle(request);
  }, /create a serializer/);
});

(0, _qunit.test)('shorthand for list of models with a dash in their name', function (assert) {
  var url = '/project-owners';
  var request = { url: url };
  var handler = new _get2.default(this.schema, this.serializer, undefined, url);
  var models = handler.handle(request);

  assert.equal(models.models.length, 1);
  assert.ok(models.models[0] instanceof _emberCliMirage.Model);
  assert.equal(models.models[0].modelName, 'project-owner');
});

(0, _qunit.test)('if a shorthand tries to access an unknown type it throws an error', function (assert) {
  var url = '/foobars';
  var request = { url: url };
  var handler = new _get2.default(this.schema, this.serializer, undefined, url);

  assert.throws(function () {
    handler.handle(request);
  }, /model doesn't exist/);
});