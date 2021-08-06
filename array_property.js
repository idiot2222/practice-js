var array = ['one', 'two', 'three'];

console.log(array.length);

array.one = 1;

console.log(array.one);
console.log(array.length);

array[3] = 2;

console.log(array[3]);
console.log(array.length);

for(var property in array) {
    console.log(array[property]);
}

for(var i = 0 ; i < array.length ; i++) {
    console.log(array[i]);
}
