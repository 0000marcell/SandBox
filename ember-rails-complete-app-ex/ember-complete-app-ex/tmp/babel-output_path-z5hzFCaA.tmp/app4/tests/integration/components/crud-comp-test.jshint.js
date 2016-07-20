define('app4/tests/integration/components/crud-comp-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/crud-comp-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/crud-comp-test.js should pass jshint.');
  });
});