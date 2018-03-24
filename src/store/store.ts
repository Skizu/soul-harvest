import { Action } from '../domain/action/index';

export class BaseStore {
    dispatch(action: Action) {
        // todo
    }
}

const Store = new BaseStore;

export { Store };