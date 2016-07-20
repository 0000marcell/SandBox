'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  (0, _qunit.module)(name, {
    beforeEach: function beforeEach() {
      this.application = (0, _startApp2.default)();

      if (options.beforeEach) {
        options.beforeEach.apply(this, arguments);
      }
    },
    afterEach: function afterEach() {
      (0, _destroyApp2.default)(this.application);

      if (options.afterEach) {
        options.afterEach.apply(this, arguments);
      }
    }
  });
};

var _qunit = require('qunit');

var _startApp = require('../helpers/start-app');

var _startApp2 = _interopRequireDefault(_startApp);

var _destroyApp = require('../helpers/destroy-app');

var _destroyApp2 = _interopRequireDefault(_destroyApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }