import { Component, OnInit } from '@angular/core';
import { Stock } from '../service/stock';
import { Dividend } from '../service/dividend';
import { DividendService } from '../service/dividend.service';
import { StockService } from '../service/stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-dividend',
  templateUrl: './add-dividend.component.html',
  styleUrls: ['./add-dividend.component.css']
})
export class AddDividendComponent implements OnInit {

  selectedStock: Stock;
  newDividend: Dividend = new Dividend();
  dividend: Dividend = new Dividend();

  constructor(
    private dividendService: DividendService,
    private stockService: StockService,
    private router: Router,
    private route: ActivatedRoute

  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const stockId = +params.get('id');
      this.getStock(stockId);
    });     
  }

  getStock(stockId: number) {
    this.stockService.getStock(stockId).subscribe((stock) => {
      this.selectedStock = stock;
    });
  }

  addDividendToStock(newDividend: Dividend) {
    this.dividendService.addDividendToStock(this.selectedStock.id, newDividend).subscribe(data => {
      this.goToDividendList();
      console.log(data);
    }, 
  
      error => console.log(error));
  }

  onSubmit(addDividendForm: NgForm) {
    this.dividendService.addDividendToStock(this.selectedStock.id, this.newDividend).subscribe(() => {
      this.goToDividendList();
    }, error => console.log(error));
    
  }

  goToDividendList() {
    this.router.navigate(['dividend']);
  }

}
