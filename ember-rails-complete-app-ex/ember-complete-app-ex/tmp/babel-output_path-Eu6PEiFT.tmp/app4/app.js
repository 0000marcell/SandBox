define('app4/app', ['exports', 'ember', 'app4/resolver', 'ember-load-initializers', 'app4/config/environment'], function (exports, _ember, _app4Resolver, _emberLoadInitializers, _app4ConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _app4ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _app4ConfigEnvironment['default'].podModulePrefix,
    Resolver: _app4Resolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _app4ConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});