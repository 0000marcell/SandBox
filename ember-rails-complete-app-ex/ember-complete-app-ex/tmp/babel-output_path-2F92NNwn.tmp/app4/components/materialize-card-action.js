define('app4/components/materialize-card-action', ['exports', 'ember', 'app4/components/md-card-action'], function (exports, _ember, _app4ComponentsMdCardAction) {
  exports['default'] = _app4ComponentsMdCardAction['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});