import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gift } from 'src/app/model/Gift';
import { GiftService } from 'src/app/services/gift.service';

import { faPrint, faDownload } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-all-gift',
  templateUrl: './all-gift.component.html',
  styleUrls: ['./all-gift.component.css']
})
export class AllGiftComponent implements OnInit {

  incidentId: number = 0;
  totalAmount: number | undefined = 0;
  allGiftByIncidentId: Gift[] = [];

  waitFlag: boolean = false;


  faPrint = faPrint;
  faDownload = faDownload;

  constructor(private route: ActivatedRoute,
    private giftService: GiftService) { }

  ngOnInit(): void {
    this.incidentId = Number(this.route.snapshot
      .paramMap.get('incidentId'));
    this.LoadAllGift();
  }

  LoadAllGift() {
    this.waitFlag = true;

    this.giftService.GetGift(this.incidentId).subscribe({
      next: response => {
        this.allGiftByIncidentId = response;
      },
      error: error => {
        this.waitFlag = false;
        console.log(error);
      },
      complete: () => {
        this.waitFlag = false;
        this.totalAmount = this.allGiftByIncidentId
          .map(gift => gift.amount)
          .reduce((a, b) => Number(a) + Number(b));

      }
    });
  }

  PrintButton() {
    this.waitFlag = true;

    this.giftService.PrintAllGiftByIncidentId(this.incidentId!)
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

  DownloadButton() {
    this.waitFlag = true;
    
    this.giftService.PrintAllGiftByIncidentId(this.incidentId!)
      .subscribe({
        next: response => {
          let blob: Blob = response.body as Blob;
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.download = this.incidentId!.toString();
          a.href = url;
          a.click();


        }, error: error => {
          this.waitFlag = false;
          console.log(error);

        }, complete: () => {

          this.waitFlag = false;

        }
      });
  }

}
