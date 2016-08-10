define('app4/tests/test-helper', ['exports', 'app4/tests/helpers/resolver', 'ember-qunit'], function (exports, _app4TestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_app4TestsHelpersResolver['default']);
});