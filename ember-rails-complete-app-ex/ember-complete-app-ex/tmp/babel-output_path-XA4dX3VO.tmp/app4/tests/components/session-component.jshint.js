define('app4/tests/components/session-component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/session-component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/session-component.js should pass jshint.');
  });
});