import { Stat } from './index';

export class Proficiency {
    name: string;
    description?: string;
    stat: Stat;
    modifier: number;
}

export type Proficiencies = Array<Proficiency>;
