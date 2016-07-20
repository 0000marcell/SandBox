'use strict';

var _schema = require('ember-cli-mirage/orm/schema');

var _schema2 = _interopRequireDefault(_schema);

var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _db = require('ember-cli-mirage/db');

var _db2 = _interopRequireDefault(_db);

var _collection = require('ember-cli-mirage/orm/collection');

var _collection2 = _interopRequireDefault(_collection);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = void 0; // jscs:disable disallowVar

var User = _model2.default.extend();
(0, _qunit.module)('Integration | ORM | #where', {
  beforeEach: function beforeEach() {
    var db = new _db2.default({ users: [{ id: 1, name: 'Link', good: true }, { id: 2, name: 'Zelda', good: true }, { id: 3, name: 'Ganon', good: false }] });

    schema = new _schema2.default(db, {
      user: User
    });
  }
});

(0, _qunit.test)('it returns models that match a query with where', function (assert) {
  var users = schema.users.where({ good: false });

  assert.ok(users instanceof _collection2.default, 'it returns a collection');
  assert.equal(users.models.length, 1);
  assert.ok(users.models[0] instanceof User);
  assert.deepEqual(users.models[0].attrs, { id: '3', name: 'Ganon', good: false });
});

(0, _qunit.test)('it returns models that match using a query function', function (assert) {
  var users = schema.users.where(function (rec) {
    return !rec.good;
  });

  assert.ok(users instanceof _collection2.default, 'it returns a collection');
  assert.equal(users.models.length, 1);
  assert.ok(users.models[0] instanceof User);
  assert.deepEqual(users.models[0].attrs, { id: '3', name: 'Ganon', good: false });
});

(0, _qunit.test)('it returns an empty collection if no models match a query', function (assert) {
  var users = schema.users.where({ name: 'Link', good: false });

  assert.ok(users instanceof _collection2.default, 'it returns a collection');
  assert.equal(users.models.length, 0);
});