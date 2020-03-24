import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request);
  }
}
