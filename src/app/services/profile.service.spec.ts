import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/observable/of';

import { ProfileService } from '../shared/backend-api/sbshop';
import { ShopProfileService } from './profile.service';

describe('ShopProfileService', () => {

    let service: ShopProfileService;
    let httpMock: HttpTestingController;

    let profileSvcSpy: jasmine.SpyObj<ProfileService>;
    const stub = {};

    beforeEach(() => {

        profileSvcSpy = jasmine.createSpyObj('ProfileService', ['searchUsersByNameUsingGET']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                { provide: ProfileService, useValue: profileSvcSpy },
                ShopProfileService
            ]
        });

        profileSvcSpy = TestBed.get(ProfileService);
        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(ShopProfileService);

    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be able to forceLoad goaltypes with "en" language', () => {

        profileSvcSpy.searchUsersByNameUsingGET.and.returnValue(of({ data: [] }));

        service.searchUserByName('anime').subscribe(
            results => expect(results.length).toBe(0)
        );

        httpMock
            .expectNone('/profile/user');

        httpMock.verify();
    });
});