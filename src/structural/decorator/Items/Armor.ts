import SoldierDecorator from './SoldierDecorator';
import ICharacter from './Interfaces/ICharacter';

export default class Armor extends SoldierDecorator{

    constructor(soldier: ICharacter) {
        super(soldier);
        console.log('Added more defence to soldier');
    }

    getAttack(): number {
        return super.getAttack();
    }

    getDefence(): number {
        return super.getDefence() + 100;
    }

}
