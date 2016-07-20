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

(0, _qunit.module)('Integration | ORM | #all'); // jscs:disable disallowVar


(0, _qunit.test)('it can return all models', function (assert) {
  var db = new _db2.default({
    users: [{ id: 1, name: 'Link' }, { id: 2, name: 'Zelda' }]
  });
  var User = _model2.default.extend();
  var schema = new _schema2.default(db, {
    user: User
  });

  var users = schema.users.all();
  assert.ok(users instanceof _collection2.default, 'it returns a collection');
  assert.ok(users.models[0] instanceof User, 'each member of the collection is a model');
  assert.equal(users.models.length, 2);
  assert.deepEqual(users.models[1].attrs, { id: '2', name: 'Zelda' });
});

(0, _qunit.test)('it returns an empty array when no models exist', function (assert) {
  var db = new _db2.default({ users: [] });

  var User = _model2.default.extend();
  var schema = new _schema2.default(db, {
    user: User
  });

  var users = schema.users.all();

  assert.ok(users instanceof _collection2.default, 'it returns a collection');
  assert.equal(users.modelName, 'user', 'the collection knows its type');
  assert.equal(users.models.length, 0);
});