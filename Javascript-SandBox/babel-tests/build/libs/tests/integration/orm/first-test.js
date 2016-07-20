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


var schema = void 0;
var User = _model2.default.extend();
(0, _qunit.module)('Integration | ORM | #first', {
  beforeEach: function beforeEach() {
    var db = new _db2.default();
    db.createCollection('users');
    db.users.insert([{ id: 1, name: 'Link' }, { id: 2, name: 'Zelda' }]);
    schema = new _schema2.default(db);

    schema.registerModel('user', User);
  }
});

(0, _qunit.test)('it can find the first model', function (assert) {
  var user = schema.users.first();

  assert.ok(user instanceof User);
  assert.deepEqual(user.attrs, { id: '1', name: 'Link' });
});