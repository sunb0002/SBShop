import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from 'app/services/auth/auth.module';
import { BASE_PATH } from 'app/shared/backend-api/sbshop';
import { environment } from 'environments/environment';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from 'app/routes/routes.module';
import { RoutesRoutingModule } from 'app/routes/routes-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    LayoutModule,
    CommonModule,
    SharedModule,
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.apiBaseUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
