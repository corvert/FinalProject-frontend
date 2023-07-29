import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account } from '../service/account';
import { AccountService } from '../service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  account: Account = new Account();

  constructor(private accountService:AccountService,
   private router: Router){}

  ngOnInit(): void {
    
  }

  saveAccount(){
    this.accountService.addAccount(this.account).subscribe(data =>{
      console.log(data);
      this.goToAccountList();
    },
    error => console.log(error));
  }

  goToAccountList(){
    this.router.navigate(['account']);
  }

  onSubmit(addAccountForm: NgForm){
    if(addAccountForm.valid){
      console.log(addAccountForm.value);
      this.saveAccount();
    }
    
  }

}