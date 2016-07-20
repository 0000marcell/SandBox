'use strict';

var _hasManyHelper = require('./has-many-helper');

var _hasManyHelper2 = _interopRequireDefault(_hasManyHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | ORM | hasMany #accessor');

/*
  #association behavior works regardless of the state of the parent
*/

_hasManyHelper2.default.forEachScenario(function (scenario) {
  (0, _qunit.test)('the references of a ' + scenario.title + ' are correct', function (assert) {
    var _scenario$go = scenario.go();

    var parent = _scenario$go.parent;
    var children = _scenario$go.children;
    var accessor = _scenario$go.accessor;
    var idsAccessor = _scenario$go.idsAccessor;

    assert.equal(parent[accessor].models.length, children.length, 'parent has correct number of children');
    assert.equal(parent[idsAccessor].length, children.length, 'parent has correct number of child ids');

    children.forEach(function (child, i) {
      assert.deepEqual(parent[accessor].models[i], children[i], 'each child is in parent.children array');

      if (!child.isNew()) {
        assert.ok(parent[idsAccessor].indexOf(child.id) > -1, 'each saved child id is in parent.childrenIds array');
      }
    });
  });
});