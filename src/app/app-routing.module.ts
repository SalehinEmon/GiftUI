import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGiftComponent } from './components/add-gift/add-gift.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddIncidentComponent } from './components/add-incident/add-incident.component';
import { AllIncidentComponent } from './components/all-incident/all-incident.component';
import { AllGiftComponent } from './components/all-gift/all-gift.component';
import { SetIncidentComponent } from './components/set-incident/set-incident.component';
import { SetIncidentGuard } from './guard/set-incident.guard';
import { AboutComponent } from './components/about/about.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  { path: '', component: AddGiftComponent, title: 'Add New Gift', canActivate: [AuthGuardGuard, SetIncidentGuard] },
  { path: 'add-gift', component: AddGiftComponent, title: 'Add New Gift', canActivate: [AuthGuardGuard, SetIncidentGuard] },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'login', component: LogInComponent, title: 'Login ' },
  { path: 'logout', component: LogOutComponent, title: 'Log Out ' },
  { path: 'set-incident', component: SetIncidentComponent, title: 'Set Event....', canActivate: [AuthGuardGuard] },
  { path: 'all-incident', component: AllIncidentComponent, title: 'Incidents...', canActivate: [AuthGuardGuard] },
  //{ path: 'add-incident', component: AddIncidentComponent, title: 'Add Incident', canActivate: [AuthGuardGuard] },
  { path: 'all-gift/:incidentId', component: AllGiftComponent, canActivate: [AuthGuardGuard] },
  { path: '**', component: PageNotFoundComponent, title: "Page not found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
