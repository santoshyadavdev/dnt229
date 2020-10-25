import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'dnt-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  salary: FormControl;

  employeeList: Employee[] = [
    {
      id: 1, name: 'Sajal', salary: 150000, email: 'test@test.com', age: 25,
      dob: new Date('1-Jan-2004')
    },
    {
      id: 2, name: 'Sid', salary: 120000, email: 'test2@test.com', age: 26.8,
      dob: new Date('1-Jan-2005')
    },
    {
      id: 3, name: 'Suraj', salary: 130000, email: 'test3@test.com', age: 27.5,
      dob: new Date('1-Jan-2006')
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.salary = new FormControl('');
  }

  trackByFn(i: number, data: Employee) {
    return data.id ?? i;
  }


}
