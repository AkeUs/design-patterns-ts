import { PaymentType } from './Payments/Interfaces/PaymentType';
import { PaymentMethodFactory } from './PaymentMethodFactory';
import { IPaymentMethod } from './Payments/Interfaces/IPaymentMethod';

export class Order {

    private _paymentMethod?: IPaymentMethod;
    private _paymentType: PaymentType;
    private _commission: number = 0;
    private _amount: number;

    constructor(paymentType: PaymentType, amount: number) {
        this._paymentType = paymentType;
        this._amount = amount;
    }

    public create(): void {
        this._paymentMethod = PaymentMethodFactory.getPaymentMethod(this._paymentType);
        this._commission = this._paymentMethod.getCommission() * this._amount;
    }

    get paymentMethod(): IPaymentMethod | undefined {
        return this._paymentMethod;
    }

    get commission(): number {
        return this._commission;
    }

}
