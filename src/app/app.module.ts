import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ViewAccountsComponent } from './view-accounts/view-accounts.component';
import { ViewStocksComponent } from './view-stocks/view-stocks.component';
import { ViewTradesComponent } from './view-trades/view-trades.component';
import { ViewDividendsComponent } from './view-dividends/view-dividends.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { AddTradeComponent } from './add-trade/add-trade.component';
import { AddDividendComponent } from './add-dividend/add-dividend.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ViewAccountsComponent,
    ViewStocksComponent,
    ViewTradesComponent,
    ViewDividendsComponent,
    AddAccountComponent,
    AddStockComponent,
    AddTradeComponent,
    AddDividendComponent,
    ViewTransactionComponent,
    AddTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
