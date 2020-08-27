import ICharacter from './Interfaces/ICharacter';

export default abstract class SoldierDecorator implements ICharacter {

    private soldier: ICharacter;

    constructor(soldier: ICharacter) {
        this.soldier = soldier;
    }

    getAttack(): number {
        return this.soldier.getAttack();
    }

    getDefence(): number {
        return this.soldier.getDefence();
    }
}
