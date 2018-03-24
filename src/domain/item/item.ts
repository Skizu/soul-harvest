import { Rules } from '../rule/index';

export default abstract class Item {
    identified: boolean = false;
    rules: Rules;

    abstract use(): void;
}
