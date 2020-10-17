import { Component, OnInit, ContentChild, ContentChildren, QueryList, AfterContentInit, Host } from '@angular/core';
import { DepartmentComponent } from '../department/department.component';
import { DepartmentService } from '../department/services/department.service';

@Component({
  selector: 'dnt-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [DepartmentService]
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(DepartmentComponent, { static: true }) deptComponent : DepartmentComponent;

  @ContentChildren(DepartmentComponent) deptListComponent : QueryList<DepartmentComponent>;

  constructor(@Host() private deptService: DepartmentService) { }

  ngOnInit(): void {
    console.log(this.deptComponent.departmentList);
  }


  ngAfterContentInit(): void {
    this.deptListComponent.forEach((deptComponent)=> console.log(deptComponent))
  }

}
