import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { VideoListingComponent } from './video/video-listing/video-listing.component';
import { VideoDetailComponent } from './video/video-detail/video-detail.component';

import { AuthGuard } from './helpers/guards/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'videos',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'listings', pathMatch: 'prefix' },
      { path: 'listings', component: VideoListingComponent },
      { path: 'video', component: VideoDetailComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
