define('ember-sandbox-materialize/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ember-sandbox-materialize/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emberSandboxMaterializeConfigEnvironment) {

  var name = _emberSandboxMaterializeConfigEnvironment['default'].APP.name;
  var version = _emberSandboxMaterializeConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});