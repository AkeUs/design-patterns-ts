export default class Item {

    private readonly _name: string;
    private readonly _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }
}
