define('ember-sandbox-materialize/components/materialize-input', ['exports', 'ember', 'ember-sandbox-materialize/components/md-input'], function (exports, _ember, _emberSandboxMaterializeComponentsMdInput) {
  exports['default'] = _emberSandboxMaterializeComponentsMdInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input}} has been deprecated. Please use {{md-input}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});