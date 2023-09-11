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

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }


  searchByCountry(term: string) {
    console.log('--> ', term);
    this.countryService.searchCountry(term).subscribe(a => {
      this.countries = a
      console.log(a);

    })
  }


}
