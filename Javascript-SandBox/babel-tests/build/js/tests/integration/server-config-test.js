'use strict';

var _qunit = require('qunit');

var _emberCliMirage = require('ember-cli-mirage');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Server Config', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'development',
      models: {
        contact: _emberCliMirage.Model
      }
    });
    this.server.timing = 0;
    this.server.logging = false;
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('namespace can be configured', function (assert) {
  assert.expect(1);
  var done = assert.async();

  var contacts = [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }];
  this.server.db.loadData({
    contacts: contacts
  });
  this.server.namespace = 'api';
  this.server.get('/contacts');

  $.getJSON('/api/contacts', function (data) {
    assert.deepEqual(data, { contacts: contacts });
    done();
  });
});

(0, _qunit.test)('urlPrefix can be configured', function (assert) {
  assert.expect(1);
  var done = assert.async();
  var server = this.server;


  var contacts = [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }];
  server.db.loadData({
    contacts: contacts
  });
  server.urlPrefix = 'http://localhost:3000';
  server.get('/contacts');

  $.getJSON('http://localhost:3000/contacts', function (data) {
    assert.deepEqual(data, { contacts: contacts });
    done();
  });
});

(0, _qunit.test)('urlPrefix and namespace can be configured simultaneously', function (assert) {
  assert.expect(1);
  var done = assert.async();
  var server = this.server;


  var contacts = [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }];
  server.db.loadData({
    contacts: contacts
  });
  server.urlPrefix = 'http://localhost:3000';
  server.namespace = 'api';
  server.get('/contacts');

  $.getJSON('http://localhost:3000/api/contacts', function (data) {
    assert.deepEqual(data, { contacts: contacts });
    done();
  });
});

(0, _qunit.test)('fully qualified domain names can be used in configuration', function (assert) {
  assert.expect(1);
  var done = assert.async();

  var contacts = [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }];
  this.server.db.loadData({
    contacts: contacts
  });
  this.server.get('http://example.org/api/contacts');

  $.getJSON('http://example.org/api/contacts', function (data) {
    assert.deepEqual(data, { contacts: contacts });
    done();
  });
});

(0, _qunit.test)('urlPrefix/namespace are ignored when fully qualified domain names are used in configuration', function (assert) {
  assert.expect(1);
  var done = assert.async();
  var server = this.server;


  var contacts = [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }];
  server.db.loadData({
    contacts: contacts
  });
  this.urlPrefix = 'https://example.net';
  server.get('http://example.org/api/contacts');

  $.getJSON('http://example.org/api/contacts', function (data) {
    assert.deepEqual(data, { contacts: contacts });
    done();
  });
});