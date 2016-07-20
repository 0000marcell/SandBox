'use strict';

var _qunit = require('qunit');

var _emberCliMirage = require('ember-cli-mirage');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Server with ORM', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'test',
      models: {
        blogPost: _emberCliMirage.Model
      },
      factories: {
        blogPost: _emberCliMirage.Factory
      }
    });
    this.server.timing = 0;
    this.server.logging = false;
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('a single blogPost db collection is made', function (assert) {
  assert.equal(this.server.db._collections.length, 1);
  assert.equal(this.server.db._collections[0].name, 'blogPosts');
});

(0, _qunit.test)('create looks up the appropriate db collection', function (assert) {
  server.create('blog-post');

  assert.equal(this.server.db.blogPosts.length, 1);
});