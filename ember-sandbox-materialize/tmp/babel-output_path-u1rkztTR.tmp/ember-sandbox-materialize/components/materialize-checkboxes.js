define('ember-sandbox-materialize/components/materialize-checkboxes', ['exports', 'ember', 'ember-sandbox-materialize/components/md-checks'], function (exports, _ember, _emberSandboxMaterializeComponentsMdChecks) {
  exports['default'] = _emberSandboxMaterializeComponentsMdChecks['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});