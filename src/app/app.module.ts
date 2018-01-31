import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from 'app/services/auth/auth.module';
import { APIS, BASE_PATH } from 'app/shared/backend-api/sbshop';
import { environment } from 'environments/environment';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SERVICES } from './services/SERVICES';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    LayoutModule,
    CommonModule,
    SharedModule,
  ],
  providers: [SERVICES, APIS,
    { provide: BASE_PATH, useValue: environment.apiBaseUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
