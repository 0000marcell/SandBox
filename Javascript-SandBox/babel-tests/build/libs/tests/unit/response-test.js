'use strict';

var _response = require('ember-cli-mirage/response');

var _response2 = _interopRequireDefault(_response);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Unit | Response');

(0, _qunit.test)('it can be instantiated and return a rack response', function (assert) {
  var response = new _response2.default(404, {}, {});

  assert.ok(response);
  assert.ok(response.toRackResponse());
});

(0, _qunit.test)('it can be instantiated with just a response code', function (assert) {
  var response = new _response2.default(404);

  assert.ok(response);
  assert.ok(response.toRackResponse());
});