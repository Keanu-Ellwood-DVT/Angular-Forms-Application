import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { EmailValidationFactory } from '../validators/email-validation-factory';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true
    }
  ]
})

export class EmailDirective implements Validator {

  validateEmail: ValidatorFn;

  constructor() {
    this.validateEmail = EmailValidationFactory.email();
   }

   validate(cont: AbstractControl): ValidationErrors | null {
     return this.validateEmail(cont);
   }
}
