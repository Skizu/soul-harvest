import { Store } from '../../store';
import { Actions } from './index';

export class Battle {
    attack(damage: number) {
        Store.dispatch({
            name: Actions.Attack,
            data: damage
        });
    }
}

const battle = new Battle();

export { battle };
