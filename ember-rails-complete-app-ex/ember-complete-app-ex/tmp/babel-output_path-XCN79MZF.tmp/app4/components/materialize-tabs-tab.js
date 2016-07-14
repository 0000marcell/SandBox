define('app4/components/materialize-tabs-tab', ['exports', 'ember', 'app4/components/md-tab'], function (exports, _ember, _app4ComponentsMdTab) {
  exports['default'] = _app4ComponentsMdTab['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});