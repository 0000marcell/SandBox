'use strict';

var _qunit = require('qunit');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | HTTP Verbs', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'development'
    });
    this.server.timing = 0;
    this.server.logging = false;
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('mirage responds to get', function (assert) {
  assert.expect(1);
  var done = assert.async();

  this.server.get('/contacts', function () {
    return true;
  });

  $.ajax({
    method: 'GET',
    url: '/contacts'
  }).done(function (res) {
    assert.equal(res, true);
    done();
  });
});

(0, _qunit.test)('mirage responds to post', function (assert) {
  assert.expect(1);
  var done = assert.async();

  this.server.post('/contacts', function () {
    return true;
  });

  $.ajax({
    method: 'POST',
    url: '/contacts'
  }).done(function (res) {
    assert.equal(res, true);
    done();
  });
});

(0, _qunit.test)('mirage responds to put', function (assert) {
  assert.expect(1);
  var done = assert.async();

  this.server.put('/contacts', function () {
    return true;
  });

  $.ajax({
    method: 'PUT',
    url: '/contacts'
  }).done(function (res) {
    assert.equal(res, true);
    done();
  });
});

(0, _qunit.test)('mirage responds to delete', function (assert) {
  assert.expect(1);
  var done = assert.async();

  this.server['delete']('/contacts', function () {
    return true;
  });

  $.ajax({
    method: 'DELETE',
    url: '/contacts'
  }).done(function (res) {
    assert.equal(res, true);
    done();
  });
});

(0, _qunit.test)('mirage responds to patch', function (assert) {
  assert.expect(1);
  var done = assert.async();

  this.server.patch('/contacts', function () {
    return true;
  });

  $.ajax({
    method: 'PATCH',
    url: '/contacts'
  }).done(function (res) {
    assert.equal(res, true);
    done();
  });
});

(0, _qunit.test)('response code can be customized', function (assert) {
  assert.expect(1);
  var done = assert.async();

  this.server.get('/contacts', {}, 404);

  $.ajax({
    method: 'GET',
    url: '/contacts'
  }).complete(function (res) {
    assert.ok(res.status, 404);
    done();
  });
});