define('ember-cli-materialize/components/md-btn-dropdown', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-btn-dropdown', 'ember-cli-materialize/components/md-btn'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdBtnDropdown, _emberCliMaterializeComponentsMdBtn) {
  'use strict';

  var scheduleOnce = _ember['default'].run.scheduleOnce;
  var computed = _ember['default'].computed;

  exports['default'] = _emberCliMaterializeComponentsMdBtn['default'].extend({
    layout: _emberCliMaterializeTemplatesComponentsMdBtnDropdown['default'],
    tagName: 'a',
    classNames: ['dropdown-button'],
    icon: 'mdi-navigation-expand-more',
    iconPosition: 'right',
    attributeBindings: ['inDuration', 'outDuration', 'constrainWidth', 'hover', 'gutter', 'belowOrigin'],

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      scheduleOnce('afterRender', this, this._setupDropdown);
    },

    _setupDropdown: function _setupDropdown() {
      // needed until the Materialize.dropdown plugin is replaced
      this.$().attr('data-activates', this.get('_dropdownContentId'));

      this.$().dropdown({
        hover: !!this.getWithDefault('hover', false),
        constrainWidth: !!this.getWithDefault('constrainWidth', true),
        inDuration: this.getWithDefault('inDuration', this.get('_mdSettings.dropdownInDuration')),
        outDuration: this.getWithDefault('outDuration', this.get('_mdSettings.dropdownOutDuration')),
        gutter: this.getWithDefault('gutter', 0),
        belowOrigin: !!this.getWithDefault('belowOrigin', false)
      });
    },
    _dropdownContentId: computed(function () {
      return this.get('elementId') + '-dropdown-content';
    })
  });
});