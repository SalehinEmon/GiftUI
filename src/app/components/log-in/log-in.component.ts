import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInDto } from 'src/app/model/LogInDto';
import { TokenDto } from 'src/app/model/TokenDto';
import { AccountService } from 'src/app/services/account.service';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit, OnDestroy {

  currentLoginDto: LogInDto = {};
  tokenDto: TokenDto | null = {};
  waitFlag: boolean = false;

  currentUrl = window.location.href;

  constructor(private accountService: AccountService,
    private navBarService: NavBarService,
    private router: Router) { }

  ngOnInit(): void {

    this.navBarService.Hide();

    if (this.accountService.IslogIn()) {
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(): void {
    this.navBarService.Show();

  }

  LogInButton() {

    // console.log(this.currentLoginDto);
    this.waitFlag = true;

    this.accountService.LogIn(this.currentLoginDto).subscribe({
      next: response => {
        if (response.status == 200) {
          this.tokenDto = response.body;
          console.log("success");
          this.router.navigate(['/']);
        }
      },
      error: error => {
        this.waitFlag = false;

      },
      complete: () => {
        this.waitFlag = false;
      }
    });

  }

}
