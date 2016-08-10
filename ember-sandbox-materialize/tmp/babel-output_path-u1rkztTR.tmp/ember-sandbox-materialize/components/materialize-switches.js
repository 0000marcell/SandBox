define('ember-sandbox-materialize/components/materialize-switches', ['exports', 'ember', 'ember-sandbox-materialize/components/md-switches'], function (exports, _ember, _emberSandboxMaterializeComponentsMdSwitches) {
  exports['default'] = _emberSandboxMaterializeComponentsMdSwitches['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});