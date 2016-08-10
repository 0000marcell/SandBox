define('ember-sandbox-materialize/components/materialize-pagination', ['exports', 'ember', 'ember-sandbox-materialize/components/md-pagination'], function (exports, _ember, _emberSandboxMaterializeComponentsMdPagination) {
  exports['default'] = _emberSandboxMaterializeComponentsMdPagination['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});