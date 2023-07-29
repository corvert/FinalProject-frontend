import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dividend } from './dividend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DividendService {

  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public getAllDividends(): Observable<Dividend[]>{
    return this.http.get<Dividend[]>(`${this.apiServerUrl}/dividend`);
  }

  public addDividend(dividend: Dividend): Observable<Dividend>{
     return this.http.post<Dividend>(`${this.apiServerUrl}/trade/add-stock`, dividend);
  }
}
