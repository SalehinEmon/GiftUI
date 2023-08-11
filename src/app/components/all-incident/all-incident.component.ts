import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/model/Incident';
import { IncidentService } from 'src/app/services/incident.service';

import { faTrashAlt, faEdit, faPlus, faEye, faPrint, faDownload } from '@fortawesome/free-solid-svg-icons'
import { environment } from 'src/environments/environment';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-all-incident',
  templateUrl: './all-incident.component.html',
  styleUrls: ['./all-incident.component.css']
})
export class AllIncidentComponent implements OnInit {

  incidents: Incident[] = [];
  currentIncident: Incident = {};
  newIncident: Incident = {};

  //ui related variable
  displayStyle = "none";
  deleteDisplayStyle = "none";
  changeType = "new";
  deleteIncidentId: number | undefined = 0;
  waitFlag: boolean = false;

  apiAddress: string;

  //font awesome

  fatrashalt = faTrashAlt;
  faEdit = faEdit;
  faPlus = faPlus;
  faEye = faEye;
  faPrint = faPrint;
  faDownload = faDownload;


  constructor(private incidentService: IncidentService, private giftService: GiftService) {
    this.apiAddress = environment.GiftUrl;
  }

  ngOnInit() {
    this.LoadAllIncident();

  }

  PrintButton(incidentId: number | undefined) {
    this.waitFlag = true;
    this.giftService.PrintAllGiftByIncidentId(incidentId!)
      .subscribe({
        next: response => {

          let blob: Blob = response.body as Blob;
          let url = window.URL.createObjectURL(blob);
          window.open(url);

        }, error: error => {
          this.waitFlag = false;

        }, complete: () => {
          this.waitFlag = false;

        }
      });

  }

  DownloadButton(incidentId: number | undefined) {
    this.waitFlag = true;

    this.giftService.PrintAllGiftByIncidentId(incidentId!)
      .subscribe({
        next: response => {


          let blob: Blob = response.body as Blob;
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.download = incidentId!.toString();
          a.href = url;
          a.click();


        }, error: error => {
          this.waitFlag = false;

        }, complete: () => {
          this.waitFlag = false;

        }
      });

  }

  LoadAllIncident() {
    this.incidentService.GetIncident().subscribe({
      next: (response) => {
        this.incidents = response;
        // console.log(this.incidents);
      }

    });
  }

  CloseDeletePopup() {
    this.deleteDisplayStyle = "none";

  }
  OpenDeletePopup() {
    this.deleteDisplayStyle = "block";
  }

  openPopup() {

    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  LoadIncident(incidentId: number | undefined) {

    var loadIncident = this.incidents.find(incident => incident.id == incidentId);
    Object.assign(this.newIncident, loadIncident);
  }

  AddIncidentButton() {
    //console.log("add incident button called");

    this.newIncident = {};
    this.changeType = "new";
    this.openPopup();

  }



  EditIncidentButton(incidentId: number | undefined) {

    this.changeType = "edit";
    this.LoadIncident(incidentId);
    this.openPopup();

  }

  DeleteIncidentButton(incidentId: number | undefined) {

    this.changeType = "delete";
    this.deleteIncidentId = incidentId;
    this.OpenDeletePopup();

  }

  AddIncident() {

    this.incidentService.AddIncident(this.newIncident).subscribe({
      next: response => { },
      error: error => { },
      complete: () => {
        this.LoadAllIncident();
      }
    })
  }

  EditIncident() {
    this.incidentService.EditIncident(this.newIncident).subscribe({
      next: response => {

      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.LoadAllIncident();
      }
    })
  }

  DeleteIncident() {
    this.incidentService.DeleteIncident(this.deleteIncidentId!).subscribe({
      next: response => {

      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.LoadAllIncident();
      }
    })
  }

  SeveChange() {
    this.closePopup();

    if (this.changeType == "new") {

      this.AddIncident();


    }
    else if (this.changeType == "edit") {
      this.EditIncident();
      this.LoadAllIncident();

    }
    else if (this.changeType = "delete") {

      this.DeleteIncident();
      this.CloseDeletePopup();

    }


  }
}
