import IPaymentStrategy from './Interfaces/IPaymentStrategy';

export default class DebitCard implements IPaymentStrategy{

    pay() {
        console.log('Pay with debit card');
    }
}
