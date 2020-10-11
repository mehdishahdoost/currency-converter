import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  amount: number = 1;
  from: string = 'CAD';
  to: string = 'USD';
  rates: { [key: string]: number };

  constructor(private exchangeRateService: ExchangeRatesService) {}

  loadRates() {
    this.exchangeRateService
      .getRates(this.from)
      .subscribe((res) => (this.rates = res.rates));
  }

  getAllCurrencies(): string[] {
    return Object.keys(this.rates);
  }

  convert(): number {
    return this.amount * this.rates[this.to];
  }

  ngOnInit(): void {
    this.loadRates();
  }
}
