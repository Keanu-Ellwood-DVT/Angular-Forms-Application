import { ValidatorFn, AbstractControl } from '@angular/forms';

export class EmailValidationFactory {
    static email(): ValidatorFn {
        return (control: AbstractControl) => {
            if (!control.value) {
                return null;
            }
            const isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(control.value);
            return isValid ? null : { validEmail: true };
        };
    }
}
