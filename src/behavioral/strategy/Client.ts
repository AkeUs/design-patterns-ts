import Item from './Item';
import Order from './Order';
import CreditCard from './Payments/CreditCard';
import DebitCard from './Payments/DebitCard';
import Cash from './Payments/Cash';

const tablet: Item = new Item('Tablet', 8000);
const phone: Item = new Item('Phone', 5000);
const laptop: Item = new Item('Laptop', 25000);

const order1 = new Order();
order1.addItem(tablet);
order1.addItem(phone);
order1.addItem(laptop);

order1.makePayment(new CreditCard());
order1.makePayment(new DebitCard());
order1.makePayment(new Cash());
