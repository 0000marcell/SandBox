'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startApp;

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

var _environment = require('../../config/environment');

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startApp(attrs) {
  var application = void 0;

  var attributes = _ember2.default.merge({}, _environment2.default.APP);
  attributes = _ember2.default.merge(attributes, attrs); // use defaults, but you can override;

  _ember2.default.run(function () {
    application = _app2.default.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}