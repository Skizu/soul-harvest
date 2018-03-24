import { Items } from '../item/index';
import { random } from '../../utils/index';
import Item from '../item/item';

const loot = (items: Items): Item => {
    return new items[random(0, items.length)]();
};

export { loot };