import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {


  region: Country[] = []

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }


  searchByRegion(region: Region) {
    this.selectedRegion = region;

    console.log('--> ', region);
    this.countryService.searchRegion(region).subscribe(a => {
      this.region = a
      console.log(a);

    })
  }

}
