import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  showNavbar: Boolean = true;
  subscribtion: Subscription
  userName: string | null = "";
  userNameSubscription: Subscription;

  constructor(private navBarService: NavBarService,
    private accountServic: AccountService) {
    this.subscribtion = this.navBarService.showNavBar.subscribe(value => {
      this.showNavbar = value;
    });

    this.userNameSubscription = this.accountServic.userName
      .subscribe({
        next: value => {
          this.userName = value;
        }
      });
  }

  ngOnInit(): void {
    //this.userName = this.accountServic.GetUserName();
    //console.log(this.userName);
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
    this.userNameSubscription.unsubscribe();
  }

}
