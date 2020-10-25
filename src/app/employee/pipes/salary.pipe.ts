import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  transform(empList: Employee[], salary: number, age?: number): Employee[] {
    console.log(age);
    return empList.filter((emp)=> emp.salary > salary);
  }

}
