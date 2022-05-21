import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../service/auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private inject: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = this.inject.get(AuthService);

    const jwtToken = request.clone({
      setHeaders: {
        Authorization: 'bearer ' + authService.getToken()
      }
    });

    return next.handle(jwtToken);
  }
}
