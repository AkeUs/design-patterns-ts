import Biography from './Biography';
import Course from './Course';
import ProductComposite from "./ProductComposite";

const biographySteveJobs = new Biography('Steve Jobs Biography', 100);
const biographyBillGates = new Biography('Mark Bill Gates', 100);
const courseTypescript = new Course('Course TypeScript', 150);
const courseDotnet = new Course('Course .Net Core', 180);

const order1 = new ProductComposite();
const order2 = new ProductComposite();
const order3 = new ProductComposite();

order1.add(biographySteveJobs);

order2.add(biographyBillGates);
order2.add(courseDotnet);
order2.add(courseTypescript);

order3.add(courseTypescript);

const box = new ProductComposite();
box.add(order1);
box.add(order2);
box.add(order3);

console.log(`Total all orders in box: ${box.getPrice()}`);
