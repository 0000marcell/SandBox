define('ember-cli-materialize/components/md-copyright', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-copyright'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdCopyright) {
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var assert = _ember['default'].assert;

  exports['default'] = Component.extend({
    layout: _emberCliMaterializeTemplatesComponentsMdCopyright['default'],
    classNames: ['footer-copyright'],

    init: function init() {
      this._super.apply(this, arguments);
      assert('Property startYear must be less than or equal to the current year.', this.get('startYear') === null || this.get('startYear') <= new Date().getFullYear());
    },

    startYear: null,
    text: null,

    date: computed(function () {
      var currentYear = new Date().getFullYear();
      var startYear = this.get('startYear');

      if (startYear === null || startYear === currentYear) {
        return '' + currentYear;
      } else {
        return startYear + ' - ' + currentYear;
      }
    })
  });
});