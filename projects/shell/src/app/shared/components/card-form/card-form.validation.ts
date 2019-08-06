import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CardFormValidation {

    public static cardNumberValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            let value: string = control.value;
            if (!value || /[^0-9-\s]+/.test(value)) {
                return null;
            }

            let nCheck: number = 0;
            let bEven: boolean = false;
            value = value.replace(/\D/g, '');

            for (let i: number = value.length - 1; i >= 0; i--) {
                const cDigit: string = value.charAt(i);
                let nDigit: number = parseInt(cDigit, 10);
                if (bEven && (nDigit *= 2) > 9) {
                    nDigit -= 9;
                }
                nCheck += nDigit;
                bEven = !bEven;
            }

            if ((nCheck % 10) === 0) {
                return null;
            } else {
                return { invalidCardNumber: true };
            }
        };
    }

    public static dateValidator(monthField: string, yearField: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            const controlMonth: AbstractControl = control.get(monthField);
            const controlYear: AbstractControl = control.get(yearField);
            const month: number = +controlMonth.value;
            const year: number = +controlYear.value;
            const todayDate: Date = new Date();
            if (!month && !year) {
                return null;
            }
            if (month > 12 || month < 0) {
                controlMonth.setErrors({ invalidMonth: true });
                return null;
            }
            if (year < new Date().getFullYear()) {
                controlYear.setErrors({ yearLessThan: true });
                return null;
            }
            const date: Date = new Date(year, month - 1, new Date().getDate());
            if (date < todayDate) {
                controlMonth.setErrors({ monthLessThan: true });
            }
            return null;
        };
    }

}
