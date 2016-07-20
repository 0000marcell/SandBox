define('app4/components/materialize-collapsible', ['exports', 'ember', 'app4/components/md-collapsible'], function (exports, _ember, _app4ComponentsMdCollapsible) {
  exports['default'] = _app4ComponentsMdCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});