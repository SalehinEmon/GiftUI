import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Incident } from 'src/app/model/Incident';
import { IncidentService } from 'src/app/services/incident.service';

@Component({
  selector: 'app-set-incident',
  templateUrl: './set-incident.component.html',
  styleUrls: ['./set-incident.component.css']
})
export class SetIncidentComponent implements OnInit {

  allIncident: Incident[] = [];
  selectedIncidentId: number = 0;

  testIncidentId: number | null = 0;

  constructor(private incidentService: IncidentService,
    private router: Router) { }

  ngOnInit(): void {
    this.LoadAllIncident();

    this.testIncidentId = this.incidentService.GetDefaultIncidentId();

    if (this.allIncident.length > 0) {
      this.selectedIncidentId = Number(this.allIncident[0].id);
    }
  }

  LoadAllIncident() {
    this.incidentService.GetIncident().subscribe({
      next: repsonse => {
        this.allIncident = repsonse;
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        if (this.allIncident.length > 0) {

          this.selectedIncidentId = Number(this.allIncident[0].id);
        }

      }
    })
  }

  SetIncidentButton() {
    this.incidentService.SetDefaultIncidentId(this.selectedIncidentId);

    this.testIncidentId = this.incidentService.GetDefaultIncidentId();

    this.router.navigate(["/"]);
  }

  RemoveButton() {
    this.incidentService.RemoveDefaultIncidentId();
  }

}
