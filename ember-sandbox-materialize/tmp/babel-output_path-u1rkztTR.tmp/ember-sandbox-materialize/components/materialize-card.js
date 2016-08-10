define('ember-sandbox-materialize/components/materialize-card', ['exports', 'ember', 'ember-sandbox-materialize/components/md-card'], function (exports, _ember, _emberSandboxMaterializeComponentsMdCard) {
  exports['default'] = _emberSandboxMaterializeComponentsMdCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card}} has been deprecated. Please use {{md-card}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});