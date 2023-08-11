import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gift } from '../model/Gift';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  giftUrl = environment.GiftUrl;
  constructor(private http: HttpClient) { }

  GetGift(incidentId: number) {
    return this.http.get<Gift[]>(this.giftUrl + `api/gift/all/${incidentId}`);
  }

  AddGift(gift: Gift) {
    return this.http.post<any>(this.giftUrl + `api/gift`, gift, { observe: 'response' });
  }


  DeleteGift(giftId: number) {
    return this.http.delete(this.giftUrl + `api/gift/${giftId}`)
  }

  EditGift(gift: Gift) {
    return this.http.put<any>(this.giftUrl + `api/gift`, gift);
  }

  PrintAllGiftByIncidentId(incidentId: number) {
    return this.http.get<any>(this.giftUrl + `api/gift/print/${incidentId}`, { observe: 'response', responseType: "blob" as "json" });
  }
}
