define('ember-sandbox-materialize/components/materialize-range', ['exports', 'ember', 'ember-sandbox-materialize/components/md-range'], function (exports, _ember, _emberSandboxMaterializeComponentsMdRange) {
  exports['default'] = _emberSandboxMaterializeComponentsMdRange['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-range}} has been deprecated. Please use {{md-range}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});