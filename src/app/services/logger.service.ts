import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class LoggerService {

  constructor() {
    console.log('new loggerservice created!');
   }

  log(message: string) {
    console.log(message);
  }
}
