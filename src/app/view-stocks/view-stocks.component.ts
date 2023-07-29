import { Component, OnInit } from '@angular/core';
import { Stock } from '../service/stock';
import { StockService } from '../service/stock.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-stocks',
  templateUrl: './view-stocks.component.html',
  styleUrls: ['./view-stocks.component.css']
})
export class ViewStocksComponent implements OnInit {
  public stocks: Stock[];

  constructor(private stockService: StockService) { }
  
  ngOnInit(): void {
    this.getStocks();
  }

  public getStocks(): void {
    this.stockService.getAllStocks().subscribe(
      {
        next: (response: Stock[]) => {
          console.log(response);
          this.stocks = response;
        },
        error: (error: HttpErrorResponse) => alert(error.message),
        complete: () => console.log("completed")
      }
    );
  }

}
