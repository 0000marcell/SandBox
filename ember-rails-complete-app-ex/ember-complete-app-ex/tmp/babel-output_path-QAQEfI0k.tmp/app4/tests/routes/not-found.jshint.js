define('app4/tests/routes/not-found.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/not-found.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/not-found.js should pass jshint.');
  });
});