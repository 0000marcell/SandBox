'use strict';

var _qunit = require('qunit');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _emberCliMirage = require('ember-cli-mirage');

var _emberCliMirage2 = _interopRequireDefault(_emberCliMirage);

var _delete = require('ember-cli-mirage/route-handlers/shorthands/delete');

var _delete2 = _interopRequireDefault(_delete);

var _jsonApiSerializer = require('ember-cli-mirage/serializers/json-api-serializer');

var _jsonApiSerializer2 = _interopRequireDefault(_jsonApiSerializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Route Handlers | DELETE shorthand', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'development',
      models: {
        wordSmith: _model2.default.extend({
          blogPosts: _emberCliMirage2.default.hasMany()
        }),
        blogPost: _model2.default
      }
    });
    this.server.timing = 0;
    this.server.logging = false;

    var wordSmiths = [{ id: 1, name: 'Ganon' }];
    var blogPosts = [{ id: 1, title: 'Lorem', wordSmithId: '1' }, { id: 2, title: 'Another', wordSmithId: '2' }];
    this.server.db.loadData({ wordSmiths: wordSmiths, blogPosts: blogPosts });

    this.schema = this.server.schema;
    this.serializer = new _jsonApiSerializer2.default();
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('undefined shorthand deletes the record and returns null', function (assert) {
  var request = { url: '/word-smiths/1', params: { id: '1' } };
  var handler = new _delete2.default(this.schema, this.serializer, undefined, '/word-smiths/:id');

  var response = handler.handle(request);

  assert.equal(this.schema.db.wordSmiths.length, 0);
  assert.equal(response, null);
});

(0, _qunit.test)('query params are ignored', function (assert) {
  var request = { url: '/word-smiths/1?foo=bar', params: { id: '1' }, queryParams: { foo: 'bar' } };
  var handler = new _delete2.default(this.schema, this.serializer, undefined, '/word-smiths/:id');

  var response = handler.handle(request);

  assert.equal(this.schema.db.wordSmiths.length, 0);
  assert.equal(response, null);
});

(0, _qunit.test)('string shorthand deletes the record of the specified type', function (assert) {
  var request = { url: '/word-smiths/1?foo=bar', params: { id: '1' }, queryParams: { foo: 'bar' } };
  var handler = new _delete2.default(this.schema, this.serializer, undefined, '/word-smiths/:id');

  var response = handler.handle(request);

  assert.equal(this.schema.db.wordSmiths.length, 0);
  assert.equal(response, null);
});

(0, _qunit.test)('array shorthand deletes the record and all related records', function (assert) {
  var request = { url: '/word-smiths/1', params: { id: '1' } };
  var handler = new _delete2.default(this.schema, this.serializer, ['word-smith', 'blog-post']);

  var response = handler.handle(request);

  assert.equal(this.schema.db.wordSmiths.length, 0);
  assert.equal(this.schema.db.blogPosts.length, 1);
  assert.equal(response, null);
});

(0, _qunit.test)('if a shorthand tries to access an unknown type it throws an error', function (assert) {
  var request = { url: '/foobars/1', params: { id: '1' } };
  var handler = new _delete2.default(this.schema, this.serializer, undefined, '/foobars/:id');

  assert.throws(function () {
    handler.handle(request);
  }, /model doesn't exist/);
  assert.ok(true);
});