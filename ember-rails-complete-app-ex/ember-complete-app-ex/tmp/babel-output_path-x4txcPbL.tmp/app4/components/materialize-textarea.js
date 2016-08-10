define('app4/components/materialize-textarea', ['exports', 'ember', 'app4/components/md-textarea'], function (exports, _ember, _app4ComponentsMdTextarea) {
  exports['default'] = _app4ComponentsMdTextarea['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});