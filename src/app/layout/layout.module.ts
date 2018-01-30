import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from 'app/layout/mainbody/carousel/carousel.component';
import { RoutesRoutingModule } from 'app/routes/routes-routing.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './mainbody/error/error.component';
import { ProfileComponent } from './mainbody/profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule
  ],
  declarations: [HeaderComponent, SidebarComponent, FooterComponent, CarouselComponent, ProfileComponent, ErrorComponent],
  exports: [RoutesRoutingModule, HeaderComponent, SidebarComponent, FooterComponent, CarouselComponent, ProfileComponent, ErrorComponent]
})
export class LayoutModule { }
