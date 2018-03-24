import { Rules } from '../rule';
import Player from '../player/player';
import Skill from './skill';
import { battle } from '../action';

export default class Base extends Skill {
    name: 'Bash';
    description: 'Brutally smash an enemy for 320% weapon damage.';
    rules: Rules;

    use(player: Player) {
        battle.attack(320);
    }
}
