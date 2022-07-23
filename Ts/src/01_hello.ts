function sayHello(person: string) {
    if (typeof person === 'string') {
        return 'hello ' + person;
    } else {
        throw new Error('person is not a string')
    }
}

let user: string = 'xdj';

console.log(sayHello(user));
