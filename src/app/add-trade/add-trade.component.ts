import { Component, OnInit } from '@angular/core';
import { Stock } from '../service/stock';
import { Trade } from '../service/trade';
import { TradeService } from '../service/trade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../service/stock.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-trade',
  templateUrl: './add-trade.component.html',
  styleUrls: ['./add-trade.component.css']
})
export class AddTradeComponent implements OnInit {

  selectedStock: Stock;
  newTrade: Trade = new Trade();
  trade: Trade = new Trade();

  constructor(
    private tradeService: TradeService,
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

  addTradeToStock(newTrade: Trade) {
    this.tradeService.addTradeToStock(this.selectedStock.id, newTrade).subscribe(data => {
      this.goToTradeList();
      console.log(data);
    }, 
  
      error => console.log(error));
  }

  onSubmit(addTradeForm: NgForm) {
    this.tradeService.addTradeToStock(this.selectedStock.id, this.newTrade).subscribe(() => {
      this.goToTradeList();
    }, error => console.log(error));
    
  }
  goToTradeList() {
    this.router.navigate(['trade']);
  }
  

}
