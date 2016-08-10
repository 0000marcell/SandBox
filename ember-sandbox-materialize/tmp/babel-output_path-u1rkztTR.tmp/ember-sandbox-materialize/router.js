define('ember-sandbox-materialize/router', ['exports', 'ember', 'ember-sandbox-materialize/config/environment'], function (exports, _ember, _emberSandboxMaterializeConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberSandboxMaterializeConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});