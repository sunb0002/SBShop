import { by, element } from 'protractor';

import { SBSHOPLogisticsPage } from './app.po';

export class ProfilePage extends SBSHOPLogisticsPage {

    navigateTo() {
        super.navigateToSBSHOPPath('/profile');
    }

    getAllH1Headers() {
        return super.getAllElementsByCss('.collapse-box .collapse-title h1');
    }

    getNameSearchBox() {
        return super.getElementByCss('#nameSearchBox');
    }

    getCopyRight() {
        return element.all(by.cssContainingText('p', 'Copyright © sunb0002 Website 2017'));
    }

}
