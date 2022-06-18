import { expect } from 'chai';
import 'mocha';

import Biography from './Biography';
import Course from './Course';
import ProductComposite from "./ProductComposite";

const biographySteveJobs = new Biography('Steve Jobs Biography', 100);
const biographyBillGates = new Biography('Mark Bill Gates', 100);
const courseTypescript = new Course('Course TypeScript', 150);
const courseDotnet = new Course('Course .Net Core', 180);

const order1 = new ProductComposite();
order1.add(biographySteveJobs);

const order2 = new ProductComposite();
order2.add(biographyBillGates);
order2.add(courseDotnet);
order2.add(courseTypescript);

const order3 = new ProductComposite();
order3.add(courseTypescript);

const box = new ProductComposite();
box.add(order1);
box.add(order2);
box.add(order3);

describe('Composite',() => {

    describe('Order #1', () => {

        it('Price is equals $100 ', () => {
            expect(order1.getPrice()).to.equal(100);
        });

    });

    describe('Order #2', () => {

        it('Price is equals $430 ', () => {
            expect(order2.getPrice()).to.equal(430);
        });

    });

    describe('Order #3', () => {

        it('Price is equals $150 ', () => {
            expect(order3.getPrice()).to.equal(150);
        });

    });

    describe('All orders', () => {

        it('total in box equals 680 ', () => {
            expect(box.getPrice()).to.equal(680);
        });

    });

});
