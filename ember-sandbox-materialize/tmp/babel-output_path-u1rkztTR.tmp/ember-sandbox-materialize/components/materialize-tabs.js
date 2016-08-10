define('ember-sandbox-materialize/components/materialize-tabs', ['exports', 'ember', 'ember-sandbox-materialize/components/md-tabs'], function (exports, _ember, _emberSandboxMaterializeComponentsMdTabs) {
  exports['default'] = _emberSandboxMaterializeComponentsMdTabs['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});