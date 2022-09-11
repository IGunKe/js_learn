function reactive(obj) {
    const handle = {
        get(target, prop) {
            console.log('set: ', target, prop);
            const value = Reflect.get(...arguments);
            if (typeof value === 'Object') {
                reactive(value);
            } else {
                return value;
            }
        },
        set(target, key, value) {
            console.log('set: ', target, key, value);
            return Reflect.set(...arguments);
        }
    };
    return new Proxy(obj, handle);
}

const person = {
    name: 'tom'
}

const proxy = reactive(person);
proxy.name;
proxy.list = [];
proxy.list.push(1);