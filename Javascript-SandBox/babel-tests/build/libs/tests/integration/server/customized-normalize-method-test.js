'use strict';

var _qunit = require('qunit');

var _emberCliMirage = require('ember-cli-mirage');

var _inflector = require('ember-cli-mirage/utils/inflector');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// jscs:disable requireCamelCaseOrUpperCaseIdentifiers, requireObjectDestructuring


(0, _qunit.module)('Integration | Server | Customized normalize method', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'test',
      models: {
        contact: _emberCliMirage.Model
      },
      serializers: {
        application: _emberCliMirage.ActiveModelSerializer,
        contact: _emberCliMirage.ActiveModelSerializer.extend({
          normalize: function normalize(payload) {
            var attrs = payload.some.random[1].attrs;
            Object.keys(attrs).forEach(_inflector.camelize);

            var jsonApiDoc = {
              data: {
                type: 'contacts',
                attributes: attrs
              }
            };
            return jsonApiDoc;
          }
        })
      }
    });
    this.server.timing = 0;
    this.server.logging = false;
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('custom model-specific normalize functions are used', function (assert) {
  var server = this.server;

  assert.expect(3);
  var done = assert.async();

  server.post('/contacts');

  $.ajax({
    method: 'POST',
    url: '/contacts',
    data: JSON.stringify({
      some: {
        random: [{
          format: true
        }, {
          attrs: {
            first_name: 'Zelda'
          }
        }]
      }
    })
  }).done(function (res, status, xhr) {
    assert.equal(xhr.status, 201);
    assert.equal(server.db.contacts.length, 1);
    assert.equal(server.db.contacts[0].firstName, 'Zelda');
    done();
  });
});