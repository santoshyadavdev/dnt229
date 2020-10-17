import { Component, Optional, SkipSelf, ViewEncapsulation } from '@angular/core';
import { DepartmentService } from './department/services/department.service';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'dnt-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello from
  //   Template!</h1>`,
  styleUrls: ['./app.component.css']
  // encapsulation : ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'dnt229';
  role = 'Users';

  constructor(@SkipSelf() private deptService: DepartmentService,
              @Optional() private loggerService: LoggerService) { }


  addDepartment() {
    const newDepartment = {
      id: 5, budget: 50000, empCount: 20, hod: 'Abhijit', name: 'RnD'
    };

    this.deptService.addNewDepartment(newDepartment);
    if (this.loggerService) {
      this.loggerService.log('New Department added');
    }

  }
}
