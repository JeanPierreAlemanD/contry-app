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

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  searchByCapital(term: string) {
    console.log('--> ', term);
    this.countryService.searchCapital(term).subscribe(a => {
      this.countries = a
      console.log(a);

    })
  }

}
