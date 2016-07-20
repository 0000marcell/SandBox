'use strict';

var _dbCollection = require('ember-cli-mirage/db-collection');

var _qunit = require('qunit');

(0, _qunit.module)('Unit | DB | IdentityManager');

(0, _qunit.test)('it can be instantiated', function (assert) {
  var manager = new _dbCollection.IdentityManager();
  assert.ok(manager);
});

(0, _qunit.test)('fetch returns the latest number', function (assert) {
  var manager = new _dbCollection.IdentityManager();

  assert.equal(manager.fetch(), 1);
  assert.equal(manager.fetch(), 2);
  assert.equal(manager.fetch(), 3);
});

(0, _qunit.test)('get returns the upcoming id used for fetch', function (assert) {
  var manager = new _dbCollection.IdentityManager();

  assert.equal(manager.fetch(), 1);
  assert.equal(manager.get(), 2);
  assert.equal(manager.fetch(), 2);
});

(0, _qunit.test)('set indicates an id is being used', function (assert) {
  var manager = new _dbCollection.IdentityManager();
  manager.set('abc');

  assert.throws(function () {
    manager.set('abc');
  }, /already been used/);
});

(0, _qunit.test)('a numerical value passed into set affects future ids used by fetch', function (assert) {
  var manager = new _dbCollection.IdentityManager();
  manager.set(5);

  assert.equal(manager.fetch(), 6);
  assert.equal(manager.fetch(), 7);
});

(0, _qunit.test)('multiple numerical values passed into set affects future ids used by fetch', function (assert) {
  var manager = new _dbCollection.IdentityManager();
  manager.set(5);
  manager.set(6);

  assert.equal(manager.fetch(), 7);
  assert.equal(manager.fetch(), 8);
});

(0, _qunit.test)('an int as a string passed into set affects future ids used by fetch', function (assert) {
  var manager = new _dbCollection.IdentityManager();
  manager.set('5');

  assert.equal(manager.fetch(), 6);
  assert.equal(manager.fetch(), 7);
});

(0, _qunit.test)('multiple ints as a string passed into set affects future ids used by fetch', function (assert) {
  var manager = new _dbCollection.IdentityManager();
  manager.set('5');
  manager.set('6');

  assert.equal(manager.fetch(), 7);
  assert.equal(manager.fetch(), 8);
});

(0, _qunit.test)('a string value that doesn\'t parse as an int passed into set doesn\'t affect future ids used by fetch', function (assert) {
  var manager = new _dbCollection.IdentityManager();
  manager.set('123-abc');

  assert.equal(manager.fetch(), 1);
  assert.equal(manager.fetch(), 2);
});

(0, _qunit.test)('reset clears the managers memory', function (assert) {
  var manager = new _dbCollection.IdentityManager();
  manager.set('abc');
  manager.reset();
  manager.set('abc');

  assert.ok(true);
});