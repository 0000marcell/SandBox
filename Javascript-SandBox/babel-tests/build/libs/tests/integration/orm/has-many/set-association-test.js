'use strict';

var _hasManyHelper = require('./has-many-helper');

var _hasManyHelper2 = _interopRequireDefault(_hasManyHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | ORM | hasMany #setAssociation', {
  beforeEach: function beforeEach() {
    this.helper = new _hasManyHelper2.default();
  }
});

_hasManyHelper2.default.forEachScenario(function (scenario) {
  (0, _qunit.test)(scenario.title + ' can update its association to a list of saved children', function (assert) {
    var _scenario$go = scenario.go();

    var user = _scenario$go.parent;
    var homeAddresses = _scenario$go.children;
    var helper = _scenario$go.helper;
    var accessor = _scenario$go.accessor;
    var otherIdAccessor = _scenario$go.otherIdAccessor;

    var savedHomeAddress = helper.savedChild();

    user[accessor] = [savedHomeAddress];
    savedHomeAddress.reload();

    assert.deepEqual(user[accessor].models[0], savedHomeAddress);
    homeAddresses.forEach(function (address) {
      if (address.isSaved()) {
        address.reload();
        assert.equal(address[otherIdAccessor], null, 'old saved children have their fks cleared');
      }
    });
  });

  if (/^savedParent/.test(scenario.state)) {
    (0, _qunit.test)('updating an association to a list of saved children updates the child\'s fk when ' + scenario.title, function (assert) {
      var _scenario$go2 = scenario.go();

      var user = _scenario$go2.parent;
      var helper = _scenario$go2.helper;
      var accessor = _scenario$go2.accessor;
      var otherIdAccessor = _scenario$go2.otherIdAccessor;

      var savedHomeAddress = helper.savedChild();

      user[accessor] = [savedHomeAddress];
      savedHomeAddress.reload();

      assert.equal(savedHomeAddress[otherIdAccessor], user.id, 'the child\'s fk was set');
    });
  }

  (0, _qunit.test)(scenario.title + ' can update its association to a list of new children', function (assert) {
    var _scenario$go3 = scenario.go();

    var user = _scenario$go3.parent;
    var homeAddresses = _scenario$go3.children;
    var helper = _scenario$go3.helper;
    var accessor = _scenario$go3.accessor;
    var otherIdAccessor = _scenario$go3.otherIdAccessor;

    var address = helper.newChild();

    user[accessor] = [address];
    // The address is saved if the user is a saved user. In that case, we need to reload.
    if (user.isSaved()) {
      address.reload();
    }

    assert.deepEqual(user[accessor].models[0], address);
    homeAddresses.forEach(function (address) {
      if (address.isSaved()) {
        address.reload();
        assert.equal(address[otherIdAccessor], null, 'old saved children have their fks cleared');
      }
    });
  });

  if (/^savedParent/.test(scenario.state)) {

    (0, _qunit.test)('updating an association to a list of new children saves the children and updates their fks when ' + scenario.title, function (assert) {
      var _scenario$go4 = scenario.go();

      var user = _scenario$go4.parent;
      var helper = _scenario$go4.helper;
      var accessor = _scenario$go4.accessor;
      var otherIdAccessor = _scenario$go4.otherIdAccessor;

      var address = helper.newChild();

      user[accessor] = [address];
      address.reload();

      assert.ok(address.isSaved(), 'the new child was saved');
      assert.equal(address[otherIdAccessor], user.id, 'the child\'s fk was set');
    });
  }

  (0, _qunit.test)(scenario.title + ' can update its association to a list of mixed children', function (assert) {
    var _scenario$go5 = scenario.go();

    var user = _scenario$go5.parent;
    var homeAddresses = _scenario$go5.children;
    var helper = _scenario$go5.helper;
    var accessor = _scenario$go5.accessor;
    var otherIdAccessor = _scenario$go5.otherIdAccessor;

    var savedHomeAddress = helper.savedChild();
    var newAddress = helper.newChild();

    user[accessor] = [savedHomeAddress, newAddress];
    savedHomeAddress.reload();
    // The new address is saved if the user is a saved user. In that case, we need to reload.
    if (user.isSaved()) {
      newAddress.reload();
    }

    assert.deepEqual(user[accessor].models[0], savedHomeAddress);
    assert.deepEqual(user[accessor].models[1], newAddress);
    homeAddresses.forEach(function (address) {
      if (address.isSaved()) {
        address.reload();
        assert.equal(address[otherIdAccessor], null, 'old saved children have their fks cleared');
      }
    });
  });

  if (/^savedParent/.test(scenario.state)) {
    (0, _qunit.test)('updating an association to a list of mixed children saves the new children and updates all children\'s fks when ' + scenario.title, function (assert) {
      var _scenario$go6 = scenario.go();

      var user = _scenario$go6.parent;
      var helper = _scenario$go6.helper;
      var accessor = _scenario$go6.accessor;
      var otherIdAccessor = _scenario$go6.otherIdAccessor;

      var savedHomeAddress = helper.savedChild();
      var newHomeAddress = helper.newChild();

      user[accessor] = [savedHomeAddress, newHomeAddress];
      savedHomeAddress.reload();
      newHomeAddress.reload();

      assert.ok(newHomeAddress.isSaved(), 'the new child was saved');
      assert.equal(savedHomeAddress[otherIdAccessor], user.id, 'the saved child\'s fk was set');
      assert.equal(newHomeAddress[otherIdAccessor], user.id, 'the new child\'s fk was set');
    });
  }

  (0, _qunit.test)(scenario.title + ' can update its association to an empty list', function (assert) {
    var _scenario$go7 = scenario.go();

    var user = _scenario$go7.parent;
    var homeAddresses = _scenario$go7.children;
    var accessor = _scenario$go7.accessor;
    var otherIdAccessor = _scenario$go7.otherIdAccessor;


    user[accessor] = [];

    assert.equal(user[accessor].models.length, 0);
    homeAddresses.forEach(function (address) {
      if (address.isSaved()) {
        address.reload();
        assert.equal(address[otherIdAccessor], null, 'old saved children have their fks cleared');
      }
    });
  });
});