import { ValidatorFn, AbstractControl } from '@angular/forms';

export class IdNumberValidationFactory {
    static SouthAfricanIDNumber(): ValidatorFn {
        return (control: AbstractControl) => {
            if (!control.value) {
                return null;
            }
            const isValid = /^[0-9]{2}(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])[0-9]{4}[01]{1}[89]{1}[0-9]{1}?/.test(control.value);
            return isValid ? null : { zaIDNumber: true };
        };
    }
}
