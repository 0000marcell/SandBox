'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = destroyApp;

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function destroyApp(application) {
  _ember2.default.run(function () {
    application.destroy();

    server.shutdown();
  });
}