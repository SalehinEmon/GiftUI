import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LogInDto } from '../model/LogInDto';
import { BehaviorSubject, map } from 'rxjs';
import { TokenDto } from '../model/TokenDto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  userName: BehaviorSubject<string>;

  giftUrl: string = environment.GiftUrl + `api/account/`;

  constructor(private http: HttpClient) {
    this.userName = new BehaviorSubject("");
  }

  LogIn(user: LogInDto) {

    return this.http.post<TokenDto>(this.giftUrl + `login`, user, { observe: 'response' })
      .pipe(map(response => {
        if (response.status == 200) {
          //console.log(response.body?.token);

          localStorage.setItem("jwt-token", response.body?.token!);
          localStorage.setItem("user-name", response.body?.userName!);
          this.userName.next(response.body?.userName!);

        }
        return response;
      }));
  }

  LogOut() {

    localStorage.removeItem("jwt-token");
    localStorage.removeItem("user-name");
    localStorage.removeItem("incident-id");

  }

  IslogIn() {

    if (localStorage.getItem("jwt-token") == null) {
      return false;
    }
    return true;
  }

  GetJWTToken() {
    return localStorage.getItem("jwt-token");
  }

  GetUserName() {
    return localStorage.getItem("user-name");
  }
}
