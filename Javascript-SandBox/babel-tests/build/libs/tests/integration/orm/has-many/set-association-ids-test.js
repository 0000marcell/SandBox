'use strict';

var _hasManyHelper = require('./has-many-helper');

var _hasManyHelper2 = _interopRequireDefault(_hasManyHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | ORM | hasMany #setAssociationIds');

_hasManyHelper2.default.forEachScenario(function (scenario) {
  (0, _qunit.test)(scenario.title + ' can update its associationIds to a list of saved child ids', function (assert) {
    var _scenario$go = scenario.go();

    var user = _scenario$go.parent;
    var homeAddresses = _scenario$go.children;
    var helper = _scenario$go.helper;
    var idsAccessor = _scenario$go.idsAccessor;
    var accessor = _scenario$go.accessor;
    var otherIdAccessor = _scenario$go.otherIdAccessor;


    var savedHomeAddress = helper.savedChild();

    user[idsAccessor] = [savedHomeAddress.id];
    savedHomeAddress.reload();

    assert.deepEqual(user[accessor].models[0], savedHomeAddress);
    homeAddresses.forEach(function (homeAddress) {
      if (homeAddress.isSaved()) {
        homeAddress.reload();
        assert.equal(homeAddress[otherIdAccessor], null, 'old saved children have their fks cleared');
      }
    });
  });

  if (/^savedParent/.test(scenario.state)) {
    (0, _qunit.test)('updating associationIds to a list of saved children ids updates the child\'s fk, with ' + scenario.title, function (assert) {
      var _scenario$go2 = scenario.go();

      var user = _scenario$go2.parent;
      var helper = _scenario$go2.helper;
      var idsAccessor = _scenario$go2.idsAccessor;
      var otherIdAccessor = _scenario$go2.otherIdAccessor;

      var savedHomeAddress = helper.savedChild();

      user[idsAccessor] = [savedHomeAddress.id];
      savedHomeAddress.reload();

      assert.equal(savedHomeAddress[otherIdAccessor], user.id, 'the child\'s fk was set');
    });
  }

  (0, _qunit.test)(scenario.title + ' can update its associationIds to an empty list', function (assert) {
    var _scenario$go3 = scenario.go();

    var user = _scenario$go3.parent;
    var homeAddresses = _scenario$go3.children;
    var idsAccessor = _scenario$go3.idsAccessor;
    var accessor = _scenario$go3.accessor;
    var otherIdAccessor = _scenario$go3.otherIdAccessor;


    user[idsAccessor] = [];

    assert.equal(user[accessor].models.length, 0);

    homeAddresses.forEach(function (homeAddress) {
      if (homeAddress.isSaved()) {
        homeAddress.reload();
        assert.equal(homeAddress[otherIdAccessor], null, 'old saved children have their fks cleared');
      }
    });
  });
});