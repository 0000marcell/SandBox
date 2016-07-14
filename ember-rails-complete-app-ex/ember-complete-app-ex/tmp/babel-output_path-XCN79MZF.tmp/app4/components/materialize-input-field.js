define('app4/components/materialize-input-field', ['exports', 'ember', 'app4/components/md-input-field'], function (exports, _ember, _app4ComponentsMdInputField) {
  exports['default'] = _app4ComponentsMdInputField['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});