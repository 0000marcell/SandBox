define('ember-sandbox-materialize/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-sandbox-materialize/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberSandboxMaterializeConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emberSandboxMaterializeConfigEnvironment['default'].APP.name, _emberSandboxMaterializeConfigEnvironment['default'].APP.version)
  };
});