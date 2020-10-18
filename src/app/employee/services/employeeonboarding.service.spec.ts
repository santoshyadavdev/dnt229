import { TestBed } from '@angular/core/testing';

import { EmployeeonboardingService } from './employeeonboarding.service';

describe('EmployeeonboardingService', () => {
  let service: EmployeeonboardingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeonboardingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
