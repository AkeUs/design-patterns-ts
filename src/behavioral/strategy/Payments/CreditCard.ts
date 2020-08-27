import IPaymentStrategy from './Interfaces/IPaymentStrategy';

export default class CreditCard implements IPaymentStrategy {

    pay() {
        console.log('Pay with credit card');
    }
}
