import { IPaymentMethod } from './Interfaces/IPaymentMethod';

export class Visa implements IPaymentMethod {
    getCommission(): number {
        return 0.04;
    }
}
