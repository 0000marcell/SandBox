'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _belongsToHelper = require('./belongs-to-helper');

var _belongsToHelper2 = _interopRequireDefault(_belongsToHelper);

var _emberCliMirage = require('ember-cli-mirage');

var _emberCliMirage2 = _interopRequireDefault(_emberCliMirage);

var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _schema = require('ember-cli-mirage/orm/schema');

var _schema2 = _interopRequireDefault(_schema);

var _db = require('ember-cli-mirage/db');

var _db2 = _interopRequireDefault(_db);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | ORM | belongsTo #accessor', {
  beforeEach: function beforeEach() {
    this.helper = new _belongsToHelper2.default();
  }
});

/*
  #association behavior works regardless of the state of the child
*/

['savedChildNoParent', 'savedChildNewParent', 'savedChildSavedParent', 'newChildNoParent', 'newChildNewParent', 'newChildSavedParent'].forEach(function (state) {

  (0, _qunit.test)('the references of a ' + state + ' are correct', function (assert) {
    var _helper$state = this.helper[state]();

    var _helper$state2 = _slicedToArray(_helper$state, 2);

    var address = _helper$state2[0];
    var user = _helper$state2[1];


    assert.deepEqual(address.user, user ? user : null, 'the model reference is correct');
    assert.equal(address.userId, user ? user.id : null, 'the modelId reference is correct');
  });
});

(0, _qunit.test)('belongsTo accessors works when foreign key is present but falsy', function (assert) {
  var db = new _db2.default({
    users: [],
    addresses: []
  });

  var schema = new _schema2.default(db, {
    user: _model2.default.extend(),
    address: _model2.default.extend({
      user: _emberCliMirage2.default.belongsTo()
    })
  });

  db.users.insert({ id: 0, name: 'some user' });
  var insertedAddress = db.addresses.insert({ name: 'foo', userId: 0 });
  var relatedUser = schema.addresses.find(insertedAddress.id).user;
  assert.equal('some user', relatedUser ? relatedUser.name : undefined);
});