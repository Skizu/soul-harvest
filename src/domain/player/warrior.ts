import Player from './player';
import { HeavyArmour } from '../proficiency';

export class Warrior extends Player {
    baseStats: {
        constitution: 10,
        strength: 10,
        dexterity: 7,
        intelligence: 6,
        charisma: 6
    };

    roleProficiencies = [HeavyArmour];

    skills = [];
}