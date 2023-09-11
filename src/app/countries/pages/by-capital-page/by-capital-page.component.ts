import { Country } from '../../interfaces/country';
import { CountryService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  countries: Country[] = []
  public isLoading: boolean = false
  public initialValue: string = ''

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;

  }

  searchByCapital(term: string) {
    this.isLoading = true
    console.log('--> ', term);
    this.countryService.searchCapital(term).subscribe(a => {
      this.countries = a
      this.isLoading = false


    })
  }

}
