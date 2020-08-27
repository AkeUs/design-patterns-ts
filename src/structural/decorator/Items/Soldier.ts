import ICharacter from './Interfaces/ICharacter';

export default class Soldier implements ICharacter{

    getAttack(): number {
        return 100;
    }

    getDefence(): number {
        return 100;
    }
}
