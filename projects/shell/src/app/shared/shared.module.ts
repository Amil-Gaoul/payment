import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    PaymentMethodComponent,
    AutocompleteComponent,
    CardFormComponent,
    ValidationErrorMessageComponent,
    FormInputComponent,
    PaymentListComponent,
    AlertComponent
} from '@components';
import { AutocompleteFilterPipe } from '@pipes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        PaymentMethodComponent,
        AutocompleteComponent,
        CardFormComponent,
        ValidationErrorMessageComponent,
        FormInputComponent,
        PaymentListComponent,
        AlertComponent,
        AutocompleteFilterPipe
    ],
    exports: [
        PaymentMethodComponent,
        AutocompleteComponent,
        CardFormComponent,
        ValidationErrorMessageComponent,
        FormInputComponent,
        PaymentListComponent,
        AlertComponent,
        AutocompleteFilterPipe
    ]
})

export class SharedModule { }
