define('ember-cli-materialize/components/md-table-col', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-table-col', 'ember-cli-materialize/components/md-table', 'ember-composability/mixins/child-component-support'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdTableCol, _emberCliMaterializeComponentsMdTable, _emberComposabilityMixinsChildComponentSupport) {
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var get = _ember['default'].get;
  var oneWay = _ember['default'].computed.oneWay;

  exports['default'] = Component.extend(_emberComposabilityMixinsChildComponentSupport['default'], {
    _parentComponentTypes: [_emberCliMaterializeComponentsMdTable['default']],
    tagName: 'td',
    layout: _emberCliMaterializeTemplatesComponentsMdTableCol['default'],
    valueBindingPath: null,
    headerComponentName: 'md-default-column-header',
    header: oneWay('valueBindingPath'),
    key: oneWay('valueBindingPath'),
    _value: computed('valueBindingPath', 'row', function () {
      var vbp = this.get('valueBindingPath');
      if (!vbp) {
        return '';
      } else {
        return get(this.get('row'), this.get('valueBindingPath'));
      }
    })
  });
});