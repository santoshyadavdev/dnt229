import {
  Component, DoCheck, ElementRef,
  OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit
} from '@angular/core';
import { Employee } from './employee';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'dnt-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, DoCheck, AfterViewInit {

  @ViewChild(HeaderComponent, { static: true }) headerComponent: HeaderComponent;
  @ViewChild('emailDiv', { static: true }) emailDiv: ElementRef;

  @ViewChildren(HeaderComponent) headerListComponet: QueryList<HeaderComponent>;

  employee: Employee = {
    age: 22,
    email: 'testEmployee',
    id: 1,
    name: 'test',
    salary: 45000,
    dob: new Date('1-Jan-2000')
  };

  name: string;

  email: string = 'Abhijit@dnt.com';

  hidden: boolean = false;

  constructor() {
    this.name = 'Abhijit';
  }

  ngOnInit(): void {
    this.headerComponent.title = 'Employee List';
    this.emailDiv.nativeElement.innerText = "The Email is not valid";
  }


  ngDoCheck(): void {
    console.log('Do Check is called');
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
      this.headerListComponet.forEach((headerComp) => headerComp.title = "New Header Title");
    // }, 0);
  }


  toggle() {
    this.hidden = !this.hidden;
  }

}
