'use strict';

var _qunit = require('qunit');

var _put = require('ember-cli-mirage/route-handlers/shorthands/put');

var _put2 = _interopRequireDefault(_put);

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _jsonApiSerializer = require('ember-cli-mirage/serializers/json-api-serializer');

var _jsonApiSerializer2 = _interopRequireDefault(_jsonApiSerializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Route Handlers | PUT shorthand', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'development',
      models: {
        author: _model2.default.extend()
      }
    });
    this.server.timing = 0;
    this.server.logging = false;

    this.authors = [{ id: 1, firstName: 'Ganon' }];
    this.server.db.loadData({
      authors: this.authors
    });

    this.schema = this.server.schema;
    this.serializer = new _jsonApiSerializer2.default();

    this.body = {
      data: {
        type: 'authors',
        id: '1',
        attributes: {
          'first-name': 'Ganondorf'
        }
      }
    };
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('undefined shorthand updates the record and returns the model', function (assert) {
  var handler = new _put2.default(this.schema, this.serializer, undefined, '/authors/:id');
  var request = { requestBody: JSON.stringify(this.body), url: '/authors/1', params: { id: '1' } };

  var model = handler.handle(request);

  assert.equal(this.schema.db.authors.length, 1);
  assert.ok(model instanceof _model2.default);
  assert.equal(model.modelName, 'author');
  assert.equal(model.firstName, 'Ganondorf');
});

(0, _qunit.test)('query params are ignored', function (assert) {
  var handler = new _put2.default(this.schema, this.serializer, 'author');
  var request = { requestBody: JSON.stringify(this.body), url: '/authors/1?foo=bar', params: { id: '1' }, queryParams: { foo: 'bar' } };

  var model = handler.handle(request);

  assert.equal(this.schema.db.authors.length, 1);
  assert.ok(model instanceof _model2.default);
  assert.equal(model.modelName, 'author');
  assert.equal(model.firstName, 'Ganondorf');
});

(0, _qunit.test)('string shorthand updates the record of the specified type and returns the model', function (assert) {
  var handler = new _put2.default(this.schema, this.serializer, undefined, '/authors/:id');
  var request = { requestBody: JSON.stringify(this.body), url: '/authors/1', params: { id: '1' } };

  var model = handler.handle(request);

  assert.equal(this.schema.db.authors.length, 1);
  assert.ok(model instanceof _model2.default);
  assert.equal(model.modelName, 'author');
  assert.equal(model.firstName, 'Ganondorf');
});

(0, _qunit.test)('if a shorthand tries to access an unknown type it throws an error', function (assert) {
  var handler = new _put2.default(this.schema, this.serializer, undefined, '/foobars/:id');
  var request = { requestBody: JSON.stringify(this.body), url: '/foobars/1', params: { id: '1' } };

  assert.throws(function () {
    handler.handle(request);
  }, /model doesn't exist/);
  assert.ok(true);
});