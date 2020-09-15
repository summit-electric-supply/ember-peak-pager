import Component from '@glimmer/component';

export default class PeakPagerComponent extends Component {
  /**
   * The current page.
   */
  get page() {
    return parseInt(`${this.args.page || 1}`);
  }

  /**
   * The maximum amount of pages to show.
   */
  get show() {
    return parseInt(`${this.args.show || 10}`);
  }

  /**
   * The total amount of pages.
   */
  get total() {
    return parseInt(`${this.args.total || 0}`);
  }

  /**
   * The internal segments object.
   *
   * Based on https://github.com/mharris717/ember-cli-pagination/blob/master/addon/lib/truncate-pages.js
   */
  get segments() {
    let segments = [];

    let before = parseInt(this.show / 2);

    if ((this.page - before) < 1) {
      before = this.page - 1;
    }

    let after = this.show - before - 1;

    if ((this.total - this.page) < after) {
      after = this.total - this.page;
      before = this.show - after - 1;
    }

    if ((this.page - before) < 2) {
      after++;
    }

    if ((this.total - this.page - 1) < after) {
      before++;
    }

    for (let i = before; i > 0; i--) {
      const segment = this.page - i;

      if (segment > 0 && segment <= this.total) {
        segments.push(segment);
      }
    }

    segments.push(this.page);

    for (let i = 1; i <= after; i++) {
      const segment = this.page + i;

      if (segment > 0 && segment <= this.total) {
        segments.push(segment);
      }
    }

    if (segments.length > 0) {
      if (segments[0] !== 1) {
        segments.unshift(1);
      }

      if (segments[segments.length - 1] !== this.total && this.total !== 0) {
        segments.push(this.total - 1, this.total);
      }
    }

    return segments;
  }

  /**
   * Pages array.
   *
   * Based on https://github.com/mharris717/ember-cli-pagination/blob/master/addon/lib/page-items.js
   */
  get pages() {
    const segments = this.segments;
    let next = segments[0];


    return segments.map(page => {
      const isCurrentPage = (this.page === page);
      const isTruncated = (next !== page);

      next = page + 1;

      return {
        isCurrentPage,
        isTruncated,
        page,
      };
    });
  }

  get nextPage() {
    return this.page + 1;
  }

  get previousPage() {
    return this.page - 1;
  }

  get isBackEnabled() {
    return this.page > 1;
  }

  get isForwardEnabled() {
    return this.page < this.total;
  }
}
