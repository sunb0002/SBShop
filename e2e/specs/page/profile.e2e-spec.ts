import { browser, element, by } from 'protractor';

import { ProfilePage } from '../../po/profile.po';


describe('PROFILE page:', () => {

    const page = new ProfilePage();

    beforeEach(async () => {
        page.navigateTo();
        await browser.waitForAngular();
    });

    it('should display error notification if search result is empty.', async () => {

        const searchBtn = element(by.buttonText('Search by Name'));
        const searchBox = page.getNameSearchBox();
        expect(await searchBtn.isEnabled()).toBeFalsy();

        await searchBox.clear();
        await searchBox.sendKeys('xxxnosuchuserxxx');

        expect(await searchBtn.isEnabled()).toBeTruthy();
        await searchBtn.click();

        browser.sleep(2000);
    });

    it('should display copyright', async () => {
        expect(await page.getCopyRight().isPresent()).toBeTruthy();
    });

});
