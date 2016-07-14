define('app4/tests/models/todo.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/todo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/todo.js should pass jshint.');
  });
});