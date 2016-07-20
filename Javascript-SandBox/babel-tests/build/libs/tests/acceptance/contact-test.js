'use strict';

var _qunit = require('qunit');

var _moduleForAcceptance = require('../helpers/module-for-acceptance');

var _moduleForAcceptance2 = _interopRequireDefault(_moduleForAcceptance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contact = void 0;

(0, _moduleForAcceptance2.default)('Acceptance | Contact', {
  beforeEach: function beforeEach() {
    contact = server.create('contact');
  }
});

(0, _qunit.test)('I can view a contact', function (assert) {
  visit('/1');

  andThen(function () {
    assert.equal(currentRouteName(), 'contact');
    assert.equal(find('p:first').text(), 'The contact is ' + contact.name);
  });
});

(0, _qunit.test)('I can delete a contact', function (assert) {
  visit('/1');
  click('button:contains(Delete)');

  andThen(function () {
    assert.equal(currentRouteName(), 'contacts');
    assert.equal(find('p').length, 0);
  });
});