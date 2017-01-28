import { ApplacatePage } from './app.po';

describe('applacate App', function() {
  let page: ApplacatePage;

  beforeEach(() => {
    page = new ApplacatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
