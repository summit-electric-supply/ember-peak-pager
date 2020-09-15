import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { findAll, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | peak-pager-segments', function(hooks) {
  setupRenderingTest(hooks);

  test('iteration', async function(assert) {
    this.pages = [
      {
        isCurrentPage: false,
        isTruncated: false,
        page: 1,
      },
      {
        isCurrentPage: false,
        isTruncated: true,
        page: 2,
      },
      {
        isCurrentPage: true,
        isTruncated: false,
        page: 3,
      },
      {
        isCurrentPage: false,
        isTruncated: true,
        page: 4,
      },
      {
        isCurrentPage: false,
        isTruncated: false,
        page: 5,
      },
    ];

    await render(hbs`
      <ul>
        <PeakPagerSegments @pages={{this.pages}} @route="" as |number Page isCurrentPage isTruncated|>
          <li class="{{if isCurrentPage 'active'}}">{{if isTruncated '...' number}}</li>
        </PeakPagerSegments>
      </ul>
    `);

    const [item1,
           item2,
           item3,
           item4,
           item5] = Array.from(findAll('li'));

    assert.equal(item1.className, '');
    assert.equal(item1.textContent.trim(), '1');
    assert.equal(item2.className, '');
    assert.equal(item2.textContent.trim(), '...');
    assert.equal(item3.className, 'active');
    assert.equal(item3.textContent.trim(), '3');
    assert.equal(item4.className, '');
    assert.equal(item4.textContent.trim(), '...');
    assert.equal(item5.className, '');
    assert.equal(item5.textContent.trim(), '5');
  });
});
