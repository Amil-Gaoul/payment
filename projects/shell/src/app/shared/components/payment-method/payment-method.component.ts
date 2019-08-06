import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaymentSystem } from '@models';

@Component({
    selector: 'app-payment-method',
    templateUrl: './payment-method.component.html',
    styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {

    @Input() public paymentSystems: PaymentSystem[];
    @Output() public selectPaymentSystem: EventEmitter<PaymentSystem> = new EventEmitter<PaymentSystem>();
    public paymentSystemActiveId: string;

    constructor() { }

    public ngOnInit(): void {
    }

    public onSelectPaymentSystem(paymentSystem: PaymentSystem): void {
        this.paymentSystemActiveId = paymentSystem.id;
        this.selectPaymentSystem.emit(paymentSystem);
    }

}
