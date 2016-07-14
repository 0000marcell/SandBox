define('ember-cli-materialize/components/md-textarea', ['exports', 'ember-cli-materialize/components/md-input-field', 'ember-cli-materialize/templates/components/md-textarea'], function (exports, _emberCliMaterializeComponentsMdInputField, _emberCliMaterializeTemplatesComponentsMdTextarea) {
  'use strict';

  exports['default'] = _emberCliMaterializeComponentsMdInputField['default'].extend({
    layout: _emberCliMaterializeTemplatesComponentsMdTextarea['default'],

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      // make sure the label moves when a value is bound.
      this._setupLabel();
    }
  });
});