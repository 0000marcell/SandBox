define('app4/components/materialize-checkboxes', ['exports', 'ember', 'app4/components/md-checks'], function (exports, _ember, _app4ComponentsMdChecks) {
  exports['default'] = _app4ComponentsMdChecks['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});