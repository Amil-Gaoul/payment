import { ErrorMessages } from './error-messages';
import { Component, OnInit, Input, SimpleChanges, OnDestroy, OnChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

const unknowError: string = 'Unknow error!';

@Component({
    selector: 'app-validation-error-message',
    templateUrl: './validation-error-message.component.html',
    styleUrls: ['./validation-error-message.component.scss']
})
export class ValidationErrorMessageComponent implements OnInit, OnDestroy, OnChanges {

    @Input() public control: AbstractControl;
    @Input() public controlName: string;
    @Input() public isFocus: boolean;
    public errorMessage: string;

    private subs: Subscription = new Subscription();

    constructor() { }

    public ngOnInit(): void {
        if (this.control) {
            this.subs.add(this.control.valueChanges.subscribe(() => this.createErrorMessage()));
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if ('isFocus' in changes) {
            this.createErrorMessage();
        }
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    private createErrorMessage(): void {
        if (this.control.invalid) {
            if (this.control.errors.required) {
                if (this.control.touched && !this.isFocus) {
                    this.errorMessage = this.getErrorMessage('required');
                }
            } else {
                for (const error of Object.keys(this.control.errors)) {
                    this.errorMessage = ErrorMessages[this.controlName][error];
                }
            }
        } else {
            this.errorMessage = '';
        }
    }

    private getErrorMessage(errorType: string): string {
        return ErrorMessages[this.controlName][errorType] || unknowError;
    }

}
