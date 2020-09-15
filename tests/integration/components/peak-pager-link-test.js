import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | peak-pager-link', function(hooks) {
  setupRenderingTest(hooks);

  test('has attributes', async function(assert) {
    await render(hbs`
      <PeakPagerLink class="foo" @route="index" @query={{hash bar="baz"}}>
        foo
      </PeakPagerLink>
    `);

    assert.equal(this.element.textContent.trim(), 'foo');
    assert.ok(find('a')?.className?.includes('foo'));
  });
});
