/**
 * SBShop Spring Demo (SpringBoot)
 * Kyouko is my waifu
 *
 * OpenAPI spec version: 1.0.0boot
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class ProfileApi {
    protected basePath = 'https://localhost:8080/springdemo';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * getAllUsers
     * Get all users
     */
    public getAllUsersUsingGET(extraHttpRequestParams?: any): Observable<models.ProfileResponseUserList> {
        return this.getAllUsersUsingGETWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getUserById
     * Get User by Id
     * @param id id
     */
    public getUserByIdUsingGET(id: number, extraHttpRequestParams?: any): Observable<models.ProfileResponseUser> {
        return this.getUserByIdUsingGETWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * saveUserProfile
     * Create or update user profile
     * @param userDto Request body to save user profile.
     */
    public saveUserProfileUsingPOST(userDto: models.UserDTO, extraHttpRequestParams?: any): Observable<models.ProfileResponseUser> {
        return this.saveUserProfileUsingPOSTWithHttpInfo(userDto, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * searchUsersByName
     * Search Users with name
     * @param name name
     */
    public searchUsersByNameUsingGET(name: string, extraHttpRequestParams?: any): Observable<models.ProfileResponseUserList> {
        return this.searchUsersByNameUsingGETWithHttpInfo(name, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * getAllUsers
     * Get all users
     */
    public getAllUsersUsingGETWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/profile/allusers';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:true
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * getUserById
     * Get User by Id
     * @param id id
     */
    public getUserByIdUsingGETWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/profile/user/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUserByIdUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:true
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * saveUserProfile
     * Create or update user profile
     * @param userDto Request body to save user profile.
     */
    public saveUserProfileUsingPOSTWithHttpInfo(userDto: models.UserDTO, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/profile/user';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userDto' is not null or undefined
        if (userDto === null || userDto === undefined) {
            throw new Error('Required parameter userDto was null or undefined when calling saveUserProfileUsingPOST.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: userDto == null ? '' : JSON.stringify(userDto), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:true
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * searchUsersByName
     * Search Users with name
     * @param name name
     */
    public searchUsersByNameUsingGETWithHttpInfo(name: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/profile/user';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling searchUsersByNameUsingGET.');
        }
        if (name !== undefined) {
            queryParameters.set('name', <any>name);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:true
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
