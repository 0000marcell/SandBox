'use strict';

var _qunit = require('qunit');

var _emberCliMirage = require('ember-cli-mirage');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Server | Shorthand sanity check', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'test',
      models: {
        contact: _emberCliMirage.Model
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

(0, _qunit.test)('a get shorthand works', function (assert) {
  assert.expect(2);
  var done = assert.async();

  this.server.db.loadData({
    contacts: [{ id: 1, name: 'Link' }]
  });

  this.server.get('/contacts');

  $.ajax({
    method: 'GET',
    url: '/contacts'
  }).done(function (res, status, xhr) {
    assert.equal(xhr.status, 200);
    assert.deepEqual(res, { contacts: [{ id: '1', name: 'Link' }] });
    done();
  });
});

(0, _qunit.test)('a post shorthand works', function (assert) {
  var server = this.server;

  assert.expect(2);
  var done = assert.async();

  server.post('/contacts');

  $.ajax({
    method: 'POST',
    url: '/contacts',
    data: JSON.stringify({
      contact: {
        name: 'Zelda'
      }
    })
  }).done(function (res, status, xhr) {
    assert.equal(xhr.status, 201);
    assert.equal(server.db.contacts.length, 1);
    done();
  });
});

(0, _qunit.test)('a put shorthand works', function (assert) {
  var server = this.server;

  assert.expect(2);
  var done = assert.async();

  this.server.db.loadData({
    contacts: [{ id: 1, name: 'Link' }]
  });

  server.put('/contacts/:id');

  $.ajax({
    method: 'PUT',
    url: '/contacts/1',
    data: JSON.stringify({
      contact: {
        name: 'Zelda'
      }
    })
  }).done(function (res, status, xhr) {
    assert.equal(xhr.status, 200);
    assert.equal(server.db.contacts[0].name, 'Zelda');
    done();
  });
});

(0, _qunit.test)('a patch shorthand works', function (assert) {
  var server = this.server;

  assert.expect(2);
  var done = assert.async();

  this.server.db.loadData({
    contacts: [{ id: 1, name: 'Link' }]
  });

  server.patch('/contacts/:id');

  $.ajax({
    method: 'PATCH',
    url: '/contacts/1',
    data: JSON.stringify({
      contact: {
        name: 'Zelda'
      }
    })
  }).done(function (res, status, xhr) {
    assert.equal(xhr.status, 200);
    assert.equal(server.db.contacts[0].name, 'Zelda');
    done();
  });
});

(0, _qunit.test)('a delete shorthand works', function (assert) {
  var server = this.server;

  assert.expect(2);
  var done = assert.async();

  this.server.db.loadData({
    contacts: [{ id: 1, name: 'Link' }]
  });

  server.del('/contacts/:id');

  $.ajax({
    method: 'DELETE',
    url: '/contacts/1'
  }).done(function (res, status, xhr) {
    assert.equal(xhr.status, 204);
    assert.equal(server.db.contacts.length, 0);
    done();
  });
});