import MaterializeInputField from './md-input-field';
import layout from '../templates/components/md-input';

export default MaterializeInputField.extend({
  layout: layout,
  type: 'text',

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    // make sure the label moves when a value is bound.
    this._setupLabel();
  }
});