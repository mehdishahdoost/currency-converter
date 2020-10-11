import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  constructor(private http: HttpClient) {}

  getRates(base: String): Observable<ExchangeRatesResponse> {
    return this.http.get<ExchangeRatesResponse>(
      'https://api.exchangeratesapi.io/latest?base=' + base
    );
  }
}
