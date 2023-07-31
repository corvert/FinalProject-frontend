import { Component } from '@angular/core';
import { Account } from '../service/account';
import { AccountService } from '../service/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../service/stock.service';

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css']
})

export class ViewAccountsComponent implements OnInit {
  public accounts: Account[];
  selectedAccount: Account;

  constructor(private accountService: AccountService,
    private stockService: StockService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getAccountList();

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

  getAccountList() {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }

  goToAddStock(accountId: number) {
    this.router.navigate([`/account/${accountId}/createStock`]);
  }

  goAddWithdraw(accountId: number) {
    this.router.navigate([`/account/${accountId}/createTransaction`]);
  }

  goToAccountStockList(accountId: number) {
    this.router.navigate(['/account', accountId, 'stock-list']);
  }



}
