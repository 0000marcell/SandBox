define('app4/tests/components/simple-chat.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/simple-chat.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/simple-chat.js should pass jshint.');
  });
});