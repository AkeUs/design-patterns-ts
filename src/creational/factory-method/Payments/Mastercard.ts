import { IPaymentMethod } from './Interfaces/IPaymentMethod';

export class Mastercard implements IPaymentMethod {
    getCommission(): number {
        return 0.05;
    }
}
