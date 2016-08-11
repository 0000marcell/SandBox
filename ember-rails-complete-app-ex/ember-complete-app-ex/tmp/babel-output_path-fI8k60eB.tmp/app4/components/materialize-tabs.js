define('app4/components/materialize-tabs', ['exports', 'ember', 'app4/components/md-tabs'], function (exports, _ember, _app4ComponentsMdTabs) {
  exports['default'] = _app4ComponentsMdTabs['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});