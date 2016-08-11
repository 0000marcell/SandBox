define('ember-cli-materialize/components/md-tab', ['exports', 'ember', 'ember-composability/mixins/child-component-support', 'ember-cli-materialize/components/md-tabs', 'ember-cli-materialize/templates/components/md-tab'], function (exports, _ember, _emberComposabilityMixinsChildComponentSupport, _emberCliMaterializeComponentsMdTabs, _emberCliMaterializeTemplatesComponentsMdTab) {
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var oneWay = _ember['default'].computed.oneWay;

  exports['default'] = Component.extend(_emberComposabilityMixinsChildComponentSupport['default'], {
    _parentComponentTypes: [_emberCliMaterializeComponentsMdTabs['default']],
    tagName: 'li',
    layout: _emberCliMaterializeTemplatesComponentsMdTab['default'],

    classNames: ['materialize-tabs-tab', 'tab', 'col'],
    classNameBindings: ['_colClass'],

    colWidth: oneWay('composableParent.colWidth'),

    _colClass: computed('colWidth', function () {
      return 's' + this.get('colWidth');
    }),

    active: computed('composableParent.composableChildren.[]', 'composableParent.selected', 'value', function () {
      var selected = this.get('composableParent.selected');
      if (selected) {
        return selected === this.get('value');
      } else {
        var values = this.get('composableParent').tabComponents().map(function (t) {
          return t.get('value');
        });
        return values.indexOf(this.get('value')) === 0;
      }
    }).readOnly(),

    click: function click() {
      this.get('composableParent').set('selected', this.get('value'));
    }

  });
});