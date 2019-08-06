import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Country, Geolocation } from '@models';
import { SlideInOutAnimation } from './aucotomplete.animation';


@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
    animations: [SlideInOutAnimation]
})
export class AutocompleteComponent implements OnInit {

    @Input() public countries: Country[];
    @Input() public userGeolocation: Geolocation;
    @Output() public setCountry: EventEmitter<Country> = new EventEmitter<Country>();
    @ViewChild('input') public input: ElementRef;
    public countryValue: string;
    public isShowAutocomplete: boolean;
    public countryChosen: Country;

    constructor(private elem: ElementRef) { }

    @HostListener('document:click', ['$event'])
    public onClick(event: Event): void {
        if (this.elem.nativeElement.contains(event.target)) { return; }
        this.onHideAutocomplete();
    }

    public ngOnInit(): void {
        this.initUserCountry();
    }

    public onShowAutocomplete(): void {
        this.isShowAutocomplete = true;
    }

    public onHideAutocomplete(): void {
        this.isShowAutocomplete = false;
    }

    public onSetCountry(country: Country): void {
        this.countryChosen = country;
        this.setCountry.emit(country);
        this.onHideAutocomplete();
    }

    public onDeleteCountryChosen(): void {
        this.countryChosen = null;
        this.input.nativeElement.focus();
        setTimeout(() => this.onShowAutocomplete());
    }

    private initUserCountry(): void {
        for (const country of this.countries) {
            if (this.userGeolocation.country === country.alpha2Code) {
                this.countryChosen = country;
                break;
            }
        }
    }

}
