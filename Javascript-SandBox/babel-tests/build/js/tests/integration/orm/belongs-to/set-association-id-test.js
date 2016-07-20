'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _belongsToHelper = require('./belongs-to-helper');

var _belongsToHelper2 = _interopRequireDefault(_belongsToHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | ORM | belongsTo #setAssociationId', {
  beforeEach: function beforeEach() {
    this.helper = new _belongsToHelper2.default();
  }
});

['savedChildNoParent', 'savedChildNewParent', 'savedChildSavedParent', 'newChildNoParent', 'newChildNewParent', 'newChildSavedParent'].forEach(function (state) {

  (0, _qunit.test)('a ' + state + ' can update its association to a saved parent via parentId', function (assert) {
    var _helper$state = this.helper[state]();

    var _helper$state2 = _slicedToArray(_helper$state, 1);

    var address = _helper$state2[0];

    var savedUser = this.helper.savedParent();

    address.userId = savedUser.id;

    assert.equal(address.userId, savedUser.id);
    assert.deepEqual(address.user, savedUser);
  });
});

['savedChildSavedParent', 'newChildSavedParent'].forEach(function (state) {

  (0, _qunit.test)('a ' + state + ' can clear its association via a null parentId', function (assert) {
    var _helper$state3 = this.helper[state]();

    var _helper$state4 = _slicedToArray(_helper$state3, 1);

    var address = _helper$state4[0];


    address.userId = null;

    assert.equal(address.userId, null);
    assert.deepEqual(address.user, null);
  });
});