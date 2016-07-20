'use strict';

var _qunit = require('qunit');

var _moduleForAcceptance = require('../helpers/module-for-acceptance');

var _moduleForAcceptance2 = _interopRequireDefault(_moduleForAcceptance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pets = void 0;

(0, _moduleForAcceptance2.default)('Acceptance | Pets', {
  beforeEach: function beforeEach() {
    pets = server.createList('pet', 3);
  }
});

(0, _qunit.test)('I can view the pets', function (assert) {
  visit('/pets');

  andThen(function () {
    assert.equal(currentRouteName(), 'pets');
    assert.equal(find('li').length, 3);
    assert.equal(find('li:first .name').text().trim(), pets[0].name);
  });
});

(0, _qunit.test)('I can create a new pet', function (assert) {
  visit('/pets');

  fillIn('input', 'Brownie');
  click('button:contains(create)');

  andThen(function () {
    assert.equal(currentRouteName(), 'pets');
    assert.equal(find('li').length, 4);
    assert.equal(find('li:last .name').text(), 'Brownie');
  });
});