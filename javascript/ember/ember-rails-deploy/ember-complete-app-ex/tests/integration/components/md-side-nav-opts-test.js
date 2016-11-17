import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-side-nav-opts', 'Integration | Component | md side nav opts', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-side-nav-opts}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-side-nav-opts}}
      template block text
    {{/md-side-nav-opts}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
