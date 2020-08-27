import ICharacter from './Items/Interfaces/ICharacter';
import Soldier from './Items/Soldier';
import Armor from './Items/Armor';
import {Sniper} from './Items/Sniper';

let soldier: ICharacter = new Soldier();
console.log(`Soldier: Attack ${soldier.getAttack()} - Defence ${soldier.getDefence()}`);

soldier = new Armor(soldier);
console.log(`Soldier: Attack ${soldier.getAttack()} - Defence ${soldier.getDefence()}`);

soldier = new Sniper(soldier);
console.log(`Soldier: Attack ${soldier.getAttack()} - Defence ${soldier.getDefence()}`);
