import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StoreConfigService } from './store-config.service';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {

    constructor(private storeConfigSvc: StoreConfigService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const JWT = 'Bearer ' + this.storeConfigSvc.getJwtTokenFromBrowser();
        req = req.clone({ setHeaders: { Authorization: JWT } });
        return next.handle(req).catch(ex => this.handleAuthError(ex));
    }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        console.error('Global intercepted HTTP error: ', err);
        if (err.status === 403 || err.status === 0) {
            this.storeConfigSvc.failJwtValidation('Failed to validate request.');
            return Observable.of(err.message);
        }
        return Observable.throw(err);
    }

}
