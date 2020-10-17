import {
  Component, Input, OnInit, Output,
  EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy
} from '@angular/core';
import { Department } from '../department';

@Component({
  selector: 'dnt-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentListComponent implements OnInit, OnChanges {

  @Input() deptList: Department[] = [];

  @Input() title = '';

  @Output() selectDepartment = new EventEmitter<Department>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  sendToParent(dept: Department) {
    // send to parent
    this.selectDepartment.emit(dept);
  }

}
