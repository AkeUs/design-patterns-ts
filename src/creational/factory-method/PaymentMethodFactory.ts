import { IPaymentMethod } from './Payments/Interfaces/IPaymentMethod';
import { PaymentType } from './Payments/Interfaces/PaymentType';
import { Mastercard } from './Payments/Mastercard';
import { Visa } from './Payments/Visa';
import { Paypal } from './Payments/Paypal';

export class PaymentMethodFactory {

    public static getPaymentMethod(type: PaymentType): IPaymentMethod {
        let payment: IPaymentMethod | null = null;

        switch (type) {
            case PaymentType.Mastercard: {
                payment = new Mastercard();
                break;
            }
            case PaymentType.Visa: {
                payment = new Visa();
                break;
            }
            case PaymentType.Paypal: {
                payment = new Paypal();
                break;
            }
            default: {
                throw new Error('Invalid payment method type.');
            }
        }

        return payment;
    }
}
