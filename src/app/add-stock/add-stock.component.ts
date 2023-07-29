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

stock: Stock = new Stock();
account: Account = new Account();


constructor(private stockService:StockService,
  private accountService: AccountService,
  private router: Router,
  private route: ActivatedRoute
  ){}

  ngOnInit(): void {
   
   
  }

  saveStock(){
    this.stockService.addStock(this.stock, this.account).subscribe(data =>{
      console.log(data);
      this.goToStockList();
    },
    error => console.log(error));
  }



  goToStockList(){
    this.router.navigate(['stock']);
  }

  onSubmit(addStockForm: NgForm){
    if(addStockForm.valid){
      console.log(addStockForm.value);
      this.saveStock();
    }
    
  }




}
