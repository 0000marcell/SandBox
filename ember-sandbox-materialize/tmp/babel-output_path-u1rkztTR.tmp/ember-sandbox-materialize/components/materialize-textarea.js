define('ember-sandbox-materialize/components/materialize-textarea', ['exports', 'ember', 'ember-sandbox-materialize/components/md-textarea'], function (exports, _ember, _emberSandboxMaterializeComponentsMdTextarea) {
  exports['default'] = _emberSandboxMaterializeComponentsMdTextarea['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});