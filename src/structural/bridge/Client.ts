import ItemRepository from './ItemRepository';
import MongoRepository from './Repositories/MongoRepository';
import SqliteRepository from './Repositories/SqliteRepository';
import { IRepository } from './Repositories/Interfaces/IRepository';

const mongo: IRepository = new MongoRepository();
const sqlite: IRepository = new SqliteRepository();
let items: ItemRepository;

items = new ItemRepository(mongo);
items.create('course typescript');
items.update('course typescript');
console.log(items.read(1));
items.delete(1);

items = new ItemRepository(sqlite);
items.create('course typescript');
items.update('course typescript');
console.log(items.read(1));
items.delete(1);

