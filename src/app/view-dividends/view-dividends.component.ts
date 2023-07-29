import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Trade } from '../service/trade';

import { Dividend } from '../service/dividend';
import { DividendService } from '../service/dividend.service';

@Component({
  selector: 'app-view-dividends',
  templateUrl: './view-dividends.component.html',
  styleUrls: ['./view-dividends.component.css']
})
export class ViewDividendsComponent implements OnInit {
  public dividends: Dividend[];

  constructor(private dividendService: DividendService) { }
  
  ngOnInit(): void {
    this.getDividends();
  }

  public getDividends(): void {
    this.dividendService.getAllDividends().subscribe(
      {
        next: (response: Dividend[]) => {
          console.log(response);
          this.dividends = response;
        },
        error: (error: HttpErrorResponse) => alert(error.message),
        complete: () => console.log("completed")
      }
    );
}

}
