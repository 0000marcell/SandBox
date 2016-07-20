'use strict';

var _qunit = require('qunit');

var _emberCliMirage = require('ember-cli-mirage');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

var _response = require('ember-cli-mirage/response');

var _response2 = _interopRequireDefault(_response);

var _function = require('ember-cli-mirage/route-handlers/function');

var _function2 = _interopRequireDefault(_function);

var _uniq2 = require('lodash/array/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Route handlers | Function handler', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'development',
      models: {
        user: _emberCliMirage.Model.extend({})
      },
      serializers: {
        sparseUser: _emberCliMirage.Serializer.extend({
          attrs: ['id', 'name', 'tall']
        })
      }
    });
    this.server.timing = 0;
    this.server.logging = false;

    this.functionHandler = new _function2.default(this.server.schema, this.server.serializerOrRegistry);
    this.schema = this.server.schema;
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('mirage response string is not serialized to string', function (assert) {
  assert.expect(1);
  var done = assert.async();

  this.server.get('/users', function () {
    return new _response2.default(200, { 'Content-Type': 'text/csv' }, 'firstname,lastname\nbob,dylon');
  });

  $.ajax({ method: 'GET', url: '/users' }).done(function (res) {
    assert.equal(res, 'firstname,lastname\nbob,dylon');
    done();
  });
});

(0, _qunit.test)('#serialize uses the default serializer on a model', function (assert) {
  this.schema.users.create({ name: 'Sam' });

  var user = this.schema.users.first();
  var json = this.functionHandler.serialize(user);

  assert.deepEqual(json, {
    user: {
      id: '1',
      name: 'Sam'
    }
  });
});

(0, _qunit.test)('#serialize uses the default serializer on a collection', function (assert) {
  this.schema.users.create({ name: 'Sam' });

  var users = this.schema.users.all();
  var json = this.functionHandler.serialize(users);

  assert.deepEqual(json, {
    users: [{ id: '1', name: 'Sam' }]
  });
});

(0, _qunit.test)('#serialize takes an optional serializer type', function (assert) {
  this.schema.users.create({ name: 'Sam', tall: true, evil: false });
  this.schema.users.create({ name: 'Ganondorf', tall: true, evil: true });

  var users = this.schema.users.all();
  var json = this.functionHandler.serialize(users, 'sparse-user');

  assert.deepEqual(json, {
    users: [{ id: '1', name: 'Sam', tall: true }, { id: '2', name: 'Ganondorf', tall: true }]
  });
});

(0, _qunit.test)('#serialize throws an error when trying to specify a serializer that doesnt exist', function (assert) {
  this.schema.users.create({ name: 'Sam' });

  var users = this.schema.users.all();

  assert.throws(function () {
    this.functionHandler.serialize(users, 'foo-user');
  }, /that serializer doesn't exist/);
});

(0, _qunit.test)('#serialize noops on plain JS arrays', function (assert) {
  this.server.schema.users.create({ name: 'Sam' });
  this.server.schema.users.create({ name: 'Sam' });
  this.server.schema.users.create({ name: 'Ganondorf' });

  var users = this.schema.users.all().models;
  var uniqueNames = (0, _uniq3.default)(users, function (u) {
    return u.name;
  });
  var serializedResponse = this.functionHandler.serialize(uniqueNames);

  assert.deepEqual(serializedResponse, uniqueNames);
});

(0, _qunit.test)('#serialize on a Collection takes an optional serializer type', function (assert) {
  this.server.schema.users.create({ name: 'Sam', tall: true, evil: false });
  this.server.schema.users.create({ name: 'Sam', tall: true, evil: false });
  this.server.schema.users.create({ name: 'Ganondorf', tall: true, evil: true });

  var users = this.schema.users.all().models;
  var uniqueNames = (0, _uniq3.default)(users, function (u) {
    return u.name;
  });
  var collection = new _emberCliMirage.Collection('user', uniqueNames);
  var json = this.functionHandler.serialize(collection, 'sparse-user');

  assert.deepEqual(json, {
    users: [{ id: '1', name: 'Sam', tall: true }, { id: '3', name: 'Ganondorf', tall: true }]
  });
});