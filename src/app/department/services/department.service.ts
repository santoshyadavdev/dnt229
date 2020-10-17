import { Injectable } from '@angular/core';
import { Department } from '../department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  deptList: Department[] = [];

  constructor() {
    console.log('This is a department service instance');
  }

  getDepartmentList(): Department[] {
    return this.deptList = [
      { id: 1, name: 'IT', budget: 10000, empCount: 500, hod: 'Rajesh' },
      { id: 2, name: 'Marketing', budget: 20000, empCount: 100, hod: 'Krish' },
      { id: 3, name: 'Communication', budget: 30000, empCount: 50, hod: 'Bishan' },
    ];
  }

  addNewDepartment(dept: Department) {
    this.deptList.push(dept);
  }
}
