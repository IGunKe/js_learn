const isArray = (arr) => Array.isArray(arr);

console.log(isArray([1, 2, 3]));
// true
console.log(isArray({ name: 'Ovi' }));
// false
console.log(isArray('Hello World'));
// false
