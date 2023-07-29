import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trade } from './trade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public getAllTrades(): Observable<Trade[]>{
    return this.http.get<Trade[]>(`${this.apiServerUrl}/trade`);
  }

  public addTrade(trade: Trade): Observable<Trade>{
     return this.http.post<Trade>(`${this.apiServerUrl}/trade/add-stock`, trade);
  }
}
