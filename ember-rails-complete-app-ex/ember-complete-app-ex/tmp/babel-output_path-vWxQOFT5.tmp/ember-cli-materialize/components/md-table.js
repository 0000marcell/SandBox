define('ember-cli-materialize/components/md-table', ['exports', 'ember', 'ember-composability/mixins/parent-component-support', 'ember-cli-materialize/templates/components/md-table'], function (exports, _ember, _emberComposabilityMixinsParentComponentSupport, _emberCliMaterializeTemplatesComponentsMdTable) {
  'use strict';

  var A = _ember['default'].A;
  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;

  exports['default'] = Component.extend(_emberComposabilityMixinsParentComponentSupport['default'], {
    tagName: 'table',
    layout: _emberCliMaterializeTemplatesComponentsMdTable['default'],
    columns: null,
    composableChildrenDebounceTime: 1,
    init: function init() {
      this._super.apply(this, arguments);
      this.set('columns', _ember['default'].A());
    },

    columnComponents: computed('composableChildren', function () {
      return new A(this.get('composableChildren'));
    }).readOnly(),

    registerChildComponent: function registerChildComponent(childComponent) {
      this.get('_childComponents').add(childComponent, childComponent.get('key'));
      this._notifyComposableChildrenChanged();
    },

    unregisterChildComponent: function unregisterChildComponent(childComponent) {
      this.get('_childComponents')['delete'](childComponent, childComponent.get('key'));
      this._notifyComposableChildrenChanged();
    }
  });
});