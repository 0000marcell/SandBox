define('app4/components/materialize-switch', ['exports', 'ember', 'app4/components/md-switch'], function (exports, _ember, _app4ComponentsMdSwitch) {
  exports['default'] = _app4ComponentsMdSwitch['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});