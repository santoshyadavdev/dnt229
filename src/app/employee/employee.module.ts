import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { NamePipe } from './pipes/name.pipe';
import { SalaryPipe } from './pipes/salary.pipe';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeOnboardingComponent,
    NamePipe,
    SalaryPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    HeaderModule
  ]
})
export class EmployeeModule { }
