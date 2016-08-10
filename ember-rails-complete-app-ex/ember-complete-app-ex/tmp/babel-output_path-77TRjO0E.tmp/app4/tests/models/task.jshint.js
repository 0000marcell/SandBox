define('app4/tests/models/task.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/task.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/task.js should pass jshint.');
  });
});