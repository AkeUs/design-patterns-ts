import Book from './Book';

export default class Course extends Book {

    constructor(title: string, price: number) {
        super(title, price);
    }

}