var array = [ 'red', 'green', 'blue'];
var object = {
    '0': 'red',
    '1': 'green',
    '2': 'blue',
};

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

console.log(object[0]);
console.log(object[1]);
console.log(object[2]);

console.log(typeof array);
console.log(typeof object);

console.log(array.length);
console.log(object.length);

console.dir(array.__proto__);
console.dir(object.__proto__);
console.dir(array.__proto__.__proto__);

console.log(object.__proto__ === array.__proto__.__proto__);
