define('app4/tests/acceptance/users/user-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/users/user-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/users/user-test.js should pass jshint.');
  });
});