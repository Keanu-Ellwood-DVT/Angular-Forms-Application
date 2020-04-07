import { ValidatorFn, AbstractControl } from '@angular/forms';

export class PhoneNumberValidationFactory {
    static SouthAfricanPhoneNumber(): ValidatorFn {
        return (control: AbstractControl) => {
            if (!control.value) {
                return null;
            }
            const isValid = /^(\+27|27|0)[0-9]{2}( |-)?[0-9]{3}( |-)?[0-9]{4}( |-)?(x[0-9]+)?(ext[0-9]+)?/.test(control.value);
            return isValid ? null : { localPhoneNumber: true };
        };
    }
}
