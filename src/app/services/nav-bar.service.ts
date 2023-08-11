import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  showNavBar: BehaviorSubject<boolean>;

  constructor() {
    this.showNavBar = new BehaviorSubject(true);
  }

  Show()
  {
    this.showNavBar.next(true);
  }

  Hide()
  {
    this.showNavBar.next(false);
  }
}
