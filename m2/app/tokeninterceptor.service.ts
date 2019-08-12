import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders,HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class TokeninterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    console.log("Interceptor Called...");
    if(req.url=='login'){
      return next.handle(req);
    }
    let request = req.clone({
      headers:new HttpHeaders().append('Authorization','ABCD')
    });

      return next.handle(request);
  }
}
