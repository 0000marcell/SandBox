define('ember-sandbox-materialize/components/materialize-button', ['exports', 'ember', 'ember-sandbox-materialize/components/md-btn'], function (exports, _ember, _emberSandboxMaterializeComponentsMdBtn) {
  exports['default'] = _emberSandboxMaterializeComponentsMdBtn['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});