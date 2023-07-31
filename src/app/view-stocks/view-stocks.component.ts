import { Component, OnInit } from '@angular/core';
import { Stock } from '../service/stock';
import { StockService } from '../service/stock.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../service/account.service';
import { Account } from '../service/account';

@Component({
  selector: 'app-view-stocks',
  templateUrl: './view-stocks.component.html',
  styleUrls: ['./view-stocks.component.css']
})
export class ViewStocksComponent implements OnInit {
  public stocks: Stock[];
  selectedAccount: Account;

  constructor(
    private stockService: StockService,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getStocks();

    this.route.paramMap.subscribe((params) => {
      const accountId = +params.get('id');
      this.getAccount(accountId);
      this.getAccountStockList(accountId);
    });

  }

  getAccount(accountId: number) {
    this.accountService.getAccount(accountId).subscribe((account) => {
      this.selectedAccount = account;
    });
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

  public goToAddTrade(stockId: number) {
    this.router.navigate([`/stock/${stockId}/createTrade`]);
  }

  public goToAddDividend(stockId: number) {
    this.router.navigate([`/stock/${stockId}/createDividend`]);
  }

  goToAccountStockList(accountId: number) {
    this.router.navigate([`/account/${accountId}/stock-list`]);
  }

  public getAccountStockList(accountId: number): void {
    this.stockService.getAccountStockList(accountId).subscribe(
      (response: Stock[]) => {
        console.log(response);
        this.stocks = response;
      },
      (error: HttpErrorResponse) => alert(error.message),
      () => console.log('completed')
    );
  }
  
  

}
