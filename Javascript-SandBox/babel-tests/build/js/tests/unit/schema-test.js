'use strict';

var _schema = require('ember-cli-mirage/orm/schema');

var _schema2 = _interopRequireDefault(_schema);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Unit | Schema');

(0, _qunit.test)('it can be instantiated', function (assert) {
  var dbMock = {};
  var schema = new _schema2.default(dbMock);
  assert.ok(schema);
});

(0, _qunit.test)('it cannot be instantiated without a db', function (assert) {
  assert.throws(function () {
    new _schema2.default();
  }, /requires a db/);
});