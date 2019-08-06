import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'projects/shell/src/environments/environment';
import { PaymentSystem } from '@models';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

    constructor(private http: HttpClient) { }

    public loadPaymentSystems(countryCode: string): Observable<PaymentSystem[]> {
        const params: HttpParams = new HttpParams().set('country_code', countryCode).set('key', environment.projectKey);
        return this.http.get<PaymentSystem[]>(environment.api, { params })
        .pipe(
            tap((paymentSystems: PaymentSystem[]) => paymentSystems)
        );
    }

}
