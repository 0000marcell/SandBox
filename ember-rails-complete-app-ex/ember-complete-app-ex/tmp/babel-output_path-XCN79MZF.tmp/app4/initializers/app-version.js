define('app4/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'app4/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _app4ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_app4ConfigEnvironment['default'].APP.name, _app4ConfigEnvironment['default'].APP.version)
  };
});