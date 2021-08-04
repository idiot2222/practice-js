var intNum = 10.00;
var floatNum = 0.1;

var singleQuoteStr = 'single quote string';
var doubleQuoteStr = "double quote string";
var singleChar = 'a';

var boolTrue = true;
var boolFalse = false;

var emptyVar;

var nullVar = null;


console.log(
    typeof intNum,          // number
    typeof floatNum,        // number
    typeof singleQuoteStr,  // string
    typeof doubleQuoteStr,  // string
    typeof singleChar,      // string
    typeof boolTrue,        // boolean
    typeof boolFalse,       // boolean
    typeof emptyVar,        // undefined
    typeof nullVar          // object
);

console.log(
    emptyVar === undefined  // true
);

console.log(
    nullVar === null,       // true
    typeof nullVar === null // false
);
