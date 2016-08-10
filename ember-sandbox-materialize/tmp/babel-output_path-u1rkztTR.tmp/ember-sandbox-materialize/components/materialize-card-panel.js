define('ember-sandbox-materialize/components/materialize-card-panel', ['exports', 'ember', 'ember-sandbox-materialize/components/md-card-panel'], function (exports, _ember, _emberSandboxMaterializeComponentsMdCardPanel) {
  exports['default'] = _emberSandboxMaterializeComponentsMdCardPanel['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});