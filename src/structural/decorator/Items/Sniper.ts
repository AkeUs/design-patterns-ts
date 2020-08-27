import SoldierDecorator from './SoldierDecorator';
import ICharacter from './Interfaces/ICharacter';

export class Sniper extends SoldierDecorator{

    constructor(soldier: ICharacter) {
        super(soldier);
        console.log('Added more attack to soldier');
    }

    getAttack(): number {
        return super.getAttack() + 150;
    }

    getDefence(): number {
        return super.getDefence();
    }
}
