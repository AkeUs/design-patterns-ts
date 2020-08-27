import Item from './Item';
import IPaymentStrategy from './Payments/Interfaces/IPaymentStrategy';

export default class Order {

    private items: Item[] = [];

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public makePayment(payment: IPaymentStrategy): void {
        let total: number = 0;

        this.items.forEach(i => {
            console.log(`Item: ${i.name} - ${i.price} MXN`)
            total += i.price;
        });
        console.log(`Total: ${total} MXN`);
        payment.pay();
    }


}
