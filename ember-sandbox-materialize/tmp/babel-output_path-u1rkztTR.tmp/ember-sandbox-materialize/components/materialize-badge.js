define('ember-sandbox-materialize/components/materialize-badge', ['exports', 'ember', 'ember-sandbox-materialize/components/md-badge'], function (exports, _ember, _emberSandboxMaterializeComponentsMdBadge) {
  exports['default'] = _emberSandboxMaterializeComponentsMdBadge['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});