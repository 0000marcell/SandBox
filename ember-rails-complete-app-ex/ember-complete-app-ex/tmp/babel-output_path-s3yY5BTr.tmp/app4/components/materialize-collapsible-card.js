define('app4/components/materialize-collapsible-card', ['exports', 'ember', 'app4/components/md-card-collapsible'], function (exports, _ember, _app4ComponentsMdCardCollapsible) {
  exports['default'] = _app4ComponentsMdCardCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});