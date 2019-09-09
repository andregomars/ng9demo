import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, 
  HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      headers: new HttpHeaders({
        'Cache-Control': 'no-store'
      })
    });

    return next.handle(request);
  }

}
