import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddGiftComponent } from './components/add-gift/add-gift.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { AddIncidentComponent } from './components/add-incident/add-incident.component';
import { AllIncidentComponent } from './components/all-incident/all-incident.component';
import { AllGiftComponent } from './components/all-gift/all-gift.component';
import { SetIncidentComponent } from './components/set-incident/set-incident.component';
import { AboutComponent } from './components/about/about.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { JwtInterceptorInterceptor } from './interceptor/jwt-interceptor.interceptor';
import { LogOutComponent } from './components/log-out/log-out.component';
import { UnauthorizedInterceptor } from './interceptor/unauthorized.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddGiftComponent,
    PageNotFoundComponent,
    AddIncidentComponent,
    AllIncidentComponent,
    AllGiftComponent,
    SetIncidentComponent,
    AboutComponent,
    LogInComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
