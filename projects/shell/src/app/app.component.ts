import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Alert } from '@models';
import { AlertService } from '@services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    public alert: Alert;

    private subs: Subscription = new Subscription();

    constructor(
        private alertService: AlertService
    ) { }

    public ngOnInit(): void {
        this.initAlerts();
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    private initAlerts(): void {
        this.subs.add(this.alertService.getAlert().subscribe((alert: Alert) => {
            this.alert = alert ? alert : null;
        }));
    }
}
