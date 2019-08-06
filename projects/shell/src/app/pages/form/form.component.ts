import { Component, OnInit, OnDestroy } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { PaymentSystem, Geolocation, Country } from '@models';
import { PaymentService, GeolocationService } from '@services';
import { FadeAnimation } from './fade.animation';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [FadeAnimation]
})
export class FormComponent implements OnInit, OnDestroy {

    public paymentSystems: PaymentSystem[];
    public geolocation: Geolocation;
    public countries: Country[];
    public paymentSystemActive: PaymentSystem;

    private subs: Subscription = new Subscription();

    constructor(
        private paymentService: PaymentService,
        private geolocationService: GeolocationService,
        private router: Router
    ) {}

    public ngOnInit(): void {
        this.getCountries();
        this.getUserData();
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    public onSetCountry(country: Country): void {
        this.loadPaymentSystems(country.alpha2Code);
    }

    public onSelectPaymentSystem(paymentSystem: PaymentSystem): void {
        this.paymentSystemActive = paymentSystem;
    }

    public onPay(): void {
        this.router.navigate(['success']);
    }

    private getUserData(): void {
        this.subs.add(this.geolocationService.getUserGeolocation()
            .pipe(
                mergeMap((geolocation: Geolocation) => {
                    this.geolocation = geolocation;
                    return this.paymentService.loadPaymentSystems(geolocation.country);
                })
            ).subscribe((paymentSystems: PaymentSystem[]) => {
                this.paymentSystems = paymentSystems;
            })
        );
    }

    private loadPaymentSystems(countryCode: string): void {
        this.subs.add(this.paymentService.loadPaymentSystems(countryCode).subscribe((paymentSystems: PaymentSystem[]) => {
            this.paymentSystems = paymentSystems;
        }));
    }

    private getCountries(): void {
        this.subs.add(this.geolocationService.getCountries().subscribe((countries: Country[]) => {
            this.countries = countries;
        }));
    }

}
