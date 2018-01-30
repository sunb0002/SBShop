import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from 'app/layout/mainbody/carousel/carousel.component';
import { ErrorComponent } from 'app/layout/mainbody/error/error.component';
import { ProfileComponent } from 'app/layout/mainbody/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', pathMatch: 'full', component: CarouselComponent },
  { path: 'profile', pathMatch: 'full', component: ProfileComponent },
  { path: 'error', pathMatch: 'full', component: ErrorComponent },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
