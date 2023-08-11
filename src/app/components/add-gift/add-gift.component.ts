import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Gift } from 'src/app/model/Gift';
import { GiftService } from 'src/app/services/gift.service';
import { IncidentService } from 'src/app/services/incident.service';

@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css']
})
export class AddGiftComponent implements OnInit {


  gifts: Gift[] = [];
  currentGift: Gift = {};
  addedGift: Gift | null = {};
  addedGiftId: number | undefined = 0;
  isSuccessful: boolean = false;

  amountDisable: boolean = false;

  constructor(private giftService: GiftService,
    private incidentService: IncidentService) {
    this.currentGift.giftTypeId = 1;
  }

  ngOnInit(): void {


  }

  AddGiftButton() {

    this.currentGift.giftTypeId = Number(this.currentGift.giftTypeId);
    this.currentGift.incidentId = this.incidentService.GetDefaultIncidentId();


    this.giftService.AddGift(this.currentGift).subscribe(
      {
        next: response => {
          if (response.status == 200) {
            this.addedGiftId = response.body.id;
            this.currentGift = {};
            this.isSuccessful = true;

          }
        },
        error: error => {
          console.log(error);
        },
        complete: () => {

        }

      }
    )
  }


  GiftTypeChange() {
    // console.log(this.currentGift.giftTypeId);

    // this.amountDisable = !this.amountDisable;

    if (this.currentGift.giftTypeId == 2) {
      this.amountDisable = true;
    }
    else {
      this.amountDisable = false;
    }


  }

}
