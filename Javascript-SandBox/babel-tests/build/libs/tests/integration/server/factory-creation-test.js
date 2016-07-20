'use strict';

var _qunit = require('qunit');

var _emberCliMirage = require('ember-cli-mirage');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Server | Factory creation', {
  beforeEach: function beforeEach() {
    this.Contact = _emberCliMirage.Model.extend();
    this.AmazingContact = _emberCliMirage.Model.extend();
    this.Post = _emberCliMirage.Model.extend({
      author: (0, _emberCliMirage.belongsTo)()
    });
    this.Author = _emberCliMirage.Model.extend({
      posts: (0, _emberCliMirage.hasMany)()
    });

    this.server = new _server2.default({
      environment: 'test',
      models: {
        contact: this.Contact,
        amazingContact: this.AmazingContact,
        post: this.Post,
        author: this.Author
      },
      factories: {
        contact: _emberCliMirage.Factory,
        amazingContact: _emberCliMirage.Factory
      }
    });
    this.server.timing = 0;
    this.server.logging = false;
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('create returns a Model if one is defined', function (assert) {
  var contact = this.server.create('contact');

  assert.ok(contact instanceof this.Contact, 'expected a Contact');
});

(0, _qunit.test)('createList returns Models if one is defined', function (assert) {
  var contacts = this.server.createList('contact', 1);

  assert.ok(contacts[0] instanceof this.Contact, 'expected a Contactl');
});

(0, _qunit.test)('create returns a Model if one is defined, when using a compound name', function (assert) {
  var contact = this.server.create('amazing-contact');

  assert.ok(contact instanceof this.AmazingContact, 'expected an AmazingContact');
});

(0, _qunit.test)('createList returns Models if one is defined, when using a compound name', function (assert) {
  var contacts = this.server.createList('amazing-contact', 1);

  assert.ok(contacts[0] instanceof this.AmazingContact, 'expected an AmazingContact');
});

(0, _qunit.test)('create falls back to a model if no factory is defined', function (assert) {
  var post = this.server.create('post');

  assert.ok(post instanceof this.Post);
  assert.equal(post.id, 1);
});

(0, _qunit.test)('createList falls back to a model if no factory is defined', function (assert) {
  var posts = this.server.createList('post', 2);

  assert.ok(posts[0] instanceof this.Post);
  assert.equal(posts.length, 2);
  assert.equal(posts[0].id, 1);
});

(0, _qunit.test)('create sets up the db correctly when passing in fks', function (assert) {
  var author = server.create('author');
  var post = this.server.create('post', {
    authorId: author.id
  });

  assert.equal(author.posts.models.length, 1);
  assert.deepEqual(post.author.attrs, author.attrs);
  assert.equal(this.server.db.posts[0].authorId, author.id);
});

(0, _qunit.test)('create sets up the db correctly when passing in models', function (assert) {
  var author = server.create('author');
  var post = this.server.create('post', {
    author: author
  });

  assert.equal(author.posts.models.length, 1);
  assert.deepEqual(post.author.attrs, author.attrs);
  assert.equal(this.server.db.posts[0].authorId, author.id);
});