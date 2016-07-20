'use strict';

var _moduleForAcceptance = require('../helpers/module-for-acceptance');

var _moduleForAcceptance2 = _interopRequireDefault(_moduleForAcceptance);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _moduleForAcceptance2.default)('Acceptance | Serializers', {
  beforeEach: function beforeEach() {
    this.store = this.application.__container__.lookup('service:store');
  }
});

(0, _qunit.test)('Serializers can provide default includes', function (assert) {
  var _this = this;

  var wordSmith = server.create('word-smith');
  server.createList('blog-post', 3, { wordSmithId: wordSmith.id });

  visit('/word-smiths/' + wordSmith.id);

  andThen(function () {
    var wordSmithsInStore = _this.store.peekAll('word-smith');
    var blogPostsInStore = _this.store.peekAll('blog-post');

    assert.equal(wordSmithsInStore.get('length'), 1);
    assert.equal(blogPostsInStore.get('length'), 3);
  });
});