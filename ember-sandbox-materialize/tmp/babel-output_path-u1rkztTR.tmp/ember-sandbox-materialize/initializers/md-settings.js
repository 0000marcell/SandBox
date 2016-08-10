define('ember-sandbox-materialize/initializers/md-settings', ['exports', 'ember-sandbox-materialize/config/environment', 'ember-cli-materialize/services/md-settings'], function (exports, _emberSandboxMaterializeConfigEnvironment, _emberCliMaterializeServicesMdSettings) {
  exports.initialize = initialize;

  function initialize() {
    var materializeDefaults = _emberSandboxMaterializeConfigEnvironment['default'].materializeDefaults;

    var application = arguments[1] || arguments[0];

    if (window && window.validate_field) {
      window.validate_field = function () {};
    }

    application.register('config:materialize', materializeDefaults, { instantiate: false });
    application.register('service:materialize-settings', _emberCliMaterializeServicesMdSettings['default']);
    application.inject('service:materialize-settings', 'materializeDefaults', 'config:materialize');
  }

  exports['default'] = {
    name: 'md-settings',
    initialize: initialize
  };
});