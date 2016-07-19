define('app4/components/materialize-button-submit', ['exports', 'ember', 'app4/components/md-btn-submit'], function (exports, _ember, _app4ComponentsMdBtnSubmit) {
  exports['default'] = _app4ComponentsMdBtnSubmit['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});