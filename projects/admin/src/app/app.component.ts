import { Component, Inject } from '@angular/core';
import { AppService } from './app.service';
import { windowService, seesionStorageService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';

  constructor(private appService: AppService,
              @Inject(windowService) private windowService: any,
              @Inject(seesionStorageService) private sessionStorageService: any) {
    // this.appService.getData().subscribe();
    console.log(sessionStorageService);
  }

}
