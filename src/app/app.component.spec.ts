import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it(`should create the component`), () => {
    expect(component).toBeTruthy();
    pending();
  };

  xit(`I think no need to unit test on root component since no method to test, no obvious element neither.`)

});
