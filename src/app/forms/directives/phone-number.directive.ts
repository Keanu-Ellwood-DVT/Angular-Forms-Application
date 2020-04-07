import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { PhoneNumberValidationFactory } from '../validators/phone-number-validation-factory';

@Directive({
  selector: '[appPhoneNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneNumberDirective,
      multi: true
    }
  ]
})

export class PhoneNumberDirective implements Validator{
  validatePhoneNumber: ValidatorFn;

  constructor() {
    this.validatePhoneNumber = PhoneNumberValidationFactory.SouthAfricanPhoneNumber();
   }

   validate(cont: AbstractControl): ValidationErrors | null {
     return this.validatePhoneNumber(cont);
   }

}
