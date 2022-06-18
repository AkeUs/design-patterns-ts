import { IRepository } from './Interfaces/IRepository';

export default class MongoRepository implements IRepository {

    create(name: string): void {
        console.log(`[Mongo][Create] ${name}`);
    }

    delete(id: number): void {
        console.log(`[Mongo][Delete] ${id}`);
    }

    read(id: number): string {
        return `[Mongo][Read] ${id}`;
    }

    update(name: string): void {
        console.log(`[Mongo][Update] ${name}`);
    }

}
