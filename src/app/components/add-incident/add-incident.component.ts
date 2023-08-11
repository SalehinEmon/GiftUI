import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/model/Incident';
import { IncidentService } from 'src/app/services/incident.service';

@Component({
  selector: 'app-add-incident',
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.css']
})
export class AddIncidentComponent implements OnInit {

  currentIncident: Incident = {};

  constructor(private incidentService: IncidentService) { }

  ngOnInit(): void {
  }

  AddIncidentButton() {

    this.currentIncident.time = new Date().toISOString();

    this.incidentService.AddIncident(this.currentIncident)
      .subscribe({
        next: response => {
          console.log(response);
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          this.currentIncident = {};

        }
      })


  }

}
