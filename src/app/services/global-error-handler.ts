import { ErrorHandler, Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

    constructor(private notificationSvc: NotificationsService) {
        super();
    }

    handleError(err) {
        console.error(err);
    }
}
