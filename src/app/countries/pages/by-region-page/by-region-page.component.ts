import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  public isLoading: boolean = false

  constructor(private countryService: CountryService) { }


  ngOnInit(): void {
    this.region = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
  }


  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.isLoading = true
    console.log('--> ', region);
    this.countryService.searchRegion(region).subscribe(a => {
      this.region = a
      this.isLoading = false
      console.log(a);

    })
  }

}
