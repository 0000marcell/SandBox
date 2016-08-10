define('ember-sandbox-materialize/components/materialize-card-action', ['exports', 'ember', 'ember-sandbox-materialize/components/md-card-action'], function (exports, _ember, _emberSandboxMaterializeComponentsMdCardAction) {
  exports['default'] = _emberSandboxMaterializeComponentsMdCardAction['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});