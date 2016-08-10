define('ember-sandbox-materialize/components/materialize-card-reveal', ['exports', 'ember', 'ember-sandbox-materialize/components/md-card-reveal'], function (exports, _ember, _emberSandboxMaterializeComponentsMdCardReveal) {
  exports['default'] = _emberSandboxMaterializeComponentsMdCardReveal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});