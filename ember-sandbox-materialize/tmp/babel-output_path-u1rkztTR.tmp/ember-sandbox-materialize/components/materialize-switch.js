define('ember-sandbox-materialize/components/materialize-switch', ['exports', 'ember', 'ember-sandbox-materialize/components/md-switch'], function (exports, _ember, _emberSandboxMaterializeComponentsMdSwitch) {
  exports['default'] = _emberSandboxMaterializeComponentsMdSwitch['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});