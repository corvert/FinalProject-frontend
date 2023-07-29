import { Component, OnInit } from '@angular/core';
import { Trade } from '../service/trade';
import { TradeService } from '../service/trade.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-trades',
  templateUrl: './view-trades.component.html',
  styleUrls: ['./view-trades.component.css']
})
export class ViewTradesComponent implements OnInit {
  public trades: Trade[];

  constructor(private tradeService: TradeService) { }
  
  ngOnInit(): void {
    this.getTrades();
  }

  public getTrades(): void {
    this.tradeService.getAllTrades().subscribe(
      {
        next: (response: Trade[]) => {
          console.log(response);
          this.trades = response;
        },
        error: (error: HttpErrorResponse) => alert(error.message),
        complete: () => console.log("completed")
      }
    );
}
}
