'use strict';

var _db2 = require('ember-cli-mirage/db');

var _db3 = _interopRequireDefault(_db2);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = void 0;
(0, _qunit.module)('Unit | Db');

(0, _qunit.test)('it can be instantiated', function (assert) {
  db = new _db3.default();
  assert.ok(db);
});

(0, _qunit.test)('it can load data on instantiation', function (assert) {
  db = new _db3.default({
    users: [{ id: 1, name: 'Link' }],
    addresses: [{ id: 1, name: '123 Hyrule Way' }, { id: 2, name: 'Lorem ipsum' }]
  });

  assert.equal(db.users.length, 1);
  assert.equal(db.addresses.length, 2);
});

(0, _qunit.test)('it can empty its data', function (assert) {
  db = new _db3.default({
    users: [{ id: 1, name: 'Link' }],
    addresses: [{ id: 1, name: '123 Hyrule Way' }, { id: 2, name: 'Lorem ipsum' }]
  });

  db.emptyData();

  assert.equal(db.users.length, 0);
  assert.equal(db.addresses.length, 0);
});

(0, _qunit.module)('Unit | Db #createCollection', {
  beforeEach: function beforeEach() {
    db = new _db3.default();
  },
  afterEach: function afterEach() {
    db.emptyData();
  }
});

(0, _qunit.test)('it can create an empty collection', function (assert) {
  db.createCollection('contacts');

  assert.ok(db.contacts);
});

(0, _qunit.test)('it can create many collections', function (assert) {
  db.createCollections('contacts', 'addresses');

  assert.ok(db.contacts);
  assert.ok(db.addresses);
});

(0, _qunit.module)('Unit | Db #loadData', {
  beforeEach: function beforeEach() {
    db = new _db3.default();
  },
  afterEach: function afterEach() {
    db.emptyData();
  }
});

(0, _qunit.test)('it can load an object of data', function (assert) {
  var data = {
    contacts: [{ id: '1', name: 'Link' }],
    addresses: [{ id: '1', name: '123 Hyrule Way' }]
  };
  db.loadData(data);

  assert.deepEqual(db.contacts, data.contacts);
  assert.deepEqual(db.addresses, data.addresses);
});

(0, _qunit.module)('Unit | Db #all', {
  beforeEach: function beforeEach() {
    this.data = {
      contacts: [{ id: '1', name: 'Link' }],
      addresses: [{ id: '1', name: '123 Hyrule Way' }]
    };

    db = new _db3.default(this.data);
  },
  afterEach: function afterEach() {
    db.emptyData();
  }
});

(0, _qunit.test)('it can return a collection', function (assert) {
  assert.deepEqual(db.contacts, this.data.contacts);
  assert.deepEqual(db.addresses, this.data.addresses);
});

(0, _qunit.test)('the collection is a copy', function (assert) {
  var _db = db;
  var contacts = _db.contacts;


  assert.deepEqual(contacts, this.data.contacts);
  contacts[0].name = 'Zelda';

  assert.deepEqual(db.contacts, this.data.contacts);
});

(0, _qunit.module)('Unit | Db #insert', {
  beforeEach: function beforeEach() {
    db = new _db3.default();
    db.createCollection('contacts');
  },
  afterEach: function afterEach() {
    db.emptyData();
  }
});

(0, _qunit.test)('it inserts an object and returns it', function (assert) {
  var link = db.contacts.insert({ name: 'Link' });
  var expectedRecord = {
    id: '1',
    name: 'Link'
  };

  assert.deepEqual(db.contacts, [expectedRecord]);
  assert.deepEqual(link, expectedRecord);
});

(0, _qunit.test)('it returns a copy', function (assert) {
  var link = db.contacts.insert({ name: 'Link' });
  var expectedRecord = {
    id: '1',
    name: 'Link'
  };

  assert.deepEqual(link, expectedRecord);

  link.name = 'Young link';

  assert.deepEqual(db.contacts.find(1), expectedRecord);
});

(0, _qunit.test)('it can insert objects sequentially', function (assert) {
  db.contacts.insert({ name: 'Link' });
  db.contacts.insert({ name: 'Ganon' });

  var records = [{ id: '1', name: 'Link' }, { id: '2', name: 'Ganon' }];

  assert.deepEqual(db.contacts, records);
});

(0, _qunit.test)('it does not add an id if present', function (assert) {
  var attrs = { id: '5', name: 'Link' };

  db.contacts.insert(attrs);

  assert.deepEqual(db.contacts, [attrs]);
});

(0, _qunit.test)('it can insert an array and return it', function (assert) {
  db.contacts.insert({ name: 'Link' });

  var contacts = db.contacts.insert([{ name: 'Zelda' }, { name: 'Ganon' }]);

  assert.deepEqual(db.contacts, [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }, { id: '3', name: 'Ganon' }]);
  assert.deepEqual(contacts, [{ id: '2', name: 'Zelda' }, { id: '3', name: 'Ganon' }]);
});

(0, _qunit.test)('it does not add ids to array data if present', function (assert) {
  db.contacts.insert([{ id: 2, name: 'Link' }, { id: 1, name: 'Ganon' }]);

  assert.deepEqual(db.contacts, [{ id: '1', name: 'Ganon' }, { id: '2', name: 'Link' }]);
});

(0, _qunit.test)('it can insert a record with an id of 0', function (assert) {
  db.contacts.insert({ id: 0, name: 'Link' });

  assert.deepEqual(db.contacts, [{ id: '0', name: 'Link' }]);
});

(0, _qunit.test)('IDs increment correctly, even after a record is removed', function (assert) {
  var records = db.contacts.insert([{ name: 'Link' }, { name: 'Ganon' }]);

  db.contacts.remove(records[0]);

  var record = db.contacts.insert({ name: 'Zelda' });

  assert.equal(record.id, 3);
});

(0, _qunit.test)('inserting a record with an already used ID throws an error', function (assert) {
  assert.expect(2);

  db.contacts.insert({ id: 1, name: 'Duncan McCleod' });

  assert.throws(function () {
    db.contacts.insert({ id: 1, name: 'Duncan McCleod' });
  });

  db.contacts.insert({ id: 'atp', name: 'Adenosine Triphosphate' });

  assert.throws(function () {
    db.contacts.insert({ id: 'atp', name: 'Adenosine Triphosphate' });
  });
});

(0, _qunit.test)('tracks the correct IDs being used', function (assert) {
  db.contacts.insert({ name: 'Vegeta' });
  db.contacts.insert({ id: 2, name: 'Krilli' });

  assert.equal(db.contacts.length, 2);
});

(0, _qunit.module)('Unit | Db #find', {
  beforeEach: function beforeEach() {
    db = new _db3.default();
    db.createCollection('contacts');
    db.contacts.insert([{ name: 'Zelda' }, { name: 'Link' }, { id: 'abc', name: 'Ganon' }]);
  },
  afterEach: function afterEach() {
    db.emptyData();
  }
});

(0, _qunit.test)('returns a record that matches a numerical id', function (assert) {
  var contact = db.contacts.find(2);

  assert.deepEqual(contact, { id: '2', name: 'Link' });
});

(0, _qunit.test)('returns a copy not a reference', function (assert) {
  var contact = db.contacts.find(2);

  assert.deepEqual(contact, { id: '2', name: 'Link' });

  contact.name = 'blah';

  assert.deepEqual(db.contacts.find(2), { id: '2', name: 'Link' });
});

(0, _qunit.test)('returns a record that matches a string id', function (assert) {
  var contact = db.contacts.find('abc');

  assert.deepEqual(contact, { id: 'abc', name: 'Ganon' });
});

(0, _qunit.test)('returns multiple record that matches an array of ids', function (assert) {
  var contacts = db.contacts.find([1, 2]);

  assert.deepEqual(contacts, [{ id: '1', name: 'Zelda' }, { id: '2', name: 'Link' }]);
});

(0, _qunit.test)('returns a record whose id is a string that start with numbers', function (assert) {
  db.contacts.insert({
    id: '123-456',
    name: 'Epona'
  });

  var contact = db.contacts.find('123-456');
  assert.deepEqual(contact, { id: '123-456', name: 'Epona' });
});

(0, _qunit.test)('returns multiple record that match an array of ids', function (assert) {
  var contacts = db.contacts.find([1, 2]);

  assert.deepEqual(contacts, [{ id: '1', name: 'Zelda' }, { id: '2', name: 'Link' }]);
});

(0, _qunit.test)('returns an empty array when it doesnt find multiple ids', function (assert) {
  var contacts = db.contacts.find([99, 100]);

  assert.deepEqual(contacts, []);
});

(0, _qunit.module)('Unit | Db #where', {
  beforeEach: function beforeEach() {
    db = new _db3.default();
    db.createCollection('contacts');
    db.contacts.insert([{ name: 'Link', evil: false, age: 17 }, { name: 'Zelda', evil: false, age: 17 }, { name: 'Ganon', evil: true, age: 45 }]);
  },
  afterEach: function afterEach() {
    db.emptyData();
  }
});

(0, _qunit.test)('returns an array of records that match the query', function (assert) {
  var result = db.contacts.where({ evil: true });

  assert.deepEqual(result, [{ id: '3', name: 'Ganon', evil: true, age: 45 }]);
});

(0, _qunit.test)('it coerces query params to strings', function (assert) {
  var result = db.contacts.where({ age: '45' });

  assert.deepEqual(result, [{ id: '3', name: 'Ganon', evil: true, age: 45 }]);
});

(0, _qunit.test)('returns a copy, not a referecne', function (assert) {
  var result = db.contacts.where({ evil: true });

  assert.deepEqual(result, [{ id: '3', name: 'Ganon', evil: true, age: 45 }]);

  result[0].evil = false;

  assert.deepEqual(db.contacts.where({ evil: true }), [{ id: '3', name: 'Ganon', evil: true, age: 45 }]);
});

(0, _qunit.test)('returns an empty array if no records match the query', function (assert) {
  var result = db.contacts.where({ name: 'Link', evil: true });

  assert.deepEqual(result, []);
});

(0, _qunit.test)('accepts a filter function', function (assert) {
  var result = db.contacts.where(function (record) {
    return record.age === 45;
  });

  assert.deepEqual(result, [{ id: '3', name: 'Ganon', evil: true, age: 45 }]);
});

(0, _qunit.module)('Unit | Db #update', {
  beforeEach: function beforeEach() {
    db = new _db3.default();
    db.createCollection('contacts');
    db.contacts.insert([{ name: 'Link', evil: false }, { name: 'Zelda', evil: false }, { name: 'Ganon', evil: true }, { id: '123-abc', name: 'Epona', evil: false }]);
  },
  afterEach: function afterEach() {
    db.emptyData();
  }
});

(0, _qunit.test)('it can update the whole collection', function (assert) {
  db.contacts.update({ name: 'Sam', evil: false });

  var actualContacts = db.contacts;

  var expectedContacts = [{ id: '123-abc', name: 'Sam', evil: false }, { id: '1', name: 'Sam', evil: false }, { id: '2', name: 'Sam', evil: false }, { id: '3', name: 'Sam', evil: false }];

  assert.deepEqual(actualContacts, expectedContacts, [actualContacts.map(function (r) {
    return r.id;
  }).join(','), expectedContacts.map(function (r) {
    return r.id;
  }).join(',')].join(';'));
});

(0, _qunit.test)('it can update a record by id', function (assert) {
  db.contacts.update(3, { name: 'Ganondorf', evil: false });
  var ganon = db.contacts.find(3);

  assert.deepEqual(ganon, { id: '3', name: 'Ganondorf', evil: false });
});

(0, _qunit.test)('it can update a record by id when the id is a string', function (assert) {
  db.contacts.update('123-abc', { evil: true });
  var epona = db.contacts.find('123-abc');

  assert.deepEqual(epona, { id: '123-abc', name: 'Epona', evil: true });
});

(0, _qunit.test)('it can update multiple records by ids', function (assert) {
  db.contacts.update([1, 2], { evil: true });
  var link = db.contacts.find(1);
  var zelda = db.contacts.find(2);

  assert.equal(link.evil, true);
  assert.equal(zelda.evil, true);
});

(0, _qunit.test)('it can update records by query', function (assert) {
  db.contacts.update({ evil: false }, { name: 'Sam' });

  assert.deepEqual(db.contacts, [{ id: '123-abc', name: 'Sam', evil: false }, { id: '1', name: 'Sam', evil: false }, { id: '2', name: 'Sam', evil: false }, { id: '3', name: 'Ganon', evil: true }]);
});

(0, _qunit.test)('updating a single record returns that record', function (assert) {
  var ganon = db.contacts.update(3, { name: 'Ganondorf' });
  assert.deepEqual(ganon, { id: '3', name: 'Ganondorf', evil: true });
});

(0, _qunit.test)('updating a collection returns the updated records', function (assert) {
  var characters = db.contacts.update({ evil: true });
  assert.deepEqual(characters, [{ id: '123-abc', name: 'Epona', evil: true }, { id: '1', name: 'Link', evil: true }, { id: '2', name: 'Zelda', evil: true }]);
});

(0, _qunit.test)('updating multiple records returns the updated records', function (assert) {
  var characters = db.contacts.update({ evil: false }, { evil: true });
  assert.deepEqual(characters, [{ id: '123-abc', name: 'Epona', evil: true }, { id: '1', name: 'Link', evil: true }, { id: '2', name: 'Zelda', evil: true }]);
});

(0, _qunit.test)('throws when updating an ID is attempted', function (assert) {
  assert.expect(1);

  assert.throws(function () {
    db.contacts.update(1, { id: 3 });
  });
});

(0, _qunit.module)('Unit | Db #remove', {
  beforeEach: function beforeEach() {
    db = new _db3.default();
    db.createCollection('contacts');
    db.contacts.insert([{ name: 'Link', evil: false }, { name: 'Zelda', evil: false }, { name: 'Ganon', evil: true }, { id: '123-abc', name: 'Epona', evil: false }]);
  },
  afterEach: function afterEach() {
    db.emptyData();
  }
});

(0, _qunit.test)('it can remove an entire collection', function (assert) {
  db.contacts.remove();

  assert.deepEqual(db.contacts, []);
});

(0, _qunit.test)('it can remove a single record by id', function (assert) {
  db.contacts.remove(1);

  assert.deepEqual(db.contacts, [{ id: '123-abc', name: 'Epona', evil: false }, { id: '2', name: 'Zelda', evil: false }, { id: '3', name: 'Ganon', evil: true }]);
});

(0, _qunit.test)('it can remove a single record when the id is a string', function (assert) {
  db.contacts.remove('123-abc');

  assert.deepEqual(db.contacts, [{ id: '1', name: 'Link', evil: false }, { id: '2', name: 'Zelda', evil: false }, { id: '3', name: 'Ganon', evil: true }]);
});

(0, _qunit.test)('it can remove multiple records by ids', function (assert) {
  db.contacts.remove([1, 2]);

  assert.deepEqual(db.contacts, [{ id: '123-abc', name: 'Epona', evil: false }, { id: '3', name: 'Ganon', evil: true }]);
});

(0, _qunit.test)('it can remove multiple records by query', function (assert) {
  db.contacts.remove({ evil: false });

  assert.deepEqual(db.contacts, [{ id: '3', name: 'Ganon', evil: true }]);
});

(0, _qunit.test)('it can add a record after removing all records', function (assert) {
  db.contacts.remove();
  db.contacts.insert({ name: 'Foo' });

  assert.equal(db.contacts.length, 1);
  assert.deepEqual(db.contacts, [{ id: '1', name: 'Foo' }]);
});

(0, _qunit.module)('Unit | Db #firstOrCreate', {
  beforeEach: function beforeEach() {
    db = new _db3.default();
    db.createCollection('contacts');
    db.contacts.insert([{ id: 1, name: 'Link', evil: false }, { id: 2, name: 'Zelda', evil: false }, { id: 3, name: 'Ganon', evil: true }]);
  },
  afterEach: function afterEach() {
    db.emptyData();
  }
});

(0, _qunit.test)('it can find the first record available from the query', function (assert) {
  var record = db.contacts.firstOrCreate({ name: 'Link' });

  assert.deepEqual(record, { id: '1', name: 'Link', evil: false });
});

(0, _qunit.test)('it creates a new record from query + attrs if none found', function (assert) {
  var record = db.contacts.firstOrCreate({ name: 'Mario' }, { evil: false });

  assert.equal(record.name, 'Mario');
  assert.equal(record.evil, false);
  assert.ok(record.id);
});

(0, _qunit.test)('does not require attrs', function (assert) {
  var record = db.contacts.firstOrCreate({ name: 'Luigi' });

  assert.equal(record.name, 'Luigi');
  assert.ok(record.id);
});