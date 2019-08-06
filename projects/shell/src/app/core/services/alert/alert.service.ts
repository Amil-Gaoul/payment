import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Alert } from '@models';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

    private alert: Subject<Alert> = new Subject<Alert>();

    public getAlert(): Observable<Alert> {
        return this.alert.asObservable();
    }

    public showAlert(alert: Alert): void {
        this.alert.next(alert);
    }

}
