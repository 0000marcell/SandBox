define('ember-sandbox-materialize/components/materialize-copyright', ['exports', 'ember', 'ember-sandbox-materialize/components/md-copyright'], function (exports, _ember, _emberSandboxMaterializeComponentsMdCopyright) {
  exports['default'] = _emberSandboxMaterializeComponentsMdCopyright['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});