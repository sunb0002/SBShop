import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopProfileService } from 'app/services/profile.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let dom: HTMLElement;

  const profileSvcStub = {
    admin: {
      name: 'Madoka',
      id: 1,
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: ShopProfileService, useValue: profileSvcStub }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    console.log('Starting to do unit test.');
    fixture = TestBed.createComponent(HeaderComponent);
    dom = fixture.nativeElement;
    component = fixture.componentInstance;
    spyOn(component, 'ngOnInit');
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have "Madoka" as shop admin name', () => {
    const bannerText = dom.querySelector('div.navbar-header > a.navbar-brand').textContent;
    expect(bannerText).toContain('Shop-Admin:');
    expect(bannerText).toContain('Madoka');
  });

  it('should call onInit only 1 time', () => {
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.ngOnInit).toHaveBeenCalledTimes(1);
  });

});
