define('ember-sandbox-materialize/components/materialize-loader', ['exports', 'ember', 'ember-sandbox-materialize/components/md-loader'], function (exports, _ember, _emberSandboxMaterializeComponentsMdLoader) {
  exports['default'] = _emberSandboxMaterializeComponentsMdLoader['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});