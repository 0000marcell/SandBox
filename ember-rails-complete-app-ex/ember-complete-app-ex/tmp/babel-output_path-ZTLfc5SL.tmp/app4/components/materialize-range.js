define('app4/components/materialize-range', ['exports', 'ember', 'app4/components/md-range'], function (exports, _ember, _app4ComponentsMdRange) {
  exports['default'] = _app4ComponentsMdRange['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-range}} has been deprecated. Please use {{md-range}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});