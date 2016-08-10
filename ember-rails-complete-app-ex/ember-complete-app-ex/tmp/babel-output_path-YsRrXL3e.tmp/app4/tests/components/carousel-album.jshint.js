define('app4/tests/components/carousel-album.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/carousel-album.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/carousel-album.js should pass jshint.\ncomponents/carousel-album.js: line 30, col 37, Missing semicolon.\ncomponents/carousel-album.js: line 58, col 70, Expected an assignment or function call and instead saw an expression.\ncomponents/carousel-album.js: line 38, col 32, \'$\' is not defined.\n\n3 errors');
  });
});