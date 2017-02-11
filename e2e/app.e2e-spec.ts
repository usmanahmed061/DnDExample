import { DnDExamplePage } from './app.po';

describe('dn-dexample App', function() {
  let page: DnDExamplePage;

  beforeEach(() => {
    page = new DnDExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
