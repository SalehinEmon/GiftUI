import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
    this.accountService.LogOut();
    this.router.navigate(["/"])
  }

}
