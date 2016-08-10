define('ember-sandbox-materialize/components/materialize-radio', ['exports', 'ember', 'ember-sandbox-materialize/components/md-radio'], function (exports, _ember, _emberSandboxMaterializeComponentsMdRadio) {
  exports['default'] = _emberSandboxMaterializeComponentsMdRadio['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});