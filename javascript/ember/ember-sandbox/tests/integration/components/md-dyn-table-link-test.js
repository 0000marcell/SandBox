import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-dyn-table-link', 'Integration | Component | md dyn table link', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-dyn-table-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-dyn-table-link}}
      template block text
    {{/md-dyn-table-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
