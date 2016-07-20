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

var schema; // jscs:disable disallowVar

var User = _model2.default.extend();
(0, _qunit.module)('Integration | ORM | #find', {
  beforeEach: function beforeEach() {
    var db = new _db2.default({ users: [{ id: 1, name: 'Link' }, { id: 2, name: 'Zelda' }] });

    schema = new _schema2.default(db, {
      user: User
    });
  }
});

(0, _qunit.test)('it can find a model by id', function (assert) {
  var zelda = schema.users.find(2);

  assert.ok(zelda instanceof User);
  assert.deepEqual(zelda.attrs, { id: '2', name: 'Zelda' });
});

(0, _qunit.test)('it returns null if no model is found for an id', function (assert) {
  var user = schema.users.find(4);

  assert.equal(user, null);
});

(0, _qunit.test)('it can find multiple models by ids', function (assert) {
  var users = schema.users.find([1, 2]);

  assert.ok(users instanceof _collection2.default, 'it returns a collection');
  assert.ok(users.models[0] instanceof User);
  assert.equal(users.models.length, 2);
  assert.deepEqual(users.models[1].attrs, { id: '2', name: 'Zelda' });
});

(0, _qunit.test)('it errors if incorrect number of models are found for an array of ids', function (assert) {
  assert.throws(function () {
    schema.users.find([1, 6]);
  }, /Couldn't find all users/);
});