import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-abstract-form', 'Integration | Component | md abstract form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-abstract-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-abstract-form}}
      template block text
    {{/md-abstract-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
