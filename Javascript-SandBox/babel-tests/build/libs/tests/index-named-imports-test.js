'use strict';

var _qunit = require('qunit');

var _emberCliMirage = require('ember-cli-mirage');

(0, _qunit.test)('Factory is present in named exports from ember-cli-mirage', function (assert) {
  assert.ok(_emberCliMirage.Factory);
});

(0, _qunit.test)('Response is present in named exports from ember-cli-mirage', function (assert) {
  assert.ok(_emberCliMirage.Response);
});

(0, _qunit.test)('faker is present in named exports from ember-cli-mirage', function (assert) {
  assert.ok(_emberCliMirage.faker);
});

(0, _qunit.test)('Model is present in named exports from ember-cli-mirage', function (assert) {
  assert.ok(_emberCliMirage.Model);
});

(0, _qunit.test)('serializers are present in named exports from ember-cli-mirage', function (assert) {
  assert.ok(_emberCliMirage.ActiveModelSerializer);
  assert.ok(_emberCliMirage.JSONAPISerializer);
  assert.ok(_emberCliMirage.Serializer);
});

(0, _qunit.test)('relationship helpers are present in named exports from ember-cli-mirage', function (assert) {
  assert.ok(_emberCliMirage.hasMany);
  assert.ok(_emberCliMirage.belongsTo);
});