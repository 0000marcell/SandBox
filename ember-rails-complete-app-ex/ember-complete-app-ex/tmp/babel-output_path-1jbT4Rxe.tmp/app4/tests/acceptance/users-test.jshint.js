define('app4/tests/acceptance/users-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/users-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/users-test.js should pass jshint.');
  });
});