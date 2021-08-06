var array = ['one', 'two', 'three', 'four'];

console.log(array.length);
delete array[2];
console.log(array.length);
console.log(array[2]);

array.splice(2, 1);
console.log(array);
console.log(array.length);
