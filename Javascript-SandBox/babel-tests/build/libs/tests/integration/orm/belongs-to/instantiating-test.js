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

var schema, link; // jscs:disable disallowVar

(0, _qunit.module)('Integration | ORM | belongsTo instantiating with params', {
  beforeEach: function beforeEach() {
    var db = new _db2.default({
      users: [{ id: 1, name: 'Link' }],
      addresses: []
    });

    var User = _model2.default.extend();
    var Address = _model2.default.extend({
      user: _emberCliMirage2.default.belongsTo()
    });

    schema = new _schema2.default(db);
    schema.registerModels({
      user: User,
      address: Address
    });

    link = schema.users.find(1);
  }
});

(0, _qunit.test)('the child accepts a saved parents id', function (assert) {
  var address = schema.addresses.new({ userId: 1 });

  assert.equal(address.userId, 1);
  assert.deepEqual(address.user, link);
  assert.deepEqual(address.attrs, { userId: 1 });
});

(0, _qunit.test)('the child errors if the parent id doesnt exist', function (assert) {
  assert.throws(function () {
    schema.addresses.new({ userId: 2 });
  }, /Couldn't find user/);
});

(0, _qunit.test)('the child accepts a null parent id', function (assert) {
  var address = schema.addresses.new({ userId: null });

  assert.equal(address.userId, null);
  assert.deepEqual(address.user, null);
  assert.deepEqual(address.attrs, { userId: null });
});

(0, _qunit.test)('the child accepts a saved parent model', function (assert) {
  var address = schema.addresses.new({ user: link });

  assert.equal(address.userId, 1);
  assert.deepEqual(address.user, link);
  assert.deepEqual(address.attrs, { userId: '1' });
});

(0, _qunit.test)('the child accepts a new parent model', function (assert) {
  var zelda = schema.users.new({ name: 'Zelda' });
  var address = schema.addresses.new({ user: zelda });

  assert.equal(address.userId, null);
  assert.deepEqual(address.user, zelda);
  assert.deepEqual(address.attrs, { userId: null });
});

(0, _qunit.test)('the child accepts a null parent model', function (assert) {
  var address = schema.addresses.new({ user: null });

  assert.equal(address.userId, null);
  assert.deepEqual(address.user, null);
  assert.deepEqual(address.attrs, { userId: null });
});

(0, _qunit.test)('the child accepts a parent model and id', function (assert) {
  var address = schema.addresses.new({ user: link, userId: 1 });

  assert.equal(address.userId, '1');
  assert.deepEqual(address.user, link);
  assert.deepEqual(address.attrs, { userId: 1 });
});

(0, _qunit.test)('the child accepts no reference to a parent id or model as empty obj', function (assert) {
  var address = schema.addresses.new({});

  assert.equal(address.userId, null);
  assert.deepEqual(address.user, null);
  assert.deepEqual(address.attrs, { userId: null });
});

(0, _qunit.test)('the child accepts no reference to a parent id or model', function (assert) {
  var address = schema.addresses.new();

  assert.equal(address.userId, null);
  assert.deepEqual(address.user, null);
  assert.deepEqual(address.attrs, { userId: null });
});