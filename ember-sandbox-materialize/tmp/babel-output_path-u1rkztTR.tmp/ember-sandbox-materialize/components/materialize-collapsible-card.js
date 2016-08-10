define('ember-sandbox-materialize/components/materialize-collapsible-card', ['exports', 'ember', 'ember-sandbox-materialize/components/md-card-collapsible'], function (exports, _ember, _emberSandboxMaterializeComponentsMdCardCollapsible) {
  exports['default'] = _emberSandboxMaterializeComponentsMdCardCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});