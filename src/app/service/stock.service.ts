import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public getAllStocks(): Observable<Stock[]>{
    return this.http.get<Stock[]>(`${this.apiServerUrl}/stock`);
  }

  public addStock(stock: Stock, account: Account): Observable<Stock>{
     return this.http.post<Stock>(`${this.apiServerUrl}/stock/add-stock`, stock);
  }


}
