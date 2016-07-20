'use strict';

var _hasManyHelper = require('./has-many-helper');

var _hasManyHelper2 = _interopRequireDefault(_hasManyHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | ORM | hasMany #newAssociation');

_hasManyHelper2.default.forEachScenario(function (scenario) {

  (0, _qunit.test)(scenario.title + ' can build a new associated parent', function (assert) {
    var _scenario$go = scenario.go();

    var user = _scenario$go.parent;
    var homeAddresses = _scenario$go.children;
    var newAccessor = _scenario$go.newAccessor;
    var accessor = _scenario$go.accessor;
    var otherIdAccessor = _scenario$go.otherIdAccessor;


    var startingCount = homeAddresses.length;

    var springfield = user[newAccessor]({ name: '1 Springfield ave' });

    assert.ok(!springfield.id, 'the child was not persisted');
    assert.deepEqual(user[accessor].models[startingCount], springfield, 'the child is appended to the parent\'s collection');

    if (!user.isNew()) {
      assert.equal(springfield[otherIdAccessor], user.id, 'the new address\'s fk reference the saved parent');
    }

    user.save();

    assert.ok(springfield.id, 'saving the parent persists the child');
    assert.equal(springfield[otherIdAccessor], user.id, 'the childs fk was updated');
    assert.equal(springfield.name, '1 Springfield ave', 'the childs attrs were saved');
  });

  (0, _qunit.test)(scenario.title + ' can build a new associated parent without passing in attrs (regression)', function (assert) {
    var _scenario$go2 = scenario.go();

    var user = _scenario$go2.parent;
    var homeAddresses = _scenario$go2.children;
    var newAccessor = _scenario$go2.newAccessor;
    var accessor = _scenario$go2.accessor;

    var startingCount = homeAddresses.length;

    var springfield = user[newAccessor]();

    assert.deepEqual(user[accessor].models[startingCount], springfield, 'the child is appended to the parent\'s collection');
  });
});