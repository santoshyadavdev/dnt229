import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeonboardingService {

  constructor() { }

  getEmployeeData() {
    return {
      name: 'Chetan',
      dob: new Date('1-Jan-2000'),
      email: 'test@test.com',
      address: {
        addr1: 'Test',
        addr2: 'Test',
        city: 'Test',
        pin: 400080
      }
    }
  }
}
