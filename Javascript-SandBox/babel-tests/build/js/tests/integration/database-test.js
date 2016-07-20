'use strict';

var _qunit = require('qunit');

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

var _emberCliMirage = require('ember-cli-mirage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Database', {
  beforeEach: function beforeEach() {
    this.server = new _server2.default({
      environment: 'development',
      scenarios: {
        default: function _default() {}
      },
      models: {
        author: _emberCliMirage.Model
      },
      factories: {
        author: _emberCliMirage.Factory
      },
      fixtures: {
        authors: [{ id: 1, name: 'Zelda' }]
      }
    });
  },
  afterEach: function afterEach() {
    this.server.shutdown();
  }
});

(0, _qunit.test)('[regression] When loaded, fixture files correctly update the database\'s autoincrement id', function (assert) {
  this.server.loadFixtures();

  this.server.schema.authors.create({});

  var authors = this.server.db.authors;

  assert.equal(authors.length, 2);
  assert.deepEqual(authors.map(function (a) {
    return a.id;
  }), ['1', '2']);
});