import { BarebonesPage } from './app.po';

describe('barebones App', function() {
  let page: BarebonesPage;

  beforeEach(() => {
    page = new BarebonesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
