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

(0, _qunit.module)('Integration | ORM | collection', {
  beforeEach: function beforeEach() {
    this.User = _model2.default.extend();
    this.db = new _db2.default({ users: [{ id: 1, name: 'Link', good: true }, { id: 2, name: 'Zelda', good: true }, { id: 3, name: 'Ganon', good: false }] });

    this.schema = new _schema2.default(this.db, {
      user: this.User
    });
  }
}); // jscs:disable disallowVar


(0, _qunit.test)('a collection can save its models', function (assert) {
  var collection = this.schema.users.all();
  collection.models[0].name = 'Sam';
  collection.save();

  assert.deepEqual(this.db.users[0], { id: '1', name: 'Sam', good: true });
});

(0, _qunit.test)('a collection can reload its models', function (assert) {
  var collection = this.schema.users.all();
  assert.equal(collection.models[0].name, 'Link');

  collection.models[0].name = 'Sam';
  assert.equal(collection.models[0].name, 'Sam');

  collection.reload();
  assert.equal(collection.models[0].name, 'Link');
});

(0, _qunit.test)('a collection can filter its models', function (assert) {
  var collection = this.schema.users.all();
  assert.equal(collection.models.length, 3);

  var newCollection = collection.filter(function (author) {
    return author.good;
  });

  assert.ok(newCollection instanceof _collection2.default);
  assert.equal(newCollection.modelName, 'user', 'the filtered collection has the right type');
  assert.equal(newCollection.models.length, 2);
});

(0, _qunit.test)('a collection can merge with another collection', function (assert) {
  var goodGuys = this.schema.users.where(function (user) {
    return user.good;
  });
  var badGuys = this.schema.users.where(function (user) {
    return !user.good;
  });

  assert.equal(goodGuys.models.length, 2);
  assert.equal(badGuys.models.length, 1);

  goodGuys.mergeCollection(badGuys);

  assert.equal(goodGuys.models.length, 3);
});