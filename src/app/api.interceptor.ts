import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.method === 'GET') {
      const modifiedRequest = request.clone({ headers: new HttpHeaders().set('token', 'dfdskjhfdksjfhgkjh') });
      return next.handle(modifiedRequest);
    }
    return next.handle(request);
  }
}
