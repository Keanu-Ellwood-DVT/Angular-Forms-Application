import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { IdNumberValidationFactory } from '../validators/id-number-validation-factory';


@Directive({
  selector: '[appIdentificationNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IdentificationNumberDirective,
      multi: true
    }
  ]
})

export class IdentificationNumberDirective implements Validator {
  validateIdNumber: ValidatorFn;

  constructor() {
    this.validateIdNumber = IdNumberValidationFactory.SouthAfricanIDNumber();
   }

   validate(cont: AbstractControl): ValidationErrors | null {
     return this.validateIdNumber(cont);
   }

}
