import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators/catchError';
import { switchMap } from 'rxjs/operators/switchMap';
import { tap } from 'rxjs/operators/tap';

import { HomeResponse } from './../shared/backend-api/sbshop/model/HomeResponse';
import { StoreConfigService } from './store-config.service';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {

    constructor(private storeConfigSvc: StoreConfigService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const JWT = 'Bearer ' + this.storeConfigSvc.getJwtTokenFromBrowser();
        req = req.clone({ setHeaders: { Authorization: JWT } });
        return next.handle(req).pipe(
            tap(resp => console.log('Raw response:', resp)),
            catchError(ex => this.handleAuthError(ex)),
            switchMap(resp => this.validateShopApiResponse(resp))
        );
    }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        console.error('Global intercepted HTTP error: ', err);
        const errorMsg = (err.status === 0 || err.status === 403) ?
            'Failed to validate request from endpoint=' + err.url : 'General failure on api requests with status=' + err.status;
        this.storeConfigSvc.failJwtValidation(errorMsg);
        return _throw(err);
    }

    private validateShopApiResponse(resp: HttpResponse<any>): Observable<any> {
        const shopResp = resp.body as HomeResponse;
        if (shopResp && shopResp.status !== 200) {
            console.error('Global intercepted shop internal error response:', shopResp);
            return _throw(shopResp.msg);
        }
        return of(resp);
    }

}
