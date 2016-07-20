'use strict';

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

var _qunit = require('qunit');

var _startApp = require('../helpers/start-app');

var _startApp2 = _interopRequireDefault(_startApp);

var _emberCliMirage = require('dummy/initializers/ember-cli-mirage');

var _environment = require('dummy/config/environment');

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = void 0;

(0, _qunit.module)('Acceptance: Manually starting Mirage', {
  beforeEach: function beforeEach() {
    _environment2.default['ember-cli-mirage'] = { enabled: false };
    App = (0, _startApp2.default)();
  },
  afterEach: function afterEach() {
    server.shutdown();
    _ember2.default.run(App, 'destroy');
    _environment2.default['ember-cli-mirage'].enabled = undefined;
  }
});

(0, _qunit.test)('The server can be started manually when configured with { enabled: false }', function (assert) {
  assert.equal(window.server, undefined, 'There is no server at first');
  (0, _emberCliMirage.startMirage)();
  assert.ok(window.server, 'There is a server after starting');

  var contact = server.create('contact');
  visit('/1');

  andThen(function () {
    assert.equal(currentRouteName(), 'contact');
    assert.equal(find('p:first').text(), 'The contact is ' + contact.name, 'The manually started server works');
  });
});