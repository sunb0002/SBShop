import { browser, by, element, ExpectedConditions } from 'protractor';
import { ElementArrayFinder, ElementFinder } from 'protractor/built/element';
import * as _superagent from 'superagent';

import { environment } from '../../src/environments/environment';

export class SBSHOPLogisticsPage {

  public SBSHOPPageBaseHref = '/#';
  public SBSHOPApiBaseURL = environment.apiBaseUrl;
  public defaultSBSHOPUser = 'S2222222D';
  public defaultSBSHOPLogisticsGroup = 'PORTAL-LOGISTICS';
  public defaultSBSHOPStoreGroup = 'PORTAL-STORE';
  public defaultSBSHOPLoginType = 'SBPASS';

  defaultVisibilityTimeout = 3000;
  defaultVisibilityTimeoutMsg = 'Taking too long to display (or hide) element.';
  EC = ExpectedConditions;

  defaultHttpRequestTimeout = 24000;

  navigateToPath(path?: any) {
    if (!path) {
      path = '/';
    }
    browser.get(path);
    browser.waitForAngular();
  }

  navigateToSBSHOPPath(path?: any) {
    if (!path) {
      path = '/';
    }
    if (path.indexOf(this.SBSHOPPageBaseHref) !== 0) {
      this.navigateToPath(this.SBSHOPPageBaseHref + path);
    } else {
      this.navigateToPath(path);
    }
  }

  public setSBSHOPTestingCookie(ivUser?: string, ivGroup?: string, loginType?: string): Promise<any> {

    ivUser = ivUser || this.defaultSBSHOPUser;
    ivGroup = ivGroup || this.defaultSBSHOPLogisticsGroup;
    loginType = loginType || this.defaultSBSHOPLoginType;

    // Unable to set cross-domain cookie. Have to redirect and then set.
    browser.waitForAngularEnabled(false);
    this.navigateToPath(this.SBSHOPApiBaseURL);
    browser.manage().deleteAllCookies();
    return Promise.all([
      this.setCookie('sb-user', ivUser),
      this.setCookie('sb-groups', ivGroup),
      this.setCookie('logintype', loginType)
    ]);
  }

  /**
   * @param name
   * @param value
   */
  public setCookie(name: string, value: string): Promise<void> {
    // Protractor bug: browser.manage() TS definition is never updated. Have to cast as "any".
    return (browser.manage() as any).addCookie({ 'name': name, 'value': value });
  }

  getElementByCss(cssSelector: string) {
    return element(by.css(cssSelector));
  }

  getAllElementsByCss(cssSelector: string) {
    return element.all(by.css(cssSelector));
  }

  getFilterButton() {
    return element(by.buttonText('Filter'));
  }

  getSearchButton() {
    return element(by.buttonText('Search'));
  }

  getBackButton() {
    return element(by.buttonText('Back'));
  }

  getConfirmButton() {
    return element(by.buttonText('Confirm'));
  }

  getContinueButton() {
    return element(by.buttonText('Continue'));
  }

  /**
   * Custom element visibility lock. Only needed before click/sendKey actions.
   * @param {any} elm
   * @param {number} [timeout]
   * @param {string} [msg]
   * @memberof SBSHOPStorePage
   */
  async awaitVisibility(elm, timeout?: number, msg?: string): Promise<void> {
    await browser.wait(this.EC.visibilityOf(elm),
      timeout || this.defaultVisibilityTimeout,
      msg || this.defaultVisibilityTimeoutMsg);
  }

  // This only works for BootStrap3/4 Modal shade..
  async awaitBootStrapModalVisibility(modalOn: boolean): Promise<void> {
    const modalFadeAnimation = this.getElementByCss('.modal-backdrop.fade');
    return modalOn ? await this.awaitVisibility(modalFadeAnimation) : await this.awaitInVisibility(modalFadeAnimation);
  }

  async awaitInVisibility(elm, timeout?: number, msg?: string): Promise<void> {
    await browser.wait(this.EC.invisibilityOf(elm),
      timeout || this.defaultVisibilityTimeout,
      msg || this.defaultVisibilityTimeoutMsg);
  }

  async scrollToBottom(): Promise<void> {
    await browser.executeScript('window.scrollTo(0,10000);');
  }

  async forceElementCheckedStatus(elm: ElementFinder, clickTarget: ElementFinder, toChecked: boolean): Promise<void> {
    if (await elm.isPresent() && await clickTarget.isDisplayed()) {
      const currentStatus = (await elm.getAttribute('checked') === 'true');
      if (toChecked !== currentStatus) {
        await clickTarget.click();
      }
    }
  }

  async locateElementByTraversePaginations(elm: ElementFinder, nextBtn: ElementFinder): Promise<boolean> {
    let nextBtnDisabled: Boolean = false;
    let elmFound: boolean;
    do {
      await this.awaitBootStrapModalVisibility(false);
      await this.awaitVisibility(nextBtn);
      elmFound = (await elm.isPresent());
      nextBtnDisabled = (await nextBtn.getAttribute('disabled') != null); // .isEnabled() is not working
      if (!elmFound && !nextBtnDisabled) {
        await nextBtn.click();
        await browser.waitForAngular();
      }
    } while (!elmFound && !nextBtnDisabled);

    return elmFound;
  }

  async countElementsByTraversePaginations(elmArray: ElementArrayFinder, nextBtn: ElementFinder): Promise<number> {

    let sum = 0;
    let nextBtnDisabled: Boolean = false;
    do {
      await this.awaitBootStrapModalVisibility(false);
      await this.awaitVisibility(nextBtn);
      sum += await elmArray.count();
      nextBtnDisabled = (await nextBtn.getAttribute('disabled') != null); // .isEnabled() is not working
      if (!nextBtnDisabled) {
        await nextBtn.click();
        browser.waitForAngular();
      }
    } while (!nextBtnDisabled);

    return sum;
  }

  async simpleSBSHOPPOST(path: string, postbody: any, ivUser?: string, ivGroup?: string, loginType?: string): Promise<any> {

    const endpoint = this.SBSHOPApiBaseURL + path;
    ivUser = ivUser || this.defaultSBSHOPUser;
    ivGroup = ivGroup || this.defaultSBSHOPStoreGroup;
    loginType = loginType || this.defaultSBSHOPLoginType;

    const cookiestr = 'iv-groups=' + ivGroup + ';iv-user=' + ivUser + ';logintype=' + loginType;
    const respbody = await this.simpleRestfulPOST(endpoint, postbody, cookiestr);
    return (!respbody && respbody.status > 300) ? null : respbody.data;
  }


  /**
   *
   * @param {string} url
   * @param {*} postbody
   * @param {string} [cookiestr]
   * @returns {Promise<any>}
   * @memberof SBSHOPLogisticsPage
   */
  async simpleRestfulPOST(url: string, postbody: any, cookiestr?: string): Promise<any> {

    console.log('simpleRestfulPOST with body', url, postbody);
    return _superagent.post(url)
      .set('Content-Type', 'application/json;charset=UTF-8')
      .set('Cookie', cookiestr || '')
      .send(postbody)
      .timeout(this.defaultHttpRequestTimeout)
      .then(
      resp => {
        console.log('>>>>>> Responded: ', resp.body)
        return resp.body;
      },
      err => {
        console.log('>>>>>> Request Failed: ', err);
        return null;
      }
      );
  }

}
