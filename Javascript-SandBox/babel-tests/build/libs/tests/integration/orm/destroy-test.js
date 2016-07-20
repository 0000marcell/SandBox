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


var db = void 0;
(0, _qunit.module)('Integration | ORM | destroy', {
  beforeEach: function beforeEach() {
    db = new _db2.default({
      users: [{ id: 1, name: 'Link', evil: false }, { id: 2, name: 'Link', location: 'Hyrule', evil: false }, { id: 3, name: 'Zelda', location: 'Hyrule', evil: false }]
    });

    this.schema = new _schema2.default(db, {
      user: _model2.default
    });
  }
});

(0, _qunit.test)('destroying a model removes the associated record from the db', function (assert) {
  assert.deepEqual(db.users.length, 3);

  var link = this.schema.users.find(1);
  link.destroy();

  assert.deepEqual(db.users.find(1), null);
  assert.deepEqual(db.users.length, 2);
});

(0, _qunit.test)('destroying a collection removes the associated records from the db', function (assert) {
  assert.deepEqual(db.users.length, 3);

  var users = this.schema.users.all();
  users.destroy();

  assert.deepEqual(db.users, []);
});