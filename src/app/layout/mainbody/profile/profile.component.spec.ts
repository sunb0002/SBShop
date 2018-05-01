import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsService } from 'angular2-notifications';

import { ShopProfileService } from '../../../services/profile.service';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  const stub = {};
  const profileSvcSpy = jasmine.createSpyObj('ShopProfileService', ['searchUserByName', 'getAllUsers', 'updateUser']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [
        { provide: ShopProfileService, useValue: profileSvcSpy },
        NotificationsService
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.notificationOptions = {
      position: ['middle', 'right'],
      lastOnBottom: false,
      timeOut: 2000
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
