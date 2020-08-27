import ICharacter from './Items/Interfaces/ICharacter';
import Soldier from './Items/Soldier';

import { expect } from 'chai';
import 'mocha';
import Armor from "./Items/Armor";
import {Sniper} from "./Items/Sniper";

const soldier: ICharacter = new Soldier();

describe('Decorator', () => {

    describe('Soldier', () => {
        it('Soldier have normal attack (100)', () => {
            expect(soldier.getAttack()).to.equal(100);
        });

        it('Soldier have normal defence (100)', () => {
            expect(soldier.getDefence()).to.equal(100);
        });
    });

    describe('Soldier with armor', () => {
        const soldierWithArmor = new Armor(soldier);

        it('Soldier have normal attack (100)', () => {
            expect(soldierWithArmor.getAttack()).to.equal(100);
        });

        it('Soldier have more defence (200)', () => {
            expect(soldierWithArmor.getDefence()).to.equal(200);
        });
    });

    describe('Soldier with sniper', () => {
        const soldierWithSniper = new Sniper(soldier);

        it('Soldier have more attack (250)', () => {
            expect(soldierWithSniper.getAttack()).to.equal(250);
        });

        it('Soldier have normal defence (100)', () => {
            expect(soldierWithSniper.getDefence()).to.equal(100);
        });
    });

    describe('Soldier with armor and sniper', () => {
        const soldierWithSniperAndSniper = new Armor(new Sniper(soldier));

        it('Soldier have more attack (250)', () => {
            expect(soldierWithSniperAndSniper.getAttack()).to.equal(250);
        });

        it('Soldier have more defence (200)', () => {
            expect(soldierWithSniperAndSniper.getDefence()).to.equal(200);
        });
    });

});
