define('ember-sandbox-materialize/components/materialize-input-field', ['exports', 'ember', 'ember-sandbox-materialize/components/md-input-field'], function (exports, _ember, _emberSandboxMaterializeComponentsMdInputField) {
  exports['default'] = _emberSandboxMaterializeComponentsMdInputField['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});