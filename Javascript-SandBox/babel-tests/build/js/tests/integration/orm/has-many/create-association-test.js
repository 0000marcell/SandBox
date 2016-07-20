'use strict';

var _hasManyHelper = require('./has-many-helper');

var _hasManyHelper2 = _interopRequireDefault(_hasManyHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | ORM | hasMany #createAssociation');

_hasManyHelper2.default.forEachScenario(function (scenario) {
  if (/^savedParent/.test(scenario.state)) {
    (0, _qunit.test)(scenario.title + ' can create an associated child', function (assert) {
      var _scenario$go = scenario.go();

      var user = _scenario$go.parent;
      var children = _scenario$go.children;
      var accessor = _scenario$go.accessor;
      var idsAccessor = _scenario$go.idsAccessor;
      var createAccessor = _scenario$go.createAccessor;
      var otherIdAccessor = _scenario$go.otherIdAccessor;


      var startingCount = children.length;

      var springfield = user[createAccessor]({ name: '1 Springfield ave' });

      assert.ok(springfield.id, 'the child was persisted');
      assert.equal(springfield[otherIdAccessor], 1, 'the fk is set');
      assert.equal(user[accessor].models.length, startingCount + 1, 'the collection length is correct');
      assert.deepEqual(user[accessor].filter(function (a) {
        return a.id === springfield.id;
      }).models[0], springfield, 'the homeAddress was added to user.homeAddresses');
      assert.ok(user[idsAccessor].indexOf(springfield.id) > -1, 'the id was added to the fks array');
    });

    (0, _qunit.test)(scenario.title + ' can create an associated child without passing attrs (regression)', function (assert) {
      var _scenario$go2 = scenario.go();

      var user = _scenario$go2.parent;
      var accessor = _scenario$go2.accessor;
      var createAccessor = _scenario$go2.createAccessor;


      var springfield = user[createAccessor]();

      assert.deepEqual(user[accessor].filter(function (a) {
        return a.id === springfield.id;
      }).models[0], springfield, 'the homeAddress was added to user.' + accessor);
    });
  }

  if (/^newParent/.test(scenario.state)) {
    (0, _qunit.test)(scenario.title + ' cannot create an associated child', function (assert) {
      var _scenario$go3 = scenario.go();

      var parent = _scenario$go3.parent;
      var createAccessor = _scenario$go3.createAccessor;


      assert.throws(function () {
        parent[createAccessor]({ name: '1 Springfield ave' });
      }, /unless the parent is saved/);
    });
  }
});