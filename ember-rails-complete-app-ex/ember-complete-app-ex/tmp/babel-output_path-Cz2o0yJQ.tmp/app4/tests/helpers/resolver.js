define('app4/tests/helpers/resolver', ['exports', 'app4/resolver', 'app4/config/environment'], function (exports, _app4Resolver, _app4ConfigEnvironment) {

  var resolver = _app4Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: _app4ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _app4ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});