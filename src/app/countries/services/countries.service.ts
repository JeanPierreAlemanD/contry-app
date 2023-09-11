import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountryService {

    api_url = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    searchCountryByAlphaCode(code: string): Observable<Country | null> {
        return this.http.get<Country[]>(`${this.api_url}/alpha/${code}`)
            .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                catchError(error => of(null)
                )
            );
    }


    searchCapital(term: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.api_url}/capital/${term}`)
            .pipe(
                catchError(error => of([])
                )
            );
    }


    searchCountry(country: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.api_url}/name/${country}`)
            .pipe(
                catchError(error => of([])
                )
            );
    }


    searchRegion(region: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.api_url}/region/${region}`)
            .pipe(
                catchError(error => of([])
                )
            );
    }



}