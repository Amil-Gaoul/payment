import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Geolocation, Country } from '@models';
import { environment } from 'projects/shell/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

    constructor(private http: HttpClient) { }

    public getUserGeolocation(): Observable<Geolocation> {
        return this.http.get<Geolocation>(environment.geolocationApi, { headers: this.createAuthoriaztionHeader() })
            .pipe(
                tap((geolocation: Geolocation) => geolocation)
            );
    }

    public getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(`${environment.countriesApi}/rest/v2/all`)
            .pipe(
                tap((countries: Country[]) => countries)
            );
    }

    private createAuthoriaztionHeader(): HttpHeaders {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', 'application/json');

        const tokenValue: string = 'Bearer ' + environment.geolocationToken;
        headers = headers.set('Authorization', tokenValue);
        return headers;
    }

}
