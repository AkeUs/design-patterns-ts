import { IRepository } from './Repositories/Interfaces/IRepository';

export default class ItemRepository {

    private readonly repository: IRepository

    constructor(repository: IRepository) {
        this.repository = repository;
    }

    create(name: string): void {
        this.repository.create(name);
    }

    update(name: string): void {
        this.repository.update(name);
    }

    delete(id: number): void {
        this.repository.delete(id);
    }

    read(id: number): string {
        return this.repository.read(id);
    }
}
