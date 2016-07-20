'use strict';

var _qunit = require('qunit');

var _moduleForAcceptance = require('../helpers/module-for-acceptance');

var _moduleForAcceptance2 = _interopRequireDefault(_moduleForAcceptance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _moduleForAcceptance2.default)('Acceptance | Edit');

(0, _qunit.test)('I can edit a contact', function (assert) {
  server.create('contact');

  visit('/1');
  click('button:contains(Edit)');
  fillIn('input', 'Shiek');
  click('button:contains(Save)');

  andThen(function () {
    assert.equal(currentRouteName(), 'contact');
    assert.equal(find('p:first').text(), 'The contact is Shiek');
  });
});