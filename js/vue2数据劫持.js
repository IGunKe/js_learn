function defineReactive(data) {
    if (!data || Object.prototype.toString.call(data) !== '[object Object]') {
        return;
    }

    for (let key in data) {
        let val = data[key];
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            writable: true,
            get() {
                console.log('set :', val, key);
                return val;
            },
            set(val) {
                console.log('set :', val, key);
                
            }
        });
        if (typeof val === 'object') {
            defineReactive(val);
        }
    }
}

const person = {
    name: 'tom'
}

defineReactive(person);
console.log(person.name);
console.log(Object.prototype.toString.call(person));