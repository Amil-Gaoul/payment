import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

    @Input() public form: FormGroup;
    @Input() public controlName: string;
    @Input() public placeholder: string;
    @Input() public label: string;
    @Input() public maxLength: number;
    public control: AbstractControl;
    public isFocus: boolean = true;
    public isInvalid: boolean;

    private subs: Subscription = new Subscription();

    constructor() { }

    public ngOnInit(): void {
        this.control = this.form.get(this.controlName);
        this.subs.add(this.control.valueChanges.subscribe(() => this.checkControlValid()));
    }

    public onFocus(): void {
        this.isFocus = true;
    }

    public onBlur(): void {
        this.isFocus = false;
        this.checkControlValid();
    }

    private checkControlValid(): void {
        if (this.control && this.control.touched && !this.isFocus) {
            this.isInvalid = this.control.invalid;
        }
    }

}
