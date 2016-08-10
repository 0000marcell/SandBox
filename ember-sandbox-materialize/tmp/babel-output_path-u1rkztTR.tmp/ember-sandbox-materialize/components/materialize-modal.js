define('ember-sandbox-materialize/components/materialize-modal', ['exports', 'ember', 'ember-sandbox-materialize/components/md-modal'], function (exports, _ember, _emberSandboxMaterializeComponentsMdModal) {
  exports['default'] = _emberSandboxMaterializeComponentsMdModal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});