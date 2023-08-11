import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IncidentService } from '../services/incident.service';

@Injectable({
  providedIn: 'root'
})
export class SetIncidentGuard implements CanActivate {

  constructor(private incidentService: IncidentService,
    private router: Router) {

  }
  canActivate() {

    if (this.incidentService.GetDefaultIncidentId() == 0 || null) {

      this.router.navigate(["set-incident"]);
      return false;

    }
    return true;

  }
}
