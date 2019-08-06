import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { AlertType } from '@enums';
import { Alert } from '@models';
import { AlertAnimation } from './alert.animation';

const timeVisibleAlert: number = 5000;

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    animations: [AlertAnimation]
})
export class AlertComponent implements OnInit, OnChanges {

    @Input() public alert: Alert;
    public  alerts: Alert[] = [];
    public alertType: any;

    constructor() { }

    public ngOnInit(): void {
        this.alertType = AlertType;
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if ('alert' in changes && this.alert) {
            this.alerts.push(this.alert);
            this.onRemoveAlert(this.alert);
        }
    }

    public onClose(alert: Alert): void {
        this.alerts = this.alerts.filter((a: Alert) => a !== alert);
    }

    private onRemoveAlert(alert: Alert): void {
        setTimeout((): void => {
            this.onClose(alert);
        }, timeVisibleAlert);
    }

}
