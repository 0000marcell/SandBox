'use strict';

var _moduleForAcceptance = require('../helpers/module-for-acceptance');

var _moduleForAcceptance2 = _interopRequireDefault(_moduleForAcceptance);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _moduleForAcceptance2.default)('Acceptance | Fixtures', {
  beforeEach: function beforeEach() {
    this.store = this.application.__container__.lookup('service:store');
  }
});

(0, _qunit.test)('I can use fixtures', function (assert) {
  var _this = this;

  server.loadFixtures();

  visit('/word-smiths/1');

  andThen(function () {
    var wordSmithsInStore = _this.store.peekAll('word-smith');
    var blogPostsInStore = _this.store.peekAll('blog-post');

    assert.equal(wordSmithsInStore.get('length'), 1);
    assert.equal(blogPostsInStore.get('length'), 3);
  });
});

(0, _qunit.test)('I can use fixtures with the filename api', function (assert) {
  var _this2 = this;

  server.loadFixtures('word-smiths', 'blog-posts');

  visit('/word-smiths/1');

  andThen(function () {
    var wordSmithsInStore = _this2.store.peekAll('word-smith');
    var blogPostsInStore = _this2.store.peekAll('blog-post');

    assert.equal(wordSmithsInStore.get('length'), 1);
    assert.equal(blogPostsInStore.get('length'), 3);
  });
});