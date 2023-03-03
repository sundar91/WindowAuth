import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ withCredentials: true });
    return next.handle(req);
  }
}
