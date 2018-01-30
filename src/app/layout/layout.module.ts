import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoutesRoutingModule } from 'app/routes/routes-routing.module';

import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule
  ],
  declarations: [HeaderComponent, SidebarComponent, FooterComponent, CarouselComponent],
  exports: [RoutesRoutingModule, HeaderComponent, SidebarComponent, FooterComponent, CarouselComponent]
})
export class LayoutModule { }
