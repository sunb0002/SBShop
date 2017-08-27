import { by, element } from 'protractor';

import { SBSHOPLogisticsPage } from './app.po';

export class WalkInOrderPage extends SBSHOPLogisticsPage {
    navigateTo() {
        super.navigateToSBSHOPPath('/walk-in-order/nric');
    }

    getAllH1Headers() {
        return super.getAllElementsByCss('.collapse-box .collapse-title h1');
    }

    getAllWalkInCollectionOrders() {
        return super.getAllElementsByCss('tr.clickable-row');
    }

    getWalkInCollectionOrderItems() {
        return super.getAllElementsByCss('.table.purchases .item-name');
    }

    getCollectButton() {
        return element(by.buttonText('Collect'));
    }

    getEnterButton() {
        return element(by.buttonText('Enter'));
    }

    getCancelButton() {
        return element(by.buttonText('Cancel'));
    }

    getConfirmPurchaseButton() {
        return element(by.buttonText('Confirm Purchase'));
    }

    getGenerateSecretCodeButton() {
        return element(by.buttonText('Generate Code'));
    }

    getSecretCodeInput() {
        return super.getElementByCss('.modal-content .modal-body input.otp');
    }

    getNRICInput() {
        return super.getElementByCss('#NRICInput');
    }

    getFirstOrderNumberInTable() {
        return super.getAllElementsByCss('td.block.number').first();
    }

    getLatestSimpleNotificationBox() {
        return super.getAllElementsByCss('.simple-notification-wrapper .simple-notification div.sn-content').first();
    }

    getInlineErrorBox() {
        return super.getElementByCss('.has-error .help-block');
    }

    // async createWalkinTestingOrder(user: string): Promise<OrderDTO> {
    //     const respdata = await super.simpleSBSHOPPOST('/orders', this.makeOrder(), user);
    //     console.log('New order created:', respdata);
    //     return respdata ? respdata as OrderDTO : null;
    // }

    // private makeOrder(): CartDTO {
    //     const delivery = <CartDeliveryDTO>{};
    //     delivery.deliveryMode = 4; // Walk-in order, must be 4.
    //     delivery.collectionPoint = 1; // S2222222D admin CP, must be 1.
    //     delivery.email = 'walkin@gmail.com';
    //     delivery.contactNo = '99887766';
    //     delivery.savePreferredDeliveryMode = false;
    //     delivery.saveAddress = false;
    //     delivery.saveEmail = false;
    //     delivery.saveContactNo = false;

    //     const item = <CartItemDTO>{};
    //     // Free testing product, prefer this value.
    //     item.productId = 12;
    //     item.skuId = 27;
    //     item.quantity = 1;

    //     const order = <CartDTO>{};
    //     order.delivery = delivery;
    //     order.items = [item];
    //     return order;
    // }


}
