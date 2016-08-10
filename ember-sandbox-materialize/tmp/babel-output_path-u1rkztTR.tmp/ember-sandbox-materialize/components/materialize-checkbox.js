define('ember-sandbox-materialize/components/materialize-checkbox', ['exports', 'ember', 'ember-sandbox-materialize/components/md-check'], function (exports, _ember, _emberSandboxMaterializeComponentsMdCheck) {
  exports['default'] = _emberSandboxMaterializeComponentsMdCheck['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});