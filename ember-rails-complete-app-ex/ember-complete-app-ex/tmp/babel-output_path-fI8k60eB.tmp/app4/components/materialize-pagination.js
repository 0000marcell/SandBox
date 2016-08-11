define('app4/components/materialize-pagination', ['exports', 'ember', 'app4/components/md-pagination'], function (exports, _ember, _app4ComponentsMdPagination) {
  exports['default'] = _app4ComponentsMdPagination['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});