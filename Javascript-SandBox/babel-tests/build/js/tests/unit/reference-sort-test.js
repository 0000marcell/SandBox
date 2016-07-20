'use strict';

var _referenceSort = require('ember-cli-mirage/utils/reference-sort');

var _referenceSort2 = _interopRequireDefault(_referenceSort);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('mirage:reference-sort');

(0, _qunit.test)('it sorts property references', function (assert) {
  var sorted = (0, _referenceSort2.default)([['propA'], ['propB', 'propC'], ['propC', 'propA'], ['propD']]);

  assert.deepEqual(sorted, ['propD', 'propA', 'propC', 'propB']);
});

(0, _qunit.test)('it throws on circular dependency', function (assert) {
  assert.throws(function () {
    (0, _referenceSort2.default)([['propA', 'propB'], ['propB', 'propA']]);
  }, function (e) {
    return e.toString() === 'Error: Cyclic dependency in properties ["propB","propA"]';
  });
});

(0, _qunit.test)('it works with no references', function (assert) {
  var sorted = (0, _referenceSort2.default)([['propA'], ['propB'], ['propC'], ['propD']]);

  assert.deepEqual(sorted, ['propD', 'propC', 'propB', 'propA']);
});