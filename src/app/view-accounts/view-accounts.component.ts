import { Component } from '@angular/core';
import { Account } from '../service/account';
import { AccountService } from '../service/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css']
})

export class ViewAccountsComponent implements OnInit {
  public accounts: Account[];

  constructor(private accountService: AccountService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.getAccounts();
  }

  public getAccounts(): void {
    this.accountService.getAllAccounts().subscribe(
      {
        next: (response: Account[]) => {
          console.log(response);
          this.accounts = response;
        },
        error: (error: HttpErrorResponse) => alert(error.message),
        complete: () => console.log("completed")
      }
    );
  }

}
