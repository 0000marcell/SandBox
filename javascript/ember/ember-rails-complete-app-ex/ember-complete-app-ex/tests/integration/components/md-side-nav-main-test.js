import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-side-nav-main', 'Integration | Component | md side nav main', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-side-nav-main}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-side-nav-main}}
      template block text
    {{/md-side-nav-main}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
