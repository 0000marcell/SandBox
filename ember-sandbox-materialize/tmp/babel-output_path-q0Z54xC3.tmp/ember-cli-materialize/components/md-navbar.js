define('ember-cli-materialize/components/md-navbar', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-navbar'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdNavbar) {
  'use strict';

  var $ = _ember['default'].$;
  var computed = _ember['default'].computed;
  var Component = _ember['default'].Component;
  var typeOf = _ember['default'].typeOf;
  var scheduleOnce = _ember['default'].run.scheduleOnce;

  exports['default'] = Component.extend({
    tagName: 'nav',
    layout: _emberCliMaterializeTemplatesComponentsMdNavbar['default'],
    homeRoute: 'index',

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      // TODO: is this scheduling necessary?
      scheduleOnce('afterRender', this, this._setupNavbar);
    },

    _setupNavbar: function _setupNavbar() {
      if (typeOf($('.button-collapse').sideNav) === 'function') {
        this.notifyPropertyChange('_sideNavId');
        this.$('.button-collapse').sideNav({
          closeOnClick: true
        });
      }
    },

    _sideNavId: computed(function () {
      return this.get('element.id') + '-sidenav';
    })

    // TODO: Unregister any listeners that $.sideNav() puts in place
    // _teardownNavbar() {
    //
    // }
  });
});