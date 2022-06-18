import { IProduct } from './Interfaces/IProduct';

export default class Book implements IProduct {

    private readonly title: string;
    private readonly price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }

    getTitle(): string {
        return this.title;
    }

    getPrice(): number {
        return this.price;
    }

}
