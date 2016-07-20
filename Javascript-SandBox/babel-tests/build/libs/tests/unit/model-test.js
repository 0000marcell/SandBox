'use strict';

var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Unit | Model');

(0, _qunit.test)('it can be instantiated', function (assert) {
  var model = new _model2.default({}, 'user');
  assert.ok(model);
});

(0, _qunit.test)('it cannot be instantiated without a schema', function (assert) {
  assert.throws(function () {
    new _model2.default();
  }, /requires a schema/);
});

(0, _qunit.test)('it cannot be instantiated without a modelName', function (assert) {
  assert.throws(function () {
    new _model2.default({});
  }, /requires a modelName/);
});