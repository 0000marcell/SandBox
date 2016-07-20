'use strict';

var _jsonApiSerializer = require('ember-cli-mirage/serializers/json-api-serializer');

var _jsonApiSerializer2 = _interopRequireDefault(_jsonApiSerializer);

var _schemaHelper = require('../../integration/serializers/schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _map2 = require('lodash/collection/map');

var _map3 = _interopRequireDefault(_map2);

var _includes2 = require('lodash/collection/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Unit | Serializers | JsonApiSerializer');

(0, _qunit.test)('_getRelationshipNames should prefer relationships from request', function (assert) {
  var serializer = new (_jsonApiSerializer2.default.extend({
    include: ['foo', 'bar']
  }))();

  var request = {
    queryParams: {
      include: 'baz,quux'
    }
  };
  var result = serializer._getRelationshipNames(request);

  assert.deepEqual(result, ['baz', 'quux']);
});

(0, _qunit.test)('_getRelationshipNames should not choke on missing request', function (assert) {
  var serializer = new (_jsonApiSerializer2.default.extend({
    include: ['foo', 'bar']
  }))();
  var result = serializer._getRelationshipNames();

  assert.deepEqual(result, ['foo', 'bar']);
});

(0, _qunit.test)('_getRelationshipNames should not choke on empty request', function (assert) {
  var serializer = new (_jsonApiSerializer2.default.extend({
    include: ['foo', 'bar']
  }))();
  var request = {};

  var result = serializer._getRelationshipNames(request);

  assert.deepEqual(result, ['foo', 'bar']);
});

(0, _qunit.test)('_getRelationshipNames should not choke on empty queryParams', function (assert) {
  var serializer = new (_jsonApiSerializer2.default.extend({
    include: ['foo', 'bar']
  }))();
  var request = { queryParams: {} };

  var result = serializer._getRelationshipNames(request);

  assert.deepEqual(result, ['foo', 'bar']);
});

(0, _qunit.test)('_getRelationshipNames should not choke on empty included', function (assert) {
  var serializer = new (_jsonApiSerializer2.default.extend({
    include: ['foo', 'bar']
  }))();
  var request = {
    queryParams: {
      include: ''
    }
  };

  var result = serializer._getRelationshipNames(request);

  assert.deepEqual(result, []);
});

(0, _qunit.test)('_getRelationshipNames should not choke on missing serializer.relationships', function (assert) {
  var serializer = new (_jsonApiSerializer2.default.extend())();
  var request = {
    queryParams: {
      include: 'baz,quux'
    }
  };

  var result = serializer._getRelationshipNames(request);

  assert.deepEqual(result, ['baz', 'quux']);
});

(0, _qunit.test)('_getRelatedModelWithPath belongsTo', function (assert) {
  var serializer = new (_jsonApiSerializer2.default.extend())();
  var schema = _schemaHelper2.default.setup();

  var foo = schema.foos.create();
  var bar = foo.createBar();
  foo.save();
  var baz = bar.createBaz();
  bar.save();
  var quux1 = baz.createQuux();
  var quux2 = baz.createQuux();
  baz.save();
  var zomg1 = quux1.createZomg();
  var zomg2 = quux1.createZomg();
  quux1.save();
  var zomg3 = quux2.createZomg();
  var zomg4 = quux2.createZomg();
  quux2.save();
  var lol1 = zomg1.createLol();
  var lol2 = zomg2.createLol();
  var lol3 = zomg3.createLol();
  var lol4 = zomg4.createLol();
  zomg1.save();
  zomg2.save();
  zomg3.save();
  zomg4.save();

  var result = serializer._getRelatedWithPath(foo, 'bar.baz.quuxes.zomgs.lol');
  var ids = (0, _map3.default)(result, 'id');

  assert.equal(result.length, 4);
  assert.ok((0, _includes3.default)(ids, lol1.id));
  assert.ok((0, _includes3.default)(ids, lol2.id));
  assert.ok((0, _includes3.default)(ids, lol3.id));
  assert.ok((0, _includes3.default)(ids, lol4.id));
});