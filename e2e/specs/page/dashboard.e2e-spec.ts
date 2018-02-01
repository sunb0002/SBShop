import { browser } from 'protractor';

import { DashBoardPage } from '../../po/dashboard.po';


describe('DASHBOARD page:', () => {
    const page = new DashBoardPage();

    beforeEach(async () => {
        page.navigateTo();
        await browser.waitForAngular();
    });

    it('should display shop name as "Magica Shop" ', async () => {
        const shopName = page.getShopName();
        expect(await shopName.getText()).toBe('Magica Shop');
    });

    it('should display at least 5 products with name "Product" ', async () => {
        const allProdImgs = page.getAllProductImgs();
        expect(await allProdImgs.count()).toBeGreaterThanOrEqual(5);
    });


});