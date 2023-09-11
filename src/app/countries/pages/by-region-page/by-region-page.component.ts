import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {


  region: Country[] = []

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }


  searchByCountry(region: string) {
    console.log('--> ', region);
    this.countryService.searchRegion(region).subscribe(a => {
      this.region = a
      console.log(a);

    })
  }

}
