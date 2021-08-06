var array1 = [];
var array2 = [1, "2", {value: 3}, [4]];

array1[0] = 1;
array1[1] = "2";
array1[2] = {value: 3};
array1[3] = [4];

console.log(array1.length);

console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2]);
console.log(array2[3]);

console.log(array1.length);

array1[9] = 0;

console.log(array1.length);

console.log(array1);



var array3 = new Array();

console.log(array3);
console.log(array3.length);

var array4 = new Array(3);

console.log(array4);
console.log(array4.length);

var array5 = new Array(1, 2, 3);

console.log(array5);
console.log(array5.length);
