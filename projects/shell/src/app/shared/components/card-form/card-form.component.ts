import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardFormValidation } from './card-form.validation';

@Component({
    selector: 'app-card-form',
    templateUrl: './card-form.component.html',
    styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

    @Output() public pay: EventEmitter<any> = new EventEmitter<any>();
    public formGroup: FormGroup;

    constructor(private fb: FormBuilder) {
        this.formGroup = this.fb.group({
            cardHolderName: ['', [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$')]],
            cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$'), CardFormValidation.cardNumberValidator()]],
            month: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
            year: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
            cvv: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(3)]]
        }, {
            validator: CardFormValidation.dateValidator('month', 'year')
        });
    }

    public ngOnInit(): void {
    }

    public onPay(): void {
        if (this.formGroup.valid) {
            this.pay.emit();
        }
    }

}
