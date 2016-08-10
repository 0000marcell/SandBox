define('ember-sandbox-materialize/components/materialize-tabs-tab', ['exports', 'ember', 'ember-sandbox-materialize/components/md-tab'], function (exports, _ember, _emberSandboxMaterializeComponentsMdTab) {
  exports['default'] = _emberSandboxMaterializeComponentsMdTab['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});