import IPaymentStrategy from './Interfaces/IPaymentStrategy';

export default class Cash implements IPaymentStrategy {

    pay() {
        console.log('Pay with money effective');
    }
}
