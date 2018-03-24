import Item from './item';

type Items = Array<new () => Item>;

export { Item, Items };