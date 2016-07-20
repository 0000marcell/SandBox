QUnit.module('JSHint | components/crud-comp.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/crud-comp.js should pass jshint.\ncomponents/crud-comp.js: line 18, col 24, Expected \'!==\' and instead saw \'!=\'.\ncomponents/crud-comp.js: line 19, col 17, Expected \'{\' and instead saw \'this\'.\ncomponents/crud-comp.js: line 31, col 32, \'model\' is defined but never used.\n\n3 errors');
});
