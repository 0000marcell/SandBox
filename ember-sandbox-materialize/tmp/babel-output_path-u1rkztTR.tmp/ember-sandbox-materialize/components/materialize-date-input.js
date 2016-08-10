define('ember-sandbox-materialize/components/materialize-date-input', ['exports', 'ember', 'ember-sandbox-materialize/components/md-input-date'], function (exports, _ember, _emberSandboxMaterializeComponentsMdInputDate) {
  exports['default'] = _emberSandboxMaterializeComponentsMdInputDate['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});