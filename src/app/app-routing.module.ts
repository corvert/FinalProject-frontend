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
  {path: 'account/:id/stock', component: AddStockComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
