'use strict';

var _qunit = require('qunit');

var _emberCliMirage = require('ember-cli-mirage');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Server | Custom function handler', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'test',
      models: {
        contact: _emberCliMirage.Model
      },
      factories: {
        contact: _emberCliMirage.Factory
      },
      serializers: {
        application: _emberCliMirage.ActiveModelSerializer
      }
    });
    this.server.timing = 0;
    this.server.logging = false;
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('a POJA of models defaults to responding with an array of each model\'s attrs', function (assert) {
  assert.expect(1);
  var done = assert.async();
  var server = this.server;


  server.createList('contact', 3);
  server.get('/contacts', function (schema, request) {
    return schema.contacts.all().models;
  });

  $.ajax({
    method: 'GET',
    url: '/contacts'
  }).done(function (res, status, xhr) {
    assert.deepEqual(res, [{ id: '1' }, { id: '2' }, { id: '3' }]);
    done();
  });
});

(0, _qunit.test)('#normalizedRequestAttrs returns the an object with the primary resource\'s attrs and belongsTo keys camelized', function (assert) {
  assert.expect(1);
  var done = assert.async();
  var server = this.server;


  server.post('/contacts', function (schema, request) {
    var attrs = this.normalizedRequestAttrs();

    assert.deepEqual(attrs, {
      firstName: 'Sam',
      lastName: 'Selikoff',
      teamId: 1
    });

    return {};
  });

  $.ajax({
    method: 'POST',
    url: '/contacts',
    data: JSON.stringify({
      contact: {
        first_name: 'Sam',
        last_name: 'Selikoff',
        team_id: 1
      }
    })
  }).done(function () {
    done();
  });
});