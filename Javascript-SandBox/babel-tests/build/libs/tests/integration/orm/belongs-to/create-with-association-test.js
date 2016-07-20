'use strict';

var _emberCliMirage = require('ember-cli-mirage');

var _emberCliMirage2 = _interopRequireDefault(_emberCliMirage);

var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _schema = require('ember-cli-mirage/orm/schema');

var _schema2 = _interopRequireDefault(_schema);

var _db = require('ember-cli-mirage/db');

var _db2 = _interopRequireDefault(_db);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | ORM | belongsTo create with association', {
  beforeEach: function beforeEach() {
    this.schema = new _schema2.default(new _db2.default(), {
      user: _model2.default.extend(),
      address: _model2.default.extend({
        user: _emberCliMirage2.default.belongsTo()
      }),
      foo: _model2.default
    });
  }
});

(0, _qunit.test)('it sets up associations correctly when passing in the foreign key', function (assert) {
  var user = this.schema.create('user');
  var address = this.schema.create('address', {
    userId: user.id
  });

  assert.equal(address.userId, user.id);
  assert.deepEqual(address.user.attrs, user.attrs);
  assert.equal(this.schema.db.users.length, 1);
  assert.deepEqual(this.schema.db.users[0], { id: '1' });
  assert.equal(this.schema.db.addresses.length, 1);
  assert.deepEqual(this.schema.db.addresses[0], { id: '1', userId: '1' });
});

(0, _qunit.test)('it sets up associations correctly when passing in the association itself', function (assert) {
  var user = this.schema.create('user');
  var address = this.schema.create('address', {
    user: user
  });

  assert.equal(address.userId, user.id);
  assert.deepEqual(address.user.attrs, user.attrs);
  assert.equal(this.schema.db.users.length, 1);
  assert.deepEqual(this.schema.db.users[0], { id: '1' });
  assert.equal(this.schema.db.addresses.length, 1);
  assert.deepEqual(this.schema.db.addresses[0], { id: '1', userId: '1' });
});

(0, _qunit.test)('it throws an error if a model is passed in without a defined relationship', function (assert) {
  var foo = this.schema.create('foo');
  assert.throws(function () {
    this.schema.create('address', {
      foo: foo
    });
  }, /you haven't defined that key as an association on your model/);
});

(0, _qunit.test)('it throws an error if a collection is passed in without a defined relationship', function (assert) {
  this.schema.create('foo');
  this.schema.create('foo');

  assert.throws(function () {
    this.schema.create('address', {
      foos: this.schema.foos.all()
    });
  }, /you haven't defined that key as an association on your model/);
});