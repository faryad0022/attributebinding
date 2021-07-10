// tslint:disable-next-line:class-name
export interface User {
    email: string;
    password: string;
    address: string;
    age: number;
}
export interface ICarouselContext {
    $implicit: string;
    controller: {
        next: () => void,
        prev: () => void
    };
}
