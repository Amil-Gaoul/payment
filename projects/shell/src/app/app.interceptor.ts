import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { AlertService } from '@services';
import { Alert } from '@models';
import { AlertType } from '@enums';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    constructor(private alertService: AlertService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                const alert: Alert = {
                    type: AlertType.danger,
                    message: 'Oops... Something went wrong...'
                };
                this.alertService.showAlert(alert);
                return throwError(error);
            })
        );
    }

}
