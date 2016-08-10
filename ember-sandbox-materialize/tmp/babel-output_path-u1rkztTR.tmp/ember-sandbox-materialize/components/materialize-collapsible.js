define('ember-sandbox-materialize/components/materialize-collapsible', ['exports', 'ember', 'ember-sandbox-materialize/components/md-collapsible'], function (exports, _ember, _emberSandboxMaterializeComponentsMdCollapsible) {
  exports['default'] = _emberSandboxMaterializeComponentsMdCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});