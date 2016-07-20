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


(0, _qunit.module)('Integration | ORM | update', {
  beforeEach: function beforeEach() {
    this.db = new _db2.default({
      users: [{ id: 1, name: 'Link', location: 'Hyrule', evil: false }, { id: 2, name: 'Zelda', location: 'Hyrule', evil: false }]
    });

    this.schema = new _schema2.default(this.db, {
      user: _model2.default
    });
  }
});

(0, _qunit.test)('a collection can update its models with a key and value', function (assert) {
  var collection = this.schema.users.all();
  collection.update('evil', true);

  assert.deepEqual(this.db.users, [{ id: '1', name: 'Link', location: 'Hyrule', evil: true }, { id: '2', name: 'Zelda', location: 'Hyrule', evil: true }]);
  assert.deepEqual(collection.models[0].attrs, { id: '1', name: 'Link', location: 'Hyrule', evil: true });
});

(0, _qunit.test)('it can update its models with a hash of attrs', function (assert) {
  var collection = this.schema.users.all();
  collection.update({ location: 'The water temple', evil: true });

  assert.deepEqual(this.db.users, [{ id: '1', name: 'Link', location: 'The water temple', evil: true }, { id: '2', name: 'Zelda', location: 'The water temple', evil: true }]);
  assert.deepEqual(collection.models[0].attrs, { id: '1', name: 'Link', location: 'The water temple', evil: true });
  assert.deepEqual(collection.models[1].attrs, { id: '2', name: 'Zelda', location: 'The water temple', evil: true });
});

(0, _qunit.test)('it can set an attribute and then save the model', function (assert) {
  var user = this.schema.users.find(1);

  user.name = 'Young link';

  assert.deepEqual(user.attrs, { id: '1', name: 'Young link', location: 'Hyrule', evil: false });
  assert.deepEqual(this.db.users.find(1), { id: '1', name: 'Link', location: 'Hyrule', evil: false });

  user.save();

  assert.deepEqual(user.attrs, { id: '1', name: 'Young link', location: 'Hyrule', evil: false });
  assert.deepEqual(this.db.users.find(1), { id: '1', name: 'Young link', location: 'Hyrule', evil: false });
});

(0, _qunit.test)('it can update and immediately persist a single attribute', function (assert) {
  var link = this.schema.users.find(1);
  link.update('evil', true);

  assert.deepEqual(link.attrs, { id: '1', name: 'Link', location: 'Hyrule', evil: true });
  assert.deepEqual(this.db.users.find(1), { id: '1', name: 'Link', location: 'Hyrule', evil: true });
});

(0, _qunit.test)('it can update a hash of attrs immediately', function (assert) {
  var link = this.schema.users.find(1);
  link.update({ name: 'Evil link', evil: true });

  assert.deepEqual(link.attrs, { id: '1', name: 'Evil link', location: 'Hyrule', evil: true });
  assert.deepEqual(this.db.users.find(1), { id: '1', name: 'Evil link', location: 'Hyrule', evil: true });
});