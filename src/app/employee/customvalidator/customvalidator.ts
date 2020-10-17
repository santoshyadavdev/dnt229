import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {

  static nameValidator(control: AbstractControl) {
    const name = control.value as string;
    if (name.includes('test')) {
      return { invalidName: true }
    }
    return null;
  }

  static specialCharValidator(specialChars: string[]) {
    return (control: AbstractControl) => {
      const value = control.value as string;
      for (let char of specialChars) {
        if (value.includes(char)) {
          return { invalidchar: true }
        }
      }
      return null;
    }
  }

  static passwordValidator(onboardingForm: FormGroup) {
    const password = onboardingForm.get('password');
    const confirmPassword = onboardingForm.get('confirmPassword');

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ invalidpassword: true });
      return { invalidpassword: true }
    }
    return null;
  }

}
