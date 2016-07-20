'use strict';

var _qunit = require('qunit');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Passthrough', {
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

(0, _qunit.test)('it can passthrough individual paths', function (assert) {
  assert.expect(2);
  var done1 = assert.async();
  var done2 = assert.async();
  var server = this.server;


  server.loadConfig(function () {
    this.get('/contacts', function () {
      return 123;
    });
    this.passthrough('/addresses');
  });

  $.ajax({
    method: 'GET',
    url: '/contacts',
    success: function success(data) {
      assert.equal(data, 123);
      done1();
    }
  });

  $.ajax({
    method: 'GET',
    url: '/addresses',
    error: function error(reason) {
      assert.equal(reason.status, 404);
      done2();
    }
  });
});

(0, _qunit.test)('it can passthrough certain verbs for individual paths', function (assert) {
  assert.expect(3);
  var done1 = assert.async();
  var done2 = assert.async();
  var done3 = assert.async();
  var server = this.server;


  server.loadConfig(function () {
    this.get('/contacts', function () {
      return 123;
    });
    this.passthrough('/addresses', ['post']);
  });
  server.pretender.unhandledRequest = function () /* verb, path */{
    assert.ok(true, 'it doesnt passthrough GET');
    done2();
  };

  $.ajax({
    method: 'GET',
    url: '/contacts',
    success: function success(data) {
      assert.equal(data, 123);
      done1();
    }
  });

  $.ajax({
    method: 'GET',
    url: '/addresses'
  });

  $.ajax({
    method: 'POST',
    url: '/addresses',
    error: function error(reason) {
      assert.equal(reason.status, 404);
      done3();
    }
  });
});

(0, _qunit.test)('it can passthrough multiple paths in a single call', function (assert) {
  assert.expect(2);
  var done1 = assert.async();
  var done2 = assert.async();
  var server = this.server;


  server.loadConfig(function () {
    this.get('/contacts', function () {
      return 123;
    });
    this.passthrough('/contacts', '/addresses');
  });

  $.ajax({
    method: 'GET',
    url: '/contacts',
    error: function error(reason) {
      assert.equal(reason.status, 404);
      done1();
    }
  });

  $.ajax({
    method: 'POST',
    url: '/addresses',
    error: function error(reason) {
      assert.equal(reason.status, 404);
      done2();
    }
  });
});

(0, _qunit.test)('user can call passthrough multiple times', function (assert) {
  assert.expect(2);
  var done1 = assert.async();
  var done2 = assert.async();
  var server = this.server;


  server.loadConfig(function () {
    this.passthrough('/contacts');
    this.passthrough('/addresses', ['post']);
  });

  $.ajax({
    method: 'GET',
    url: '/contacts',
    error: function error(reason) {
      assert.equal(reason.status, 404);
      done1();
    }
  });

  $.ajax({
    method: 'POST',
    url: '/addresses',
    error: function error(reason) {
      assert.equal(reason.status, 404);
      done2();
    }
  });
});

(0, _qunit.test)('passthrough without args allows all paths on the current domain to passthrough', function (assert) {
  assert.expect(2);
  var done1 = assert.async();
  var done2 = assert.async();
  var server = this.server;


  server.loadConfig(function () {
    this.get('/contacts', function () {
      return 123;
    });
    this.passthrough();
  });

  $.ajax({
    method: 'GET',
    url: '/contacts',
    success: function success(data) {
      assert.equal(data, 123);
      done1();
    }
  });

  $.ajax({
    method: 'GET',
    url: '/addresses',
    error: function error(reason) {
      assert.equal(reason.status, 404);
      done2();
    }
  });
});

(0, _qunit.test)('passthrough without args allows index route on current domain to passthrough', function (assert) {
  assert.expect(2);
  var done1 = assert.async();
  var done2 = assert.async();
  var server = this.server;


  server.loadConfig(function () {
    this.get('/contacts', function () {
      return 123;
    });
    this.passthrough();
  });

  $.ajax({
    method: 'GET',
    url: '/contacts',
    success: function success(data) {
      assert.equal(data, 123, 'contacts is intercepted');
      done1();
    }
  });

  $.ajax({
    method: 'GET',
    url: '/',
    error: function error(reason) {
      done2(); // test will fail bc only 1 assertion, but we don't have to wait
    },
    success: function success(html) {
      // a passthrough request to index on the current domain
      // actually succeeds here, since that's where the test runner is served
      assert.ok(html, '/ is passed through');
      done2(); // test will fail bc only 1 assertion, but we don't have to wait
    }
  });
});

(0, _qunit.test)('it can passthrough other-origin hosts', function (assert) {
  assert.expect(1);
  var done1 = assert.async();
  var server = this.server;


  server.loadConfig(function () {
    this.passthrough('http://api.foo.bar/**');
  });

  $.ajax({
    method: 'GET',
    url: 'http://api.foo.bar/contacts',
    error: function error() {
      assert.ok(true);
      done1();
    }
  });
});