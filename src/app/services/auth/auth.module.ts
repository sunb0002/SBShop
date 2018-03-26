import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from 'environments/environment';

import { ENABLE_JWT_VERIFICATION } from '../TOKENS';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthService,
    { provide: ENABLE_JWT_VERIFICATION, useValue: environment.enableJwtVerificaion }],
  declarations: []
})
export class AuthModule { }
