import { Component, OnInit } from '@angular/core';
import { EmployeeonboardingService } from './services/employeeonboarding.service';
import { CustomValidator } from '../customvalidator/customvalidator';

import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'dnt-employee-onboarding',
  templateUrl: './employee-onboarding.component.html',
  styleUrls: ['./employee-onboarding.component.css']
})
export class EmployeeOnboardingComponent implements OnInit {

  onboardingForm: FormGroup;

  get pastExp() {
    return this.onboardingForm.get('pastExp') as FormArray;
  }

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeonboardingService) { }

  ngOnInit(): void {
    this.onboardingForm = this.fb.group({
      name: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(2), CustomValidator.nameValidator]
      }),
      password: [''],
      confirmPassword: [''],
      dob: ['', Validators.required],
      // email: new FormControl({ value: 'test@test.com', disabled: true }),
      email: ['', [Validators.required, Validators.email]],
      file: [''],
      address: this.fb.group({
        addr1: new FormControl('', [Validators.required, CustomValidator.specialCharValidator(['@', '!'])]),
        addr2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl('')
      }),
      pastExp: this.fb.array(
        [
          this.buildForm()
        ]
      )
    }, { updateOn: 'blur', validators: [CustomValidator.passwordValidator] });

    this.bindFormData();
  }

  bindFormData() {
    // this.onboardingForm.setValue(this.employeeService.getEmployeeData());
    this.onboardingForm.patchValue(this.employeeService.getEmployeeData());
  }

  addPassport() {
    this.onboardingForm.addControl('passport', new FormControl(''));
    // this.onboardingForm.removeControl('passport');// To remove the control
  }



  addExp() {
    this.pastExp.push(this.buildForm());
  }

  removeExp(i: number) {
    this.pastExp.removeAt(i);
  }

  removeAll() {
    this.pastExp.clear();
  }


  private buildForm() {
    return this.fb.group({
      employer: new FormControl('', Validators.required),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      designation: new FormControl('')
    });
  }

  addEmployee() {
    // console.log(this.onboardingForm.value);
    console.log(this.onboardingForm.getRawValue());
    this.resetForm();
  }

  resetForm() {
    this.onboardingForm.reset({
      name: 'Chetan',
      dob: new Date('1-Jan-2000'),
      email: 'test@test.com',
      file: '',
      password: '',
      confirmPassword: '',
      address: {
        addr1: 'Test',
        addr2: 'Test',
        city: 'Test',
        pin: 400080
      },
      pastExp: [],
    });
  }
}
