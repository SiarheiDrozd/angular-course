import {HttpInterceptor} from './http-interceptor.interface';
import {HttpEvent, HttpEventType, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpEventType.Response>> {
    const token = localStorage.getItem('userToken');
    const authReq = req.clone({
      setHeaders: {Authorization: `${token}`}
    });
    return next.handle(authReq);
  }
}
