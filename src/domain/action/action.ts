// tslint:disable-next-line
export default interface Action<T = any> {
    name: string;
    data?: T;
}