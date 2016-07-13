define('app4/tests/authenticators/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | authenticators/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/application.js should pass jshint.');
  });
});