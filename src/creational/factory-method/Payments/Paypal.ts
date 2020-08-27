import { IPaymentMethod } from './Interfaces/IPaymentMethod';

export class Paypal implements IPaymentMethod {
    getCommission(): number {
        return 0.06;
    }
}
