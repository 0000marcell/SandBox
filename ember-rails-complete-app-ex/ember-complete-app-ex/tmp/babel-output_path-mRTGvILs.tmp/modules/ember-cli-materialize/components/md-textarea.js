import InputField from './md-input-field';
import layout from '../templates/components/md-textarea';

export default InputField.extend({
  layout: layout,

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    // make sure the label moves when a value is bound.
    this._setupLabel();
  }
});