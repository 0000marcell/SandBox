define('app4/initializers/md-settings', ['exports', 'app4/config/environment', 'ember-cli-materialize/services/md-settings'], function (exports, _app4ConfigEnvironment, _emberCliMaterializeServicesMdSettings) {
  exports.initialize = initialize;

  function initialize() {
    var materializeDefaults = _app4ConfigEnvironment['default'].materializeDefaults;

    var application = arguments[1] || arguments[0];

    application.register('config:materialize', materializeDefaults, { instantiate: false });
    application.register('service:materialize-settings', _emberCliMaterializeServicesMdSettings['default']);
    application.inject('service:materialize-settings', 'materializeDefaults', 'config:materialize');
  }

  exports['default'] = {
    name: 'md-settings',
    initialize: initialize
  };
});