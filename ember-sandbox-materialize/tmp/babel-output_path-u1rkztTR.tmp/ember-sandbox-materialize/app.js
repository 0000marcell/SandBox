define('ember-sandbox-materialize/app', ['exports', 'ember', 'ember-sandbox-materialize/resolver', 'ember-load-initializers', 'ember-sandbox-materialize/config/environment'], function (exports, _ember, _emberSandboxMaterializeResolver, _emberLoadInitializers, _emberSandboxMaterializeConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberSandboxMaterializeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberSandboxMaterializeConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberSandboxMaterializeResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberSandboxMaterializeConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});