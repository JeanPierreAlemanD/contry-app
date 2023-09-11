import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  countries: Country[] = []
  public initialValue: string = ''
  public isLoading: boolean = false

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }


  searchByCountry(term: string) {
    console.log('--> ', term);
    this.isLoading = true
    this.countryService.searchCountry(term).subscribe(a => {
      this.countries = a
      this.isLoading = false
      console.log(a);

    })
  }


}
