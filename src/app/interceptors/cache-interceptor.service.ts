import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, 
  HttpHeaders, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

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

    console.log('here the cache interceptor')
    // return next.handle(request);
    return next.handle(request).pipe(
      tap(() => console.log('here cache intercepted')),
      map((event: HttpEvent<any>) => {
        // if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        // }
        return event;
      })
    );
  }

}
