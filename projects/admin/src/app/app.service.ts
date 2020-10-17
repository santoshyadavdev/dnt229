import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './config/config.service';
import { AppConfig } from './config/config';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient,
              @Inject(AppConfigService) private appConfig: AppConfig) { }

  getData() {
    return this.http.get(this.appConfig.apiEndPoint);
  }
}
