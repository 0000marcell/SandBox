'use strict';

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

var _qunit = require('qunit');

var _emberCliMirage = require('ember-cli-mirage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Unit | Server'); // jscs:disable requireCamelCaseOrUpperCaseIdentifiers, disallowMultipleVarDecl


(0, _qunit.test)('it can be instantiated', function (assert) {
  var server = new _server2.default({ environment: 'test' });
  assert.ok(server);
});

(0, _qunit.test)('it runs the default scenario in non-test environments', function (assert) {
  assert.expect(1);

  new _server2.default({
    environment: 'development',
    scenarios: {
      default: function _default(server) {
        assert.ok(true);
      }
    }
  });
});

(0, _qunit.module)('Unit | Server #loadConfig');

(0, _qunit.test)('forces timing to 0 in test environment', function (assert) {
  var server = new _server2.default({ environment: 'test' });
  server.loadConfig(function () {
    this.timing = 50;
  });
  assert.equal(server.timing, 0);
});

(0, _qunit.test)("doesn't modify user's timing config in other environments", function (assert) {
  var server = new _server2.default({ environment: 'blah' });
  server.loadConfig(function () {
    this.timing = 50;
  });
  assert.equal(server.timing, 50);
});

(0, _qunit.module)('Unit | Server #db');

(0, _qunit.test)('its db is isolated across instances', function (assert) {
  var server1 = new _server2.default({ environment: 'test' });
  server1.db.createCollection('contacts');
  server1.db.contacts.insert({ name: 'Sam' });

  var server2 = new _server2.default({ environment: 'test' });

  assert.equal(server2.contacts, undefined);
});

(0, _qunit.module)('Unit | Server #create');

(0, _qunit.test)('create fails when no factories or models are registered', function (assert) {
  var server = new _server2.default({ environment: 'test' });

  assert.throws(function () {
    server.create('contact');
  });
});

(0, _qunit.test)('create fails when an expected factory isn\'t registered', function (assert) {
  var server = new _server2.default({
    environment: 'test',
    factories: {
      address: _emberCliMirage.Factory
    }
  });

  assert.throws(function () {
    server.create('contact');
  }, /no model or factory was found/);
});

(0, _qunit.test)('create works when models but no factories are registered', function (assert) {
  var server = new _server2.default({
    environment: 'test',
    models: {
      contact: _emberCliMirage.Model
    }
  });

  server.create('contact');
  assert.equal(server.db.contacts.length, 1);
});

(0, _qunit.test)('create adds the data to the db', function (assert) {
  var server = new _server2.default({
    environment: 'test',
    factories: {
      contact: _emberCliMirage.Factory.extend({
        name: 'Sam'
      })
    }
  });

  server.create('contact');
  var contactsInDb = server.db.contacts;

  assert.equal(contactsInDb.length, 1);
  assert.deepEqual(contactsInDb[0], { id: '1', name: 'Sam' });
});

(0, _qunit.test)('create returns the new data in the db', function (assert) {
  var server = new _server2.default({
    environment: 'test',
    factories: {
      contact: _emberCliMirage.Factory.extend({
        name: 'Sam'
      })
    }
  });

  var contact = server.create('contact');

  assert.deepEqual(contact, { id: '1', name: 'Sam' });
});

(0, _qunit.test)('create allows for attr overrides', function (assert) {
  var server = new _server2.default({
    environment: 'test',
    factories: {
      contact: _emberCliMirage.Factory.extend({
        name: 'Sam'
      })
    }
  });

  var sam = server.create('contact');
  var link = server.create('contact', { name: 'Link' });

  assert.deepEqual(sam, { id: '1', name: 'Sam' });
  assert.deepEqual(link, { id: '2', name: 'Link' });
});

(0, _qunit.test)('create allows for attr overrides with extended factories', function (assert) {
  var ContactFactory = _emberCliMirage.Factory.extend({
    name: 'Link',
    age: 500
  });
  var FriendFactory = ContactFactory.extend({
    is_young: function is_young() {
      return this.age < 18;
    }
  });

  var server = new _server2.default({
    environment: 'test',
    factories: {
      contact: ContactFactory,
      friend: FriendFactory
    }
  });

  var link = server.create('friend');
  var youngLink = server.create('friend', { age: 10 });

  assert.deepEqual(link, { id: '1', name: 'Link', age: 500, is_young: false });
  assert.deepEqual(youngLink, { id: '2', name: 'Link', age: 10, is_young: true });
});

(0, _qunit.test)('create allows for attr overrides with arrays', function (assert) {
  var server = new _server2.default({
    environment: 'test',
    factories: {
      contact: _emberCliMirage.Factory.extend({
        name: ['Sam', 'Carl']
      })
    }
  });

  var sam = server.create('contact');
  var link = server.create('contact', { name: ['Link'] });
  var noname = server.create('contact', { name: [] });

  assert.deepEqual(sam, { id: '1', name: ['Sam', 'Carl'] });
  assert.deepEqual(link, { id: '2', name: ['Link'] });
  assert.deepEqual(noname, { id: '3', name: [] });
});

(0, _qunit.test)('create allows for nested attr overrides', function (assert) {
  var server = new _server2.default({
    environment: 'test',
    factories: {
      contact: _emberCliMirage.Factory.extend({
        address: {
          streetName: 'Main',
          streetAddress: function streetAddress(i) {
            return 1000 + i;
          }
        }
      })
    }
  });

  var contact1 = server.create('contact');
  var contact2 = server.create('contact');

  assert.deepEqual(contact1, { id: '1', address: { streetName: 'Main', streetAddress: 1000 } });
  assert.deepEqual(contact2, { id: '2', address: { streetName: 'Main', streetAddress: 1001 } });
});

(0, _qunit.test)('create allows for arrays of attr overrides', function (assert) {
  var server = new _server2.default({
    environment: 'test',
    factories: {
      contact: _emberCliMirage.Factory.extend({
        websites: ['http://example.com', function (i) {
          return 'http://placekitten.com/' + (320 + i) + '/' + (240 + i);
        }]
      })
    }
  });

  var contact1 = server.create('contact');
  var contact2 = server.create('contact');

  assert.deepEqual(contact1, { id: '1', websites: ['http://example.com', 'http://placekitten.com/320/240'] });
  assert.deepEqual(contact2, { id: '2', websites: ['http://example.com', 'http://placekitten.com/321/241'] });
});

(0, _qunit.module)('Unit | Server #createList', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({ environment: 'test' });
  }
});

(0, _qunit.test)('createList adds the given number of elements to the db', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({ name: 'Sam' })
  });

  this.server.createList('contact', 3);
  var contactsInDb = this.server.db.contacts;

  assert.equal(contactsInDb.length, 3);
  assert.deepEqual(contactsInDb[0], { id: '1', name: 'Sam' });
  assert.deepEqual(contactsInDb[1], { id: '2', name: 'Sam' });
  assert.deepEqual(contactsInDb[2], { id: '3', name: 'Sam' });
});

(0, _qunit.test)('createList returns the created elements', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({ name: 'Sam' })
  });

  this.server.create('contact');
  var contacts = this.server.createList('contact', 3);

  assert.equal(contacts.length, 3);
  assert.deepEqual(contacts[0], { id: '2', name: 'Sam' });
  assert.deepEqual(contacts[1], { id: '3', name: 'Sam' });
  assert.deepEqual(contacts[2], { id: '4', name: 'Sam' });
});

(0, _qunit.test)('createList respects sequences', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({
      name: function name(i) {
        return 'name' + i;
      }
    })
  });

  var contacts = this.server.createList('contact', 3);

  assert.deepEqual(contacts[0], { id: '1', name: 'name0' });
  assert.deepEqual(contacts[1], { id: '2', name: 'name1' });
  assert.deepEqual(contacts[2], { id: '3', name: 'name2' });
});

(0, _qunit.test)('createList respects attr overrides', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({ name: 'Sam' })
  });

  var sams = this.server.createList('contact', 2);
  var links = this.server.createList('contact', 2, { name: 'Link' });

  assert.deepEqual(sams[0], { id: '1', name: 'Sam' });
  assert.deepEqual(sams[1], { id: '2', name: 'Sam' });
  assert.deepEqual(links[0], { id: '3', name: 'Link' });
  assert.deepEqual(links[1], { id: '4', name: 'Link' });
});

(0, _qunit.module)('Unit | Server #build', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({ environment: 'test' });
  }
});

(0, _qunit.test)('build does not add the data to the db', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({ name: 'Sam' })
  });

  this.server.build('contact');
  var contactsInDb = this.server.db.contacts;

  assert.equal(contactsInDb.length, 0);
});

(0, _qunit.test)('build returns the new attrs with no id', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({ name: 'Sam' })
  });

  var contact = this.server.build('contact');

  assert.deepEqual(contact, { name: 'Sam' });
});

(0, _qunit.test)('build allows for attr overrides', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({ name: 'Sam' })
  });

  var sam = this.server.build('contact');
  var link = this.server.build('contact', { name: 'Link' });

  assert.deepEqual(sam, { name: 'Sam' });
  assert.deepEqual(link, { name: 'Link' });
});

(0, _qunit.test)('build allows for attr overrides with extended factories', function (assert) {
  var ContactFactory = _emberCliMirage.Factory.extend({
    name: 'Link',
    age: 500
  });
  var FriendFactory = ContactFactory.extend({
    is_young: function is_young() {
      return this.age < 18;
    }
  });
  this.server.loadFactories({
    contact: ContactFactory,
    friend: FriendFactory
  });

  var link = this.server.build('friend');
  var youngLink = this.server.build('friend', { age: 10 });

  assert.deepEqual(link, { name: 'Link', age: 500, is_young: false });
  assert.deepEqual(youngLink, { name: 'Link', age: 10, is_young: true });
});

(0, _qunit.test)('build allows for attr overrides with arrays', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({ name: ['Sam', 'Carl'] })
  });

  var sam = this.server.build('contact');
  var link = this.server.build('contact', { name: ['Link'] });
  var noname = this.server.build('contact', { name: [] });

  assert.deepEqual(sam, { name: ['Sam', 'Carl'] });
  assert.deepEqual(link, { name: ['Link'] });
  assert.deepEqual(noname, { name: [] });
});

(0, _qunit.test)('build allows for nested attr overrides', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({
      address: {
        streetName: 'Main',
        streetAddress: function streetAddress(i) {
          return 1000 + i;
        }
      }
    })
  });

  var contact1 = this.server.build('contact');
  var contact2 = this.server.build('contact');

  assert.deepEqual(contact1, { address: { streetName: 'Main', streetAddress: 1000 } });
  assert.deepEqual(contact2, { address: { streetName: 'Main', streetAddress: 1001 } });
});

(0, _qunit.test)('build allows for arrays of attr overrides', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({
      websites: ['http://example.com', function (i) {
        return 'http://placekitten.com/' + (320 + i) + '/' + (240 + i);
      }]
    })
  });

  var contact1 = this.server.build('contact');
  var contact2 = this.server.build('contact');

  assert.deepEqual(contact1, { websites: ['http://example.com', 'http://placekitten.com/320/240'] });
  assert.deepEqual(contact2, { websites: ['http://example.com', 'http://placekitten.com/321/241'] });
});

(0, _qunit.module)('Unit | Server #buildList', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({ environment: 'test' });
  }
});

(0, _qunit.test)('buildList does not add elements to the db', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({ name: 'Sam' })
  });

  this.server.buildList('contact', 3);
  var contactsInDb = this.server.db.contacts;

  assert.equal(contactsInDb.length, 0);
});

(0, _qunit.test)('buildList returns the built elements without ids', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({ name: 'Sam' })
  });

  this.server.create('contact');
  var contacts = this.server.buildList('contact', 3);

  assert.equal(contacts.length, 3);
  assert.deepEqual(contacts[0], { name: 'Sam' });
  assert.deepEqual(contacts[1], { name: 'Sam' });
  assert.deepEqual(contacts[2], { name: 'Sam' });
});

(0, _qunit.test)('buildList respects sequences', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({
      name: function name(i) {
        return 'name' + i;
      }
    })
  });

  var contacts = this.server.buildList('contact', 3);

  assert.deepEqual(contacts[0], { name: 'name0' });
  assert.deepEqual(contacts[1], { name: 'name1' });
  assert.deepEqual(contacts[2], { name: 'name2' });
});

(0, _qunit.test)('buildList respects attr overrides', function (assert) {
  this.server.loadFactories({
    contact: _emberCliMirage.Factory.extend({ name: 'Sam' })
  });

  var sams = this.server.buildList('contact', 2);
  var links = this.server.buildList('contact', 2, { name: 'Link' });

  assert.deepEqual(sams[0], { name: 'Sam' });
  assert.deepEqual(sams[1], { name: 'Sam' });
  assert.deepEqual(links[0], { name: 'Link' });
  assert.deepEqual(links[1], { name: 'Link' });
});

(0, _qunit.module)('Unit | Server #defaultPassthroughs');

(0, _qunit.test)('server configures default passthroughs when useDefaultPassthroughs is true', function (assert) {
  var server = new _server2.default({ useDefaultPassthroughs: true });

  assert.expect(_server.defaultPassthroughs.length);
  _server.defaultPassthroughs.forEach(function (passthroughUrl) {
    var passthroughRequest = { method: 'GET', url: passthroughUrl },
        isPassedThrough = server.pretender.checkPassthrough(passthroughRequest);

    assert.ok(isPassedThrough);
  });
});

(0, _qunit.test)('server does not configure default passthroughs when useDefaultPassthroughs is false', function (assert) {
  var server = new _server2.default({ useDefaultPassthroughs: false });

  assert.expect(_server.defaultPassthroughs.length);
  _server.defaultPassthroughs.forEach(function (passthroughUrl) {
    var passthroughRequest = { method: 'GET', url: passthroughUrl },
        isPassedThrough = server.pretender.checkPassthrough(passthroughRequest);

    assert.ok(!isPassedThrough);
  });
});