
import { expect } from 'chai';
import 'mocha';
import MongoRepository from "./Repositories/MongoRepository";
import {IRepository} from "./Repositories/Interfaces/IRepository";
import ItemRepository from "./ItemRepository";
import SqliteRepository from "./Repositories/SqliteRepository";

describe('Bridge', () => {

    describe('Mongo Repository', () => {

        it('Is Mongo Repository', () => {
            const mongo: IRepository = new MongoRepository();
            const items: ItemRepository = new ItemRepository(mongo);
            expect(items.read(1)).to.contains('[Mongo]');
        })

    })

    describe('SQLite Repository', () => {

        it('Is SQLite Repository', () => {
            const sqlite: IRepository = new SqliteRepository();
            const items: ItemRepository = new ItemRepository(sqlite);
            expect(items.read(1)).to.contains('[SQLite]');
        })

    })

});