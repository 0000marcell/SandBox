define('ember-sandbox-materialize/components/materialize-card-content', ['exports', 'ember', 'ember-sandbox-materialize/components/md-card-content'], function (exports, _ember, _emberSandboxMaterializeComponentsMdCardContent) {
  exports['default'] = _emberSandboxMaterializeComponentsMdCardContent['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});