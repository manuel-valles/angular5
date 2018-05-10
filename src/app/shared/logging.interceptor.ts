import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'

export class LoggingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Use the do operator to not consume (instead of subscribe)
    return next.handle(req).do(
      event => console.log('Logging Interceptor!', event)
    );
  }
}