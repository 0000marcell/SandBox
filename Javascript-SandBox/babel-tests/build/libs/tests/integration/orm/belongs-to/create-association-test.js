'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _belongsToHelper = require('./belongs-to-helper');

var _belongsToHelper2 = _interopRequireDefault(_belongsToHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | ORM | belongsTo #createAssociation', {
  beforeEach: function beforeEach() {
    this.helper = new _belongsToHelper2.default();
  }
});

/*
  createAssociation behavior works regardless of the state of the child
*/

['savedChildNoParent', 'savedChildNewParent', 'savedChildSavedParent', 'newChildNoParent', 'newChildNewParent', 'newChildSavedParent'].forEach(function (state) {

  (0, _qunit.test)('a ' + state + ' can create an associated parent', function (assert) {
    var _helper$state = this.helper[state]();

    var _helper$state2 = _slicedToArray(_helper$state, 1);

    var address = _helper$state2[0];


    var ganon = address.createUser({ name: 'Ganon' });

    assert.ok(ganon.id, 'the parent was persisted');
    assert.deepEqual(address.user, ganon);
    assert.equal(address.userId, ganon.id);
  });
});