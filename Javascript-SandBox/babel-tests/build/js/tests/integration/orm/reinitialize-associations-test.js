'use strict';

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

// Model classes are defined statically, just like in a typical app
var User = _model2.default.extend({
  addresses: _emberCliMirage2.default.hasMany()
}); // jscs:disable disallowVar

var Address = _model2.default.extend();

(0, _qunit.module)('Integration | ORM | reinitialize associations', {
  beforeEach: function beforeEach() {
    this.schema = new _schema2.default(new _db2.default(), {
      address: Address,
      user: User
    });

    this.schema.users.create({ id: 1, name: 'Link' });
    this.schema.addresses.create({ id: 1, country: 'Hyrule', userId: 1 });
  }
});

// By running two tests, we force the statically-defined classes to be
// registered twice.
(0, _qunit.test)('safely initializes associations', function (assert) {
  assert.equal(this.schema.users.find(1).addresses.models[0].country, 'Hyrule');
});
(0, _qunit.test)('safely initializes associations again', function (assert) {
  assert.equal(this.schema.users.find(1).addresses.models[0].country, 'Hyrule');
});