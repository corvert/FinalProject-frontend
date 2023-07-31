import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ViewAccountsComponent } from './view-accounts/view-accounts.component';
import { ViewStocksComponent } from './view-stocks/view-stocks.component';
import { ViewTradesComponent } from './view-trades/view-trades.component';
import { ViewDividendsComponent } from './view-dividends/view-dividends.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { AddTradeComponent } from './add-trade/add-trade.component';
import { AddDividendComponent } from './add-dividend/add-dividend.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

const routes: Routes = [
  //{path: '', component: ContentComponent},
  {path: 'account', component: ViewAccountsComponent},
  {path: 'stock', component: ViewStocksComponent},
  {path: 'trade', component: ViewTradesComponent},
  {path: 'dividend', component: ViewDividendsComponent},
  {path: 'add-account', component: AddAccountComponent},
  {path: 'add-stock', component: AddStockComponent},
  {path: 'add-trade', component: AddTradeComponent},
  {path: 'add-dividend', component: AddDividendComponent},
  {path: 'account/:id/createStock', component: AddStockComponent},
  {path: "stock/:id/createTrade", component: AddTradeComponent},
  {path: "stock/:id/createDividend", component: AddDividendComponent},
  {path: "transaction", component: ViewTransactionComponent},
  {path: "account/:id/createTransaction", component: AddTransactionComponent},
  {path: "account/:id/stock-list", component: ViewStocksComponent},
 // {path: "account/:id/stock-list", component: ViewAccountsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
