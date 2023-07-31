import { Component, OnInit } from '@angular/core';
import { Account } from '../service/account';
import { Transaction } from '../service/transaction';
import { TransactionService } from '../service/transaction.service';
import { AccountService } from '../service/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  selectedAccount: Account;
  newTransaction: Transaction = new Transaction;

constructor ( private transactionService: TransactionService,
  private accountService: AccountService,
  private router: Router,
    private route: ActivatedRoute
  ){}

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

  addTransactionToAccount(newTransaction: Transaction) {
    this.transactionService.addTransactionToAccount(this.selectedAccount.id, newTransaction).subscribe(data => {
      this.goToTransactionList();
      console.log(data);
    }, 
      error => console.log(error));
  }

  onSubmit(addTransactionForm: NgForm) {
    this.transactionService.addTransactionToAccount(this.selectedAccount.id, this.newTransaction).subscribe(() => {
      this.goToTransactionList();
    }, error => console.log(error)); 
  }

  goToTransactionList() {
    this.router.navigate(['transaction']);
  }

}
