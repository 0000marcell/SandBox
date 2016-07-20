'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _emberCliMirage = require('ember-cli-mirage');

var _emberCliMirage2 = _interopRequireDefault(_emberCliMirage);

var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _schema = require('ember-cli-mirage/orm/schema');

var _schema2 = _interopRequireDefault(_schema);

var _db = require('ember-cli-mirage/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  A model with a belongsTo association can be in six states
  with respect to its association. This helper class
  returns a child (and its association) in these various states.

  The return value is an array of the form

    [child, parent]

  where the parent may be undefined.
*/

var BelongsToHelper = function () {
  function BelongsToHelper() {
    _classCallCheck(this, BelongsToHelper);

    this.db = new _db2.default();

    this.schema = new _schema2.default(this.db, {
      user: _model2.default.extend(),
      address: _model2.default.extend({
        user: _emberCliMirage2.default.belongsTo()
      })
    });
  }

  _createClass(BelongsToHelper, [{
    key: 'savedChildNoParent',
    value: function savedChildNoParent() {
      var insertedAddress = this.db.addresses.insert({ name: 'foo' });

      return [this.schema.addresses.find(insertedAddress.id), undefined];
    }
  }, {
    key: 'savedChildNewParent',
    value: function savedChildNewParent() {
      var insertedAddress = this.db.addresses.insert({ name: 'foo' });
      var address = this.schema.addresses.find(insertedAddress.id);
      var user = this.schema.users.new({ name: 'Newbie' });

      address.user = user;

      return [address, user];
    }
  }, {
    key: 'savedChildSavedParent',
    value: function savedChildSavedParent() {
      var insertedUser = this.db.users.insert({ name: 'some user' });
      var insertedAddress = this.db.addresses.insert({ name: 'foo', userId: insertedUser.id });
      var address = this.schema.addresses.find(insertedAddress.id);
      var user = this.schema.users.find(insertedUser.id);

      return [address, user];
    }
  }, {
    key: 'newChildNoParent',
    value: function newChildNoParent() {
      return [this.schema.addresses.new({ name: 'New addr' }), undefined];
    }
  }, {
    key: 'newChildNewParent',
    value: function newChildNewParent() {
      var address = this.schema.addresses.new({ name: 'New addr' });
      var newUser = this.schema.users.new({ name: 'Newbie' });
      address.user = newUser;

      return [address, newUser];
    }
  }, {
    key: 'newChildSavedParent',
    value: function newChildSavedParent() {
      var insertedUser = this.db.users.insert({ name: 'some user' });
      var address = this.schema.addresses.new({ name: 'New addr' });
      var savedUser = this.schema.users.find(insertedUser.id);

      address.user = savedUser;

      return [address, savedUser];
    }

    // Just a saved unassociated parent. The id is high so as not to
    // interfere with any other parents

  }, {
    key: 'savedParent',
    value: function savedParent() {
      var insertedUser = this.db.users.insert({ name: 'bar' });

      return this.schema.users.find(insertedUser.id);
    }
  }, {
    key: 'newParent',
    value: function newParent() {
      return this.schema.users.new({ name: 'Newbie' });
    }
  }]);

  return BelongsToHelper;
}();

exports.default = BelongsToHelper;