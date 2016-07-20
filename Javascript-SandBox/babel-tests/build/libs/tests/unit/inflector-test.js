'use strict';

var _inflector = require('ember-cli-mirage/utils/inflector');

var _qunit = require('qunit');

(0, _qunit.module)('Unit | Inflector');

(0, _qunit.test)('can singularize', function (assert) {
  assert.equal((0, _inflector.singularize)('tests'), 'test');
  assert.equal((0, _inflector.singularize)('watches'), 'watch');
  assert.equal((0, _inflector.singularize)('sheep'), 'sheep');
});

(0, _qunit.test)('can pluralize', function (assert) {
  assert.equal((0, _inflector.pluralize)('test'), 'tests');
  assert.equal((0, _inflector.pluralize)('watch'), 'watches');
  assert.equal((0, _inflector.pluralize)('sheep'), 'sheep');
});