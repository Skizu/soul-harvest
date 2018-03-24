import { StatBag } from '../stat';
import { skillModifier } from '../calculator';
import { Proficiencies, Stat } from '../proficiency';
import { Skills } from '../skill';

export default abstract class Player {
    abstract baseStats: StatBag;
    abstract roleProficiencies: Proficiencies;
    abstract skills: Skills;

    stats: StatBag;
    level: number = 1;
    proficiencies: Proficiencies;
    alignment: number = 0;
    experience: number = 0;

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    get constitution(): number {
        return skillModifier(this.stats.constitution, this.level);
    }

    get strength(): number {
        return skillModifier(this.stats.strength, this.level);
    }

    get dexterity(): number {
        return skillModifier(this.stats.dexterity, this.level);
    }

    get intelligence(): number {
        return skillModifier(this.stats.intelligence, this.level);
    }

    get charisma(): number {
        return skillModifier(this.stats.charisma, this.level);
    }

    getProficiencies(stat: Stat) {
        return this.proficiencies.filter(p => p.stat === stat);
    }
}