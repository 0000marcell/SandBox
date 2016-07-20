'use strict';

var _qunit = require('qunit');

var _emberCliMirage = require('ember-cli-mirage');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

var _head = require('ember-cli-mirage/route-handlers/shorthands/head');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Route Handlers | HEAD shorthand', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'development',
      models: {
        author: _emberCliMirage.Model,
        photo: _emberCliMirage.Model
      }
    });
    this.server.timing = 0;
    this.server.logging = false;

    this.authors = [{ id: 1, name: 'Link' }, { id: 2, name: 'Zelda' }, { id: 3, name: 'Epona' }];
    this.photos = [{ id: 1, title: 'Amazing', location: 'Hyrule' }, { id: 2, title: 'Photo', location: 'Goron City' }];
    this.server.db.loadData({
      authors: this.authors,
      photos: this.photos
    });

    this.schema = this.server.schema;
    this.serializer = new _emberCliMirage.JSONAPISerializer();
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('undefined shorthand with an ID that is not in the DB will return a 404 Response', function (assert) {
  var request = { url: '/authors', params: { id: 101 } };
  var handler = new _head2.default(this.schema, this.serializer, undefined, '/authors');

  var response = handler.handle(request);

  assert.ok(response instanceof _emberCliMirage.Response);
  assert.equal(response.code, 404);
});

(0, _qunit.test)('undefined shorthand with an ID that is in the DB will return a 204 Response', function (assert) {
  var request = { url: '/authors', params: { id: 1 } };
  var handler = new _head2.default(this.schema, this.serializer, undefined, '/authors');

  var response = handler.handle(request);

  assert.ok(response instanceof _emberCliMirage.Response);
  assert.equal(response.code, 204);
});

(0, _qunit.test)('undefined shorthand with coalesce true will return a 204 response if one of the IDs are found', function (assert) {
  var request = { url: '/authors?ids[]=1&ids[]=3', queryParams: { ids: [1, 3] } };
  var options = { coalesce: true };
  var handler = new _head2.default(this.schema, this.serializer, undefined, '/authors', options);

  var response = handler.handle(request);

  assert.ok(response instanceof _emberCliMirage.Response);
  assert.equal(response.code, 204);
});

(0, _qunit.test)('undefined shorthand string (no id) shorthand returns a 204 (regardless of the length of the collection)', function (assert) {
  var request = { url: '/authors' };
  var handler = new _head2.default(this.schema, this.serializer, undefined, '/authors');

  var response = handler.handle(request);

  assert.ok(response instanceof _emberCliMirage.Response);
  assert.equal(response.code, 204);
});

(0, _qunit.test)('string shorthand with an ID that is not in the DB will return a 404 Response', function (assert) {
  var request = { url: '/authors', params: { id: 101 } };
  var handler = new _head2.default(this.schema, this.serializer, 'author');

  var response = handler.handle(request);

  assert.ok(response instanceof _emberCliMirage.Response);
  assert.equal(response.code, 404);
});

(0, _qunit.test)('string shorthand with an ID that is in the DB will return a 204 Response', function (assert) {
  var request = { url: '/authors', params: { id: 1 } };
  var handler = new _head2.default(this.schema, this.serializer, 'author');

  var response = handler.handle(request);

  assert.ok(response instanceof _emberCliMirage.Response);
  assert.equal(response.code, 204);
});

(0, _qunit.test)('string shorthand with coalesce true will return a 204 response if one of the IDs are found', function (assert) {
  var request = { url: '/authors?ids[]=1&ids[]=3', queryParams: { ids: [1, 3] } };
  var options = { coalesce: true };
  var handler = new _head2.default(this.schema, this.serializer, 'author', '/people', options);

  var response = handler.handle(request);

  assert.ok(response instanceof _emberCliMirage.Response);
  assert.equal(response.code, 204);
});

(0, _qunit.test)('string shorthand string (no id) shorthand returns a 204 (regardless of the length of the collection)', function (assert) {
  var request = { url: '/authors' };
  var handler = new _head2.default(this.schema, this.serializer, 'author');

  var response = handler.handle(request);

  assert.ok(response instanceof _emberCliMirage.Response);
  assert.equal(response.code, 204);
});