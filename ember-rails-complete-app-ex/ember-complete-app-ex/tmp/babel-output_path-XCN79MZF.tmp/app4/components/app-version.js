define('app4/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'app4/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _app4ConfigEnvironment) {

  var name = _app4ConfigEnvironment['default'].APP.name;
  var version = _app4ConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});