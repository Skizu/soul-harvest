import { Proficiency } from './proficiency';
import { Stat } from './index';

const HeavyArmour: Proficiency = {
    name: 'Heavy Armour',
    description: 'Can wear the heavy shit',
    stat: Stat.Strength,
    modifier: 2
};

export { HeavyArmour };