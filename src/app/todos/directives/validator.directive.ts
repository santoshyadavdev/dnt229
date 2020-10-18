import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[dntValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidatorDirective, multi: true }]
})
export class ValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (control && control.value) {
      const value = control.value as string;
      if (value.includes('test')) {
        return { invalidName: true }
      }
    }
    return null
  }


}
