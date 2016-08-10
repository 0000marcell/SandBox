define('ember-sandbox-materialize/components/materialize-button-submit', ['exports', 'ember', 'ember-sandbox-materialize/components/md-btn-submit'], function (exports, _ember, _emberSandboxMaterializeComponentsMdBtnSubmit) {
  exports['default'] = _emberSandboxMaterializeComponentsMdBtnSubmit['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});