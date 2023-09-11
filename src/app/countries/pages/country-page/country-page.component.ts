import { switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchCountryByAlphaCode(id))
      )
      .subscribe(country => {
        console.log({ country })
        if (!country) return this.router.navigateByUrl('');
        console.log('TENEMOS UN PAÍS');
        return this.country = country
      });
  }

}
