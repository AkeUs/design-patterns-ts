import { PaymentType } from './Payments/Interfaces/PaymentType';
import { Mastercard } from './Payments/Mastercard';
import { Visa } from './Payments/Visa';
import { Paypal } from './Payments/Paypal';
import { Order } from './Order';
import { expect } from 'chai';
import 'mocha';

const order1 = new Order(PaymentType.Mastercard, 100);
const order2 = new Order(PaymentType.Visa, 100);
const order3 = new Order(PaymentType.Paypal, 100);

order1.create();
order2.create();
order3.create();

describe('Factory Method', () => {

    describe('Order Mastercard', () => {

        it('Order must be paid by mastercard', () => {
            expect(order1.paymentMethod instanceof Mastercard).to.equal(true);
        });

        it("Order commission must be 5", () => {
            expect(order1.commission).to.equal(5);
        });

    });

    describe('Order Visa', () => {

        it('Order must be paid by visa', () => {
            expect(order2.paymentMethod instanceof Visa).to.equal(true);
        });

        it("Order commission must be 4", () => {
            expect(order2.commission).to.equal(4);
        });

    });

    describe('Order PayPal', () => {

        it('Order must be paid by paypal', () => {
            expect(order3.paymentMethod instanceof Paypal).to.equal(true);
        });

        it("Order commission must be 6", () => {
            expect(order3.commission).to.equal(6);
        });

    });

});
