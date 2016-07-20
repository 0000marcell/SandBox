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
(0, _qunit.module)('Integration | ORM | attrs', {
  beforeEach: function beforeEach() {
    db = new _db2.default({ users: [{ id: 1, name: 'Link', evil: false }] });

    User = _model2.default.extend();
    schema = new _schema2.default(db, {
      user: User
    });
  }
});

(0, _qunit.test)('attrs returns the models attributes', function (assert) {
  var user = schema.users.find(1);

  assert.deepEqual(user.attrs, { id: '1', name: 'Link', evil: false });
});

(0, _qunit.test)('attributes can be read via plain property access', function (assert) {
  var user = schema.users.find(1);

  assert.equal(user.name, 'Link');
});