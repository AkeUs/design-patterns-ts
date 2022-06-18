import { IProduct } from './Interfaces/IProduct';

export default class ProductComposite implements IProduct {

    private readonly products: IProduct[];

    constructor() {
        this.products = [];
    }

    add(product: IProduct): void {
        this.products.push(product);
    }

    getPrice(): number {
        let total: number = 0;
        for (const product of this.products) {
            total += product.getPrice();
        }
        return total;
    }

}