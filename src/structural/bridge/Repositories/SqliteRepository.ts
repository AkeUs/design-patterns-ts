import { IRepository } from './Interfaces/IRepository';

export default class SqliteRepository implements IRepository {

    create(name: string): void {
        console.log(`[SQLite][Create] ${name}`);
    }

    delete(id: number): void {
        console.log(`[SQLite][Delete] ${id}`);
    }

    read(id: number): string {
        return `[SQLite][Read] ${id}`;
    }

    update(name: string): void {
        console.log(`[SQLite][Update] ${name}`);
    }

}
