import { WalkInOrderPage } from './../../po/walk-in-order.po';
import { browser } from 'protractor';


describe('WALKIN-SELF-ORDER workflow:', () => {
    const page = new WalkInOrderPage();
    const storeUser = 'S1111111D';
    const packerUser = 'S2222222D';

    beforeAll((done) => {
        page.setSBSHOPTestingCookie(packerUser).then(() => {
            console.log('Cookie added, now you can navigate to page.');
            browser.waitForAngularEnabled(true);
            done();
        });
    });

    beforeEach(async () => {
        page.navigateTo();
        browser.waitForAngular();
    });


    it('should display NRIC page properly', async () => {
      const header = page.getAllH1Headers().first();
      expect(header).toBeTruthy();
      expect(header.getText()).toBe('Walk-in Order');

      const nric_input = page.getNRICInput();
      const enter_button = page.getEnterButton();
      const cancel_button = page.getCancelButton();
      expect(nric_input && enter_button && cancel_button).toBeTruthy();

      // no input in nric input box
      page.awaitVisibility(enter_button);
      await nric_input.clear();
      await enter_button.click();
      const msgBox = page.getElementByCss('div.alert.alert-danger.box-content');
      expect(await msgBox.getText()).toBe('NRIC cannot be blank');

      // wrong NRIC input
      await nric_input.sendKeys('badnric');
      await enter_button.click();
      expect(await msgBox.getText()).toBe('Invalid NRIC');

      // click cancel,return to dashboard
      await cancel_button.click();
      browser.waitForAngular();
      expect(await browser.getCurrentUrl()).toContain('/dashboard');
  });

  it('should display collection page properly', async () => {
      const nric_input = page.getNRICInput();
      const enter_button = page.getEnterButton();
      expect(nric_input && enter_button).toBeTruthy();

      await nric_input.sendKeys(storeUser);
      await enter_button.click();
      browser.waitForAngular();

      let header = page.getAllH1Headers().first();
      expect(header).toBeTruthy();
      expect(await header.getText()).toBe('Walk-in Self Order');

      const walk_in_orders = page.getAllWalkInCollectionOrders();
      if (await walk_in_orders.count() < 1) {
          // const newOrder = await page.createWalkinTestingOrder(storeUser);
          // expect(newOrder).toBeTruthy();
      }

      // should display same orderNo in collection page
      expect(await walk_in_orders.count()).toBeGreaterThan(0);
      const collectOrderNo = await page.getFirstOrderNumberInTable().getText();

      await walk_in_orders.get(0).click();
      browser.waitForAngular();
      expect(await browser.getCurrentUrl()).toContain('/collection');
      expect(await page.getFirstOrderNumberInTable().getText()).toEqual(collectOrderNo);

      // should be able to collect for walk in collection orders
      header = page.getAllH1Headers().first();
      expect(header).toBeTruthy();
      expect(await header.getText()).toBe('Walk-in Order Collection');

      const collect_button = page.getCollectButton();
      const back_button = page.getBackButton();
      expect(collect_button && back_button).toBeTruthy();
      await page.awaitVisibility(collect_button);

      // should have at least 1 item in this order
      const walk_in_orders_items = page.getWalkInCollectionOrderItems();
      expect(walk_in_orders_items).toBeTruthy();
      expect(await walk_in_orders_items.count()).toBeGreaterThan(0);

      await collect_button.click();

      const secret_input = page.getSecretCodeInput();
      const confirm_secretbtn = page.getConfirmButton();
      const generate_secretbtn = page.getGenerateSecretCodeButton();
      expect(secret_input && confirm_secretbtn && generate_secretbtn).toBeTruthy();

      await page.awaitBootStrapModalVisibility(true);
      await page.awaitVisibility(confirm_secretbtn);

      // should see proper secret code error messages
      await confirm_secretbtn.click();
      expect(await page.getInlineErrorBox().getText()).toContain('Please enter code');

      await secret_input.sendKeys('badkey');
      await confirm_secretbtn.click(); browser.waitForAngular();
      expect(await page.getInlineErrorBox().getText())
          .toMatch(/Code has expired|Invalid code/); // Invalid or Expired

      await generate_secretbtn.click(); browser.waitForAngular();
      expect(await page.getLatestSimpleNotificationBox().getText())
          .toMatch(/Code has been generated/);  // toContain is not working for multiple line contents
  });

});





describe('WALKIN-BUY-ON-BEHALF workflow:', () => {
  const page = new WalkInOrderPage();
  const storeUser = 'S1111111D';
  const packerUser = 'S2222222D';

  beforeAll((done) => {
      page.setSBSHOPTestingCookie(packerUser).then(() => {
          console.log('Cookie added, now you can navigate to page.');
          browser.waitForAngularEnabled(true);
          done();
      });
  });

  beforeEach(async () => {
      page.navigateTo();
      browser.waitForAngular();

      const nric_input = page.getNRICInput();
      const enter_button = page.getEnterButton();
      expect(nric_input && enter_button).toBeTruthy();

      await nric_input.sendKeys(storeUser);
      await enter_button.click();
      browser.waitForAngular();
      expect(await browser.getCurrentUrl()).toContain('/home');
  });


  it('should see at least two sections and static buttons', async () => {

      const h1count = await page.getAllH1Headers().count();
      if (h1count > 3 || h1count < 2) {
          fail('Maybe page displays extra sections, ng serve and check the console.');
      }

      const add_prod_h1 = (h1count === 2) ? page.getAllH1Headers().first() : page.getAllH1Headers().get(1);
      const make_order_h1 = page.getAllH1Headers().last();

      expect(add_prod_h1.getText()).toContain('Add Product');
      expect(make_order_h1.getText()).toContain('Walk-in Order');

      expect(page.getSearchButton().isDisplayed()).toBeTruthy();
      expect(page.getCancelButton().isDisplayed()).toBeTruthy();
      expect(page.getConfirmPurchaseButton().isEnabled()).toBeFalsy();
  });

  it('should be able to search and purchase new product', async () => {

      const search_input = page.getElementByCss('.find-box input.walkin-search');

      // expecting to see at least 1 product with it's name, price and add to cart button displayed
      const product_names = page.getAllElementsByCss('.catalogue-item.list-view .item-details h4');
      const product_prices = page.getAllElementsByCss('.catalogue-item.list-view .item-details h5');
      const product_addbtns = page.getAllElementsByCss('.catalogue-item.list-view .list-btn button');
      expect(await product_names.count() * await product_prices.count() * await product_addbtns.count()).toBeGreaterThanOrEqual(1);

      const test_prod_name = await product_names.last().getText();

      // should get no search result
      await search_input.clear();
      await search_input.sendKeys('nosuchproductorskuidibelieve');
      expect(product_names.count()).toBe(0);
      expect(product_names.last().isPresent()).toBeFalsy();

      // should get correct product in search result
      await search_input.clear();
      await search_input.sendKeys(test_prod_name);
      expect(product_names.count()).toBeGreaterThanOrEqual(1);
      expect(product_names.first().getText()).toEqual(test_prod_name);

      const test_prod_price = await product_prices.last().getText();

      // add product to cart
      await product_addbtns.last().click();
      expect(await page.getLatestSimpleNotificationBox().getText())
          .toMatch(/Item has been added/);

      // remove product from cart (and add back)
      const cart_removebtn = page.getAllElementsByCss('.table.purchases.cart span.glyphicon.glyphicon-remove').first();
      await page.awaitVisibility(cart_removebtn);
      await cart_removebtn.click();
      expect(await page.getLatestSimpleNotificationBox().getText())
          .toMatch(/Item has been removed/);

      await page.awaitInVisibility(page.getLatestSimpleNotificationBox());
      await product_addbtns.last().click();
      const cart_prod_name = await page.getAllElementsByCss('.table.purchases.cart div.item-name').first().getText();
      const cart_prod_price = await page.getAllElementsByCss('.table.purchases.cart td.block.price').first().getText();

      expect(cart_prod_name).toEqual(test_prod_name);
      expect(cart_prod_price).toEqual(test_prod_price);

      // confirm purchase, show the modal and test messages
      const confirm_purchasebtn = page.getConfirmPurchaseButton();
      expect(confirm_purchasebtn.isEnabled()).toBeTruthy();
      await confirm_purchasebtn.click();

      const secret_input = page.getSecretCodeInput();
      const confirm_secretbtn = page.getConfirmButton();
      const generate_secretbtn = page.getGenerateSecretCodeButton();
      await page.awaitBootStrapModalVisibility(true);
      await page.awaitVisibility(confirm_secretbtn);

      // confirm secret button should be disabled, then enabled
      expect(confirm_secretbtn.isEnabled()).toBeFalsy();
      await generate_secretbtn.click();
      browser.waitForAngular();
      expect(await page.getLatestSimpleNotificationBox().getText()).toMatch(/has been generated/);
      expect(confirm_secretbtn.isEnabled()).toBeTruthy();

      // should see proper secret code error messages
      await confirm_secretbtn.click();
      expect(await page.getInlineErrorBox().getText()).toContain('Please enter code');

      await secret_input.sendKeys('badkey');
      await confirm_secretbtn.click();
      browser.waitForAngular();
      expect(await page.getInlineErrorBox().getText())
          .toMatch(/Code has expired|Invalid code/); // Invalid or Expired
  });

});