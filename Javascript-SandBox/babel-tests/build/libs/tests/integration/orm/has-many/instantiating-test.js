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

var schema, child1, child2; // jscs:disable disallowVar

(0, _qunit.module)('Integration | ORM | hasMany instantiating with params', {
  beforeEach: function beforeEach() {
    var db = new _db2.default({
      users: [],
      homeAddresses: [{ id: 1, name: '123 Hyrule Way' }, { id: 2, name: '12 Goron City' }]
    });
    schema = new _schema2.default(db);

    var User = _model2.default.extend({
      homeAddresses: _emberCliMirage2.default.hasMany()
    });
    var HomeAddress = _model2.default.extend();

    schema.registerModels({
      user: User,
      homeAddress: HomeAddress
    });

    child1 = schema.homeAddresses.find(1);
    child2 = schema.homeAddresses.find(2);
  }
});

(0, _qunit.test)('children have fks added to their attrs', function (assert) {
  var newChild = schema.homeAddresses.new();
  assert.deepEqual(newChild.attrs, { userId: null });
  assert.deepEqual(child1.attrs, { id: '1', name: '123 Hyrule Way', userId: null });
});

(0, _qunit.test)('the parent accepts an array of saved children ids', function (assert) {
  var user = schema.users.new({ homeAddressIds: [1, 2] });

  assert.equal(user.homeAddresses.models.length, 2);
  assert.deepEqual(user.homeAddresses.models[0], child1);
  assert.deepEqual(user.homeAddresses.models[1], child2);
  assert.deepEqual(user.homeAddressIds, ['1', '2']);
});

(0, _qunit.test)('the parent errors if one of the child ids doesnt exist', function (assert) {
  assert.throws(function () {
    schema.users.new({ homeAddressIds: [1, 9] });
  }, /Couldn't find/);
});

(0, _qunit.test)('the parent accepts an empty childIds array', function (assert) {
  var user = schema.users.new({ homeAddressIds: [] });

  assert.equal(user.homeAddresses.models.length, 0);
});

(0, _qunit.test)('the parent accepts an array of saved child models', function (assert) {
  var user = schema.users.new({ homeAddresses: [child1, child2] });

  assert.deepEqual(user.homeAddressIds, ['1', '2']);
  assert.equal(user.homeAddresses.models.length, 2);
  assert.deepEqual(user.homeAddresses.models[0], child1);
});

(0, _qunit.test)('the parent accepts an array of new child models', function (assert) {
  var newAddress1 = schema.homeAddresses.new();
  var newAddress2 = schema.homeAddresses.new();
  var user = schema.users.new({ homeAddresses: [newAddress1, newAddress2] });

  assert.deepEqual(user.homeAddressIds, [undefined, undefined]);
  assert.equal(user.homeAddresses.models.length, 2);
  assert.deepEqual(user.homeAddresses.models[0], newAddress1);
});

(0, _qunit.test)('the parent accepts a mixed array of new and saved child models', function (assert) {
  var newAddress1 = schema.homeAddresses.new();
  var user = schema.users.new({ homeAddresses: [child1, newAddress1] });

  assert.deepEqual(user.homeAddressIds, ['1', undefined]);
  assert.equal(user.homeAddresses.models.length, 2);
  assert.deepEqual(user.homeAddresses.models[0], child1);
  assert.deepEqual(user.homeAddresses.models[1], newAddress1);
});

(0, _qunit.test)('the parent accepts null child models', function (assert) {
  var user = schema.users.new({ addresses: [null] });

  assert.deepEqual(user.homeAddressIds, []);
  assert.equal(user.homeAddresses.models.length, 0);
});

(0, _qunit.test)('the parent accepts no reference to a child id or model as empty obj', function (assert) {
  var user = schema.users.new({});

  assert.deepEqual(user.homeAddressIds, []);
  assert.equal(user.homeAddresses.models.length, 0);
});

(0, _qunit.test)('the parent accepts no reference to a child id or model', function (assert) {
  var user = schema.users.new();

  assert.deepEqual(user.homeAddressIds, []);
  assert.equal(user.homeAddresses.models.length, 0);
});