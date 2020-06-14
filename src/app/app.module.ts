import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';
import { FileEventsDirective } from './directives/file-events.directive';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ResourceNotFoundComponent } from './resource-not-found/resource-not-found.component';
import { NavigateComponent } from './navigate/navigate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { CarouselComponent } from './common/components/carousel/carousel.component';
import { PhotoVideoGalleryComponent } from './common/components/photo-video-gallery/photo-video-gallery.component';
import { ComplaintsQueriesComponent } from './complaints-queries/complaints-queries.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    DonateComponent,
    FileEventsDirective,
    UserDashboardComponent,
    ResourceNotFoundComponent,
    NavigateComponent,
    DashboardComponent,
    UserComponent,
    CarouselComponent,
    PhotoVideoGalleryComponent,
    ComplaintsQueriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
