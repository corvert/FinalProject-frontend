import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public getAllAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(`${this.apiServerUrl}/account`);
  }

  public addAccount(account: Account): Observable<Account>{
     return this.http.post<Account>(`${this.apiServerUrl}/account/add-account`, account);
  }

}
