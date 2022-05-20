import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../service/auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private inject: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authservice = this.inject.get(AuthService);

    const jwtToken = request.clone({
      setHeaders: {
        Authorization: 'bearer ' + authservice.getToken()
      }
    });

    return next.handle(jwtToken);
  }
}
