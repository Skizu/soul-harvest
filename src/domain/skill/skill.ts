import { Rules } from '../rule';
import Player from '../player/player';

export default abstract class Skill {
    name: string;
    description: string;
    rules: Rules;

    abstract use(player: Player): void;
}
