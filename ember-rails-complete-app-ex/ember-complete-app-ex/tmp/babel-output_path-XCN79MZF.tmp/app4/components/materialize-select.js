define('app4/components/materialize-select', ['exports', 'ember', 'app4/components/md-select'], function (exports, _ember, _app4ComponentsMdSelect) {
  exports['default'] = _app4ComponentsMdSelect['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-select}} has been deprecated. Please use {{md-select}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});