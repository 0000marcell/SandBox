'use strict';

var _schema = require('ember-cli-mirage/orm/schema');

var _schema2 = _interopRequireDefault(_schema);

var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _db = require('ember-cli-mirage/db');

var _db2 = _interopRequireDefault(_db);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// jscs:disable disallowVar


var db, schema, User;
(0, _qunit.module)('Integration | ORM | create', {
  beforeEach: function beforeEach() {
    User = _model2.default.extend();
    db = new _db2.default();
    schema = new _schema2.default(db, {
      user: User
    });
  }
});

(0, _qunit.test)('it cannot make new models that havent been registered', function (assert) {
  assert.throws(function () {
    schema.authors.new({ name: 'Link' });
  });
});

(0, _qunit.test)('it cannot create models that havent been registered', function (assert) {
  assert.throws(function () {
    schema.authors.create({ name: 'Link' });
  });
});

(0, _qunit.test)('it can make new models and then save them', function (assert) {
  var user = schema.users.new({ name: 'Link' });

  assert.ok(user instanceof User);
  assert.deepEqual(user.attrs, { name: 'Link' });
  assert.deepEqual(db.users, []);

  user.save();

  assert.ok(user.id, 'user has an id getter');
  assert.deepEqual(user.attrs, { id: '1', name: 'Link' });
  assert.deepEqual(db.users, [{ id: '1', name: 'Link' }]);
});

(0, _qunit.test)('it can create new models, saved directly to the db', function (assert) {
  var user = schema.users.create({ name: 'Link' });

  assert.ok(user instanceof _model2.default);
  assert.ok(user instanceof User);
  assert.deepEqual(user.attrs, { id: '1', name: 'Link' });
  assert.deepEqual(db.users, [{ id: '1', name: 'Link' }]);
});