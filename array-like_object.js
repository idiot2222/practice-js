var array = ['one', 'two'];
var object = {
    name: 'bogeun',
    age: 20,
    length: 3
}

array.push('three');
console.log(array);
console.log(array.length);

// object.push('hello');
console.log(object);
Array.prototype.push.apply(object, ['hello']);
console.log(object);
