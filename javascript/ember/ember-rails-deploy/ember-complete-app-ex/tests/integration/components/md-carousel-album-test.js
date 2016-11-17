import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-carousel-album', 'Integration | Component | md carousel album', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-carousel-album}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-carousel-album}}
      template block text
    {{/md-carousel-album}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
