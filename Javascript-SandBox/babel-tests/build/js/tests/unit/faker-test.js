'use strict';

var _faker = require('ember-cli-mirage/faker');

var _faker2 = _interopRequireDefault(_faker);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Unit | Faker');

(0, _qunit.test)('#cycle - returns a function', function (assert) {
  var callback = _faker2.default.list.cycle('first', 'second');
  assert.ok(typeof callback === 'function', 'result is a function');
});

(0, _qunit.test)('#cycle - cycles the passed data', function (assert) {
  var callback = _faker2.default.list.cycle('first', 'second', 'third');

  assert.equal(callback(0), 'first', 'return the first result for sequence 0');
  assert.equal(callback(1), 'second', 'return the first result for sequence 1');
  assert.equal(callback(2), 'third', 'return the first result for sequence 2');
  assert.equal(callback(3), 'first', 'return the first result for sequence 3');
});

(0, _qunit.test)('#random - returns random element from a list', function (assert) {
  var callback = _faker2.default.list.random('first', 'second', 'third');

  assert.notEqual(['first', 'second', 'third'].indexOf(callback()), -1, 'returns random value');
});

(0, _qunit.test)('#range - creates a random number in a range', function (assert) {
  var min = 0;
  var max = 10;

  var callback = _faker2.default.random.number.range(min, max);
  assert.equal(callback() >= min, true, 'result is higher or equal than low value');
  assert.equal(callback() <= max, true, 'result is lower or equal than high value');
});