import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Incident } from '../model/Incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  giftUrl = environment.GiftUrl + `api/incident`;

  constructor(private http: HttpClient) { }

  AddIncident(incident: Incident) {

    return this.http.post<any>(this.giftUrl, incident);
  }

  GetIncident() {
    return this.http.get<Incident[]>(this.giftUrl);
  }


  GetIncidentById(incidentId: number) {
    return this.http.get<Incident>(this.giftUrl + `/${incidentId}`);
  }

  DeleteIncident(incidentId: number) {
    return this.http.delete<any>(this.giftUrl + `/${incidentId}`);

  }

  EditIncident(incidentToEdit: Incident) {
    return this.http.put<any>(this.giftUrl, incidentToEdit);
  }


  SetDefaultIncidentId(incidentId: number) {
    localStorage.setItem("incident-id", incidentId + "");
  }

  GetDefaultIncidentId() {
    return Number(localStorage.getItem("incident-id"));
  }
  IsDefaultIncidentIdSet() {
    return localStorage.getItem("incident-id");
  }


  RemoveDefaultIncidentId() {
    localStorage.removeItem("incident-id")
  }



}
