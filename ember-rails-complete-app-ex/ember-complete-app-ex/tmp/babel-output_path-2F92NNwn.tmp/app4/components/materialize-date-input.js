define('app4/components/materialize-date-input', ['exports', 'ember', 'app4/components/md-input-date'], function (exports, _ember, _app4ComponentsMdInputDate) {
  exports['default'] = _app4ComponentsMdInputDate['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});