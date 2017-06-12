import { SBShopPage } from './app.po';

describe('sbshop App', () => {
  let page: SBShopPage;

  beforeEach(() => {
    page = new SBShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
