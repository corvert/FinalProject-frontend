import { Component, OnInit } from '@angular/core';
import { Stock } from '../service/stock';
import { StockService } from '../service/stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Account } from '../service/account';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  selectedAccount: Account;
  newStock: Stock = new Stock();
  stock: Stock = new Stock();
  account: Account = new Account();


  constructor(
    private stockService: StockService,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const accountId = +params.get('id');
      this.getAccount(accountId);
    });
  }

  getAccount(accountId: number) {
    this.accountService.getAccount(accountId).subscribe((account) => {
      this.selectedAccount = account;
    });
  }

  addStockToAccount(newStock: Stock) {
    this.stockService.addStockToAccount(this.selectedAccount.id, newStock).subscribe(data => {
      this.goToStockList();
      console.log(data);
    }, 
   
      error => console.log(error));
  }

  onSubmit(addStockForm: NgForm) {
    this.stockService.addStockToAccount(this.selectedAccount.id, this.newStock).subscribe(() => {
      this.goToStockList();
    }, error => console.log(error));
    
  }


  goToStockList() {
    this.router.navigate(['stock']);
  }

}
