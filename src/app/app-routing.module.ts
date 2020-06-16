import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';
import { ResourceNotFoundComponent } from './resource-not-found/resource-not-found.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotoVideoGalleryComponent } from './common/components/photo-video-gallery/photo-video-gallery.component';
import { ComplaintsQueriesComponent } from './complaints-queries/complaints-queries.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'about-us', component: AboutUsComponent },
{ path: 'contact-us', component: ContactUsComponent },
{ path: 'donate', component: DonateComponent },
{
  path: 'user', component: UserComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: UserDashboardComponent },
    { path: 'complaints-queries', component: ComplaintsQueriesComponent }
  ]
},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', component: ResourceNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
