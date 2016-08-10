define('ember-sandbox-materialize/components/materialize-select', ['exports', 'ember', 'ember-sandbox-materialize/components/md-select'], function (exports, _ember, _emberSandboxMaterializeComponentsMdSelect) {
  exports['default'] = _emberSandboxMaterializeComponentsMdSelect['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-select}} has been deprecated. Please use {{md-select}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});