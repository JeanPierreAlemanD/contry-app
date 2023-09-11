import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {

    api_url = 'https://restcountries.com/v3.1'

    public cacheStore: CacheStore = {
        byCapital: { term: '', countries: [] },
        byCountries: { term: '', countries: [] },
        byRegion: { region: '', countries: [] }
    }

    constructor(private http: HttpClient) {
    }

    private getCountriesRequest(url: string): Observable<Country[]> {
        return this.http.get<Country[]>(url).pipe(
            catchError(error => of([])),
        );
    }

    searchCountryByAlphaCode(code: string): Observable<Country | null> {
        const url = `${this.api_url}/alpha/${code}`
        return this.http.get<Country[]>(url)
            .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                catchError(error => of(null)
                )
            );
    }


    searchCapital(term: string): Observable<Country[]> {
        const url = `${this.api_url}/capital/${term}`
        return this.getCountriesRequest(url)
            .pipe(
                tap(countries => this.cacheStore.byCapital = { term, countries })
            )
    }


    searchCountry(country: string): Observable<Country[]> {
        const url = `${this.api_url}/name/${country}`
        return this.getCountriesRequest(url)
    }


    searchRegion(region: string): Observable<Country[]> {
        const url = `${this.api_url}/region/${region}`
        return this.getCountriesRequest(url)
    }
}