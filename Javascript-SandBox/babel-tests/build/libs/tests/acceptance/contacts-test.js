'use strict';

var _qunit = require('qunit');

var _moduleForAcceptance = require('../helpers/module-for-acceptance');

var _moduleForAcceptance2 = _interopRequireDefault(_moduleForAcceptance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contacts = void 0;

(0, _moduleForAcceptance2.default)('Acceptance | Contacts', {
  beforeEach: function beforeEach() {
    contacts = server.createList('contact', 2);
  }
});

(0, _qunit.test)('I can view the contacts', function (assert) {
  visit('/');

  andThen(function () {
    assert.equal(currentRouteName(), 'contacts');
    assert.equal(find('p').length, 2);
    assert.equal(find('p:first').text(), contacts[0].name);
  });
});

(0, _qunit.test)('I can create a new contact', function (assert) {
  visit('/');
  fillIn('input', 'Ganon');
  click('button:contains(Create)');

  andThen(function () {
    assert.equal(currentRouteName(), 'contacts');
    assert.equal(find('p').length, 3);
    assert.equal(find('p:last').text(), 'Ganon');
  });
});

(0, _qunit.test)('If the server errors on /contacts, the first error message should show', function (assert) {
  server.get('/contacts', {
    errors: ['improper auth']
  }, 404);

  visit('/');

  andThen(function () {
    assert.equal(find('.error span').text(), 'improper auth');
  });
});