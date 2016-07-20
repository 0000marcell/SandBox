'use strict';

var _qunit = require('qunit');

var _emberCliMirage = require('ember-cli-mirage');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Server | Factories | afterCreate', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'test',
      models: {
        author: _emberCliMirage.Model,
        post: _emberCliMirage.Model.extend({
          author: (0, _emberCliMirage.belongsTo)()
        }),
        comment: _emberCliMirage.Model.extend({
          post: (0, _emberCliMirage.belongsTo)()
        })
      },
      factories: {
        author: _emberCliMirage.Factory.extend({
          afterCreate: function afterCreate(author, server) {
            author.update({ name: 'Sam' });
            server.create('post', { author: author });
          }
        }),
        post: _emberCliMirage.Factory.extend({
          title: 'Lorem ipsum',
          afterCreate: function afterCreate(post, server) {
            server.create('comment', { post: post });
          }
        }),
        comment: _emberCliMirage.Factory.extend({
          text: 'Yo soy el nino'
        })
      }
    });
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('it works for models', function (assert) {
  var author = this.server.create('author');

  assert.equal(author.name, 'Sam');
  assert.deepEqual(this.server.db.posts.length, 1);
  assert.deepEqual(this.server.db.posts[0], { id: '1', title: 'Lorem ipsum', authorId: '1' });
  assert.deepEqual(this.server.db.comments.length, 1);
  assert.deepEqual(this.server.db.comments[0], { id: '1', text: 'Yo soy el nino', postId: '1' });
});

// test('it works for db records', function(assert) {
// });