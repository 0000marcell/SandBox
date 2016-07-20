'use strict';

var _qunit = require('qunit');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Server #loadFixtures', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'development',
      scenarios: {
        default: function _default() {}
      },
      factories: {
        author: {},
        post: {},
        comment: {}
      },
      fixtures: {
        authors: [{ id: 1, name: 'Zelda' }, { id: 2, name: 'Link' }],
        posts: [{ id: 1, title: 'Lorem' }, { id: 2, title: 'Ipsum' }],
        comments: [{ id: 1, title: 'Lorem' }]
      }
    });
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('it can load all fixtures in the map', function (assert) {
  this.server.loadFixtures();

  assert.equal(this.server.db.authors.length, 2);
  assert.equal(this.server.db.posts.length, 2);
  assert.equal(this.server.db.comments.length, 1);
});

(0, _qunit.test)('it can load a single named fixture file', function (assert) {
  this.server.loadFixtures('authors');

  assert.equal(this.server.db.authors.length, 2);
  assert.equal(this.server.db.posts.length, 0);
  assert.equal(this.server.db.comments.length, 0);
});

(0, _qunit.test)('it can load several named single fixtures', function (assert) {
  this.server.loadFixtures('authors', 'posts');

  assert.equal(this.server.db.authors.length, 2);
  assert.equal(this.server.db.posts.length, 2);
  assert.equal(this.server.db.comments.length, 0);
});