import { Component, HostBinding, OnInit, Self, ViewEncapsulation } from '@angular/core';
import { Department } from './department';
import { DepartmentService } from './services/department.service';

@Component({
  selector: 'dnt-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers : [DepartmentService]
})
export class DepartmentComponent implements OnInit {

  @HostBinding('class') class = 'dnt-department';

  departmentList: Department[] = [];

  // departmentService = new DepartmentService();

  selectedDepartment: Department;

  constructor(@Self() private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentList = this.departmentService.getDepartmentList();
  }

  receiveFromChild(department: Department) {
    // perform operation
    this.selectedDepartment = department;
  }

  addDepartment() {
    const newDepartment = {
      id: 4, budget: 10000, empCount: 20, hod: 'Lakshmi', name: 'Tech'
    };
    // this.departmentList.push({
    //   id: 4, budget: 10000, empCount: 20, hod: 'Lakshmi', name: 'Tech'
    // });
    this.departmentService.addNewDepartment(newDepartment);
    // this.departmentList = [...this.departmentList, newDepartment];
  }

}
