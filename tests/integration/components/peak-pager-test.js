import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { findAll, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | peak-pager', function(hooks) {
  setupRenderingTest(hooks);

  test('front', async function(assert) {
    await render(hbs`
      <PeakPager @page="7" @total="30" @route="" as |Pages Back Forward isBackEnabled isForwardEnabled|>
        {{#let (if isBackEnabled "back" "disabled")
               (if isForwardEnabled "forward" "disabled") as |backClass forwardClass|}}
          <nav>
            <ul>
              <li class="{{backClass}}">
                <Back>
                  &laquo;
                </Back>
              </li>
              <Pages as |number Page isCurrentPage isTruncated|>
                {{#if isTruncated}}
                  <li>
                    ...
                  </li>
                {{else}}
                  <li class="{{if isCurrentPage 'active' ''}}">
                    <Page>
                      {{number}}
                    </Page>
                  </li>
                {{/if}}
              </Pages>
              <li class="{{forwardClass}}">
                <Forward>
                  &raquo;
                </Forward>
              </li>
            </ul>
          </nav>
        {{/let}}
      </PeakPager>
    `);

    const [item01,
           item02,
           item03,
           item04,
           item05,
           item06,
           item07,
           item08,
           item09,
           item10,
           item11,
           item12,
           item13,
           item14,
           item15] = Array.from(findAll('li'));

    assert.equal(item01.className, 'back');
    assert.equal(item01.textContent.trim(), '«');
    assert.equal(item02.className, '');
    assert.equal(item02.textContent.trim(), '1');
    assert.equal(item03.className, '');
    assert.equal(item03.textContent.trim(), '2');
    assert.equal(item04.className, '');
    assert.equal(item04.textContent.trim(), '3');
    assert.equal(item05.className, '');
    assert.equal(item05.textContent.trim(), '4');
    assert.equal(item06.className, '');
    assert.equal(item06.textContent.trim(), '5');
    assert.equal(item07.className, '');
    assert.equal(item07.textContent.trim(), '6');
    assert.equal(item08.className, 'active');
    assert.equal(item08.textContent.trim(), '7');
    assert.equal(item09.className, '');
    assert.equal(item09.textContent.trim(), '8');
    assert.equal(item10.className, '');
    assert.equal(item10.textContent.trim(), '9');
    assert.equal(item11.className, '');
    assert.equal(item11.textContent.trim(), '10');
    assert.equal(item12.className, '');
    assert.equal(item12.textContent.trim(), '11');
    assert.equal(item13.className, '');
    assert.equal(item13.textContent.trim(), '...');
    assert.equal(item14.className, '');
    assert.equal(item14.textContent.trim(), '30');
    assert.equal(item15.className, 'forward');
    assert.equal(item15.textContent.trim(), '»');
  });

  test('middle', async function(assert) {
    await render(hbs`
      <PeakPager @page="8" @total="30" @route="" as |Pages Back Forward isBackEnabled isForwardEnabled|>
        {{#let (if isBackEnabled "back" "disabled")
               (if isForwardEnabled "forward" "disabled") as |backClass forwardClass|}}
          <nav>
            <ul>
              <li class="{{backClass}}">
                <Back>
                  &laquo;
                </Back>
              </li>
              <Pages as |number Page isCurrentPage isTruncated|>
                {{#if isTruncated}}
                  <li>
                    ...
                  </li>
                {{else}}
                  <li class="{{if isCurrentPage 'active' ''}}">
                    <Page>
                      {{number}}
                    </Page>
                  </li>
                {{/if}}
              </Pages>
              <li class="{{forwardClass}}">
                <Forward>
                  &raquo;
                </Forward>
              </li>
            </ul>
          </nav>
        {{/let}}
      </PeakPager>
    `);

    const [item01,
           item02,
           item03,
           item04,
           item05,
           item06,
           item07,
           item08,
           item09,
           item10,
           item11,
           item12,
           item13,
           item14,
           item15] = Array.from(findAll('li'));

    assert.equal(item01.className, 'back');
    assert.equal(item01.textContent.trim(), '«');
    assert.equal(item02.className, '');
    assert.equal(item02.textContent.trim(), '1');
    assert.equal(item03.className, '');
    assert.equal(item03.textContent.trim(), '...');
    assert.equal(item04.className, '');
    assert.equal(item04.textContent.trim(), '4');
    assert.equal(item05.className, '');
    assert.equal(item05.textContent.trim(), '5');
    assert.equal(item06.className, '');
    assert.equal(item06.textContent.trim(), '6');
    assert.equal(item07.className, '');
    assert.equal(item07.textContent.trim(), '7');
    assert.equal(item08.className, 'active');
    assert.equal(item08.textContent.trim(), '8');
    assert.equal(item09.className, '');
    assert.equal(item09.textContent.trim(), '9');
    assert.equal(item10.className, '');
    assert.equal(item10.textContent.trim(), '10');
    assert.equal(item11.className, '');
    assert.equal(item11.textContent.trim(), '11');
    assert.equal(item12.className, '');
    assert.equal(item12.textContent.trim(), '12');
    assert.equal(item13.className, '');
    assert.equal(item13.textContent.trim(), '...');
    assert.equal(item14.className, '');
    assert.equal(item14.textContent.trim(), '30');
    assert.equal(item15.className, 'forward');
    assert.equal(item15.textContent.trim(), '»');
  });

  test('back', async function(assert) {
    await render(hbs`
      <PeakPager @page="26" @total="30" @route="" as |Pages Back Forward isBackEnabled isForwardEnabled|>
        {{#let (if isBackEnabled "back" "disabled")
               (if isForwardEnabled "forward" "disabled") as |backClass forwardClass|}}
          <nav>
            <ul>
              <li class="{{backClass}}">
                <Back>
                  &laquo;
                </Back>
              </li>
              <Pages as |number Page isCurrentPage isTruncated|>
                {{#if isTruncated}}
                  <li>
                    ...
                  </li>
                {{else}}
                  <li class="{{if isCurrentPage 'active' ''}}">
                    <Page>
                      {{number}}
                    </Page>
                  </li>
                {{/if}}
              </Pages>
              <li class="{{forwardClass}}">
                <Forward>
                  &raquo;
                </Forward>
              </li>
            </ul>
          </nav>
        {{/let}}
      </PeakPager>
    `);

    const [item01,
           item02,
           item03,
           item04,
           item05,
           item06,
           item07,
           item08,
           item09,
           item10,
           item11,
           item12,
           item13,
           item14] = Array.from(findAll('li'));

    assert.equal(item01.className, 'back');
    assert.equal(item01.textContent.trim(), '«');
    assert.equal(item02.className, '');
    assert.equal(item02.textContent.trim(), '1');
    assert.equal(item03.className, '');
    assert.equal(item03.textContent.trim(), '...');
    assert.equal(item04.className, '');
    assert.equal(item04.textContent.trim(), '21');
    assert.equal(item05.className, '');
    assert.equal(item05.textContent.trim(), '22');
    assert.equal(item06.className, '');
    assert.equal(item06.textContent.trim(), '23');
    assert.equal(item07.className, '');
    assert.equal(item07.textContent.trim(), '24');
    assert.equal(item08.className, '');
    assert.equal(item08.textContent.trim(), '25');
    assert.equal(item09.className, 'active');
    assert.equal(item09.textContent.trim(), '26');
    assert.equal(item10.className, '');
    assert.equal(item10.textContent.trim(), '27');
    assert.equal(item11.className, '');
    assert.equal(item11.textContent.trim(), '28');
    assert.equal(item12.className, '');
    assert.equal(item12.textContent.trim(), '29');
    assert.equal(item13.className, '');
    assert.equal(item13.textContent.trim(), '30');
    assert.equal(item14.className, 'forward');
    assert.equal(item14.textContent.trim(), '»');
  });
});
