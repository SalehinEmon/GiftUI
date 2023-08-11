import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit,OnDestroy {

  constructor(private navBarService:NavBarService) { }

  ngOnInit(): void {
    this.navBarService.Hide();
    
  }

  ngOnDestroy(): void {
    this.navBarService.Show();
    
  }

}
