import { by, element } from 'protractor';

import { SBSHOPLogisticsPage } from './app.po';

export class DashBoardPage extends SBSHOPLogisticsPage {
    navigateTo() {
        super.navigateToSBSHOPPath('/dashboard');
    }

    getAllH1Headers() {
        return super.getAllElementsByCss('.collapse-box .collapse-title h1');
    }

    getShopName() {
        return super.getElementByCss('div.container div.col-md-3 > p.lead');
    }

    getAllProductImgs() {
        return super.getAllElementsByCss('div.container div.row div.thumbnail > img');
    }

    getCopyRight() {
        return element.all(by.cssContainingText('p', 'Copyright © sunb0002 Website 2017'));
    }

}
