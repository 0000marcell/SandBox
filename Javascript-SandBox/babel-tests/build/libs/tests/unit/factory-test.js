'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _emberCliMirage = require('ember-cli-mirage');

var _emberCliMirage2 = _interopRequireDefault(_emberCliMirage);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Unit | Factory');

(0, _qunit.test)('it exists', function (assert) {
  assert.ok(_emberCliMirage2.default.Factory);
});

(0, _qunit.test)('the base class builds empty objects', function (assert) {
  var f = new _emberCliMirage2.default.Factory();
  var data = f.build();

  assert.deepEqual(data, {});
});

(0, _qunit.test)('a noop extension builds empty objects', function (assert) {
  var EmptyFactory = _emberCliMirage2.default.Factory.extend();
  var f = new EmptyFactory();
  var data = f.build();

  assert.deepEqual(data, {});
});

(0, _qunit.test)('it works with strings, numbers and booleans', function (assert) {
  var AFactory = _emberCliMirage2.default.Factory.extend({
    name: 'Sam',
    age: 28,
    alive: true
  });

  var f = new AFactory();
  var data = f.build();

  assert.deepEqual(data, { name: 'Sam', age: 28, alive: true });
});

(0, _qunit.test)('it supports inheritance', function (assert) {
  var PersonFactory = _emberCliMirage2.default.Factory.extend({
    species: 'human'
  });
  var ManFactory = PersonFactory.extend({
    gender: 'male'
  });
  var SamFactory = ManFactory.extend({
    name: 'Sam'
  });

  var p = new PersonFactory();
  var m = new ManFactory();
  var s = new SamFactory();

  assert.deepEqual(p.build(), { species: 'human' });
  assert.deepEqual(m.build(), { species: 'human', gender: 'male' });
  assert.deepEqual(s.build(), { species: 'human', gender: 'male', name: 'Sam' });
});

(0, _qunit.test)('it can use sequences', function (assert) {
  var PostFactory = _emberCliMirage2.default.Factory.extend({
    likes: function likes(i) {
      return 5 * i;
    }
  });

  var p = new PostFactory();
  var post1 = p.build(1);
  var post2 = p.build(2);

  assert.deepEqual(post1, { likes: 5 });
  assert.deepEqual(post2, { likes: 10 });
});

(0, _qunit.test)('it can reuse static properties', function (assert) {
  var BazFactory = _emberCliMirage2.default.Factory.extend({
    foo: 5,
    bar: function bar(i) {
      return this.foo * i;
    }
  });

  var b = new BazFactory();
  var baz1 = b.build(1);
  var baz2 = b.build(2);

  assert.deepEqual(baz1, { foo: 5, bar: 5 });
  assert.deepEqual(baz2, { foo: 5, bar: 10 });
});

(0, _qunit.test)('it can reuse dynamic properties', function (assert) {
  var BazFactory = _emberCliMirage2.default.Factory.extend({
    foo: function foo(i) {
      return 5 * i;
    },
    bar: function bar() {
      return this.foo * 2;
    }
  });

  var b = new BazFactory();
  var baz1 = b.build(1);
  var baz2 = b.build(2);

  assert.deepEqual(baz1, { foo: 5, bar: 10 });
  assert.deepEqual(baz2, { foo: 10, bar: 20 });
});

(0, _qunit.test)('it can reference properties out of order', function (assert) {
  var BazFactory = _emberCliMirage2.default.Factory.extend({
    bar: function bar() {
      return this.foo + 2;
    },


    baz: 6,

    foo: function foo(i) {
      return this.baz * i;
    }
  });

  var b = new BazFactory();
  var baz1 = b.build(1);
  var baz2 = b.build(2);

  assert.deepEqual(baz1, { baz: 6, foo: 6, bar: 8 });
  assert.deepEqual(baz2, { baz: 6, foo: 12, bar: 14 });
});

(0, _qunit.test)('it can reference multiple properties in any order', function (assert) {
  var FooFactory = _emberCliMirage2.default.Factory.extend({
    foo: function foo() {
      return this.bar + this.baz;
    },


    bar: 6,

    baz: 10
  });

  var BarFactory = _emberCliMirage2.default.Factory.extend({
    bar: 6,

    foo: function foo() {
      return this.bar + this.baz;
    },


    baz: 10
  });

  var BazFactory = _emberCliMirage2.default.Factory.extend({
    bar: 6,

    baz: 10,

    foo: function foo() {
      return this.bar + this.baz;
    }
  });

  var Foo = new FooFactory();
  var Bar = new BarFactory();
  var Baz = new BazFactory();

  var foo = Foo.build(1);
  var bar = Bar.build(1);
  var baz = Baz.build(1);

  assert.deepEqual(foo, { foo: 16, bar: 6, baz: 10 });
  assert.deepEqual(bar, { foo: 16, bar: 6, baz: 10 });
  assert.deepEqual(baz, { foo: 16, bar: 6, baz: 10 });
});

(0, _qunit.test)('it can reference properties on complex object', function (assert) {
  var AbcFactory = _emberCliMirage2.default.Factory.extend({
    a: function a(i) {
      return this.b + i;
    },
    b: function b() {
      return this.c + 1;
    },
    c: function c() {
      return this.f + 1;
    },
    d: function d(i) {
      return this.e + i;
    },
    e: function e() {
      return this.c + 1;
    },

    f: 1,
    g: 2,
    h: 3
  });

  var b = new AbcFactory();
  var abc1 = b.build(1);
  var abc2 = b.build(2);

  assert.deepEqual(abc1, { a: 4, b: 3, c: 2, d: 4, e: 3, f: 1, g: 2, h: 3 });
  assert.deepEqual(abc2, { a: 5, b: 3, c: 2, d: 5, e: 3, f: 1, g: 2, h: 3 });
});

(0, _qunit.test)('throws meaningfull exception on circular reference', function (assert) {
  var BazFactory = _emberCliMirage2.default.Factory.extend({
    bar: function bar() {
      return this.foo;
    },
    foo: function foo(i) {
      return this.bar;
    }
  });

  var b = new BazFactory();
  assert.throws(function () {
    b.build(1);
  }, function (e) {
    return e.toString() === 'Error: Cyclic dependency in properties ["foo","bar"]';
  });
});

(0, _qunit.test)('#build skips invoking `afterCreate`', function (assert) {
  var skipped = true;
  var PostFactory = _emberCliMirage2.default.Factory.extend({
    afterCreate: function afterCreate() {
      skipped = false;
    }
  });

  var factory = new PostFactory();
  var post = factory.build(0);

  assert.ok(skipped, 'skips invoking `afterCreate`');
  assert.equal(_typeof(post.afterCreate), 'undefined', 'does not build `afterCreate` attribute');
});