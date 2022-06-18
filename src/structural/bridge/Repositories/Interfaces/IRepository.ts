export interface IRepository {
    create(name: string): void;
    update(name: string): void;
    delete(id: number): void;
    read(id: number): string;
}
