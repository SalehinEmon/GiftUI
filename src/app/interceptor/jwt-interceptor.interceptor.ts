import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private acccountService:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (this.acccountService.IslogIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.acccountService.GetJWTToken()}`
        }
      });

    }

    
    return next.handle(request);
  }
}
