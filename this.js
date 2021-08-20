function f(arg1, arg2) {
    console.log(arg1, arg2);
}

f();
f(1);
f(1, 2);
f(1, 2, 3);

// --------------------------------------------------------

function add(arg1, arg2) {
    console.dir(arguments);

    return arg1 + arg2;
}

console.log(add());
console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));

// --------------------------------------------------------

function sum() {
    var result = 0;

    for(var i = 0 ; i < arguments.length ; i++) {
        result += arguments[i];
    }

    return result;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// --------------------------------------------------------

var myObj = {
    name: 'foo',
    sayName: function () {
        console.log(this.name);
    }
};

var otherObj = {
    name: 'bar'
};

otherObj.sayName = myObj.sayName;

myObj.sayName();
otherObj.sayName();

// --------------------------------------------------------

var foo = 'I`m foo!';

console.log(foo);
// console.log(window.foo); // 브라우저에서 됨.
// console.log(global.foo); // node.js 환경에서 됨.

// --------------------------------------------------------

var test = 'Test!!!!!!!!!!!!';
// console.log(window.test);

var sayFoo = function () {
    // console.log(this.test);
};

sayFoo();

// --------------------------------------------------------

var val = 100;

var myObj = {
    val: 1,
    func1: function () {
        console.log('func1 this.val=' + this.val);
        console.log('func1 val=' + val);

        func2 = function () {
            console.log('func2 this.val=' + this.val);
            console.log('func2 val=' + val);

            func3 = function () {
                console.log('func3 this.val=' + this.val);
                console.log('func3 val=' + val);
            };

            func3();
        };

        func2();
    }
};

myObj.func1();

// --------------------------------------------------------

var Person = function (name) {
    this.name = name;
};

var p = Person('bogeun');
console.log(p);		// undefined

// console.log(window.name);	// bogeun

// --------------------------------------------------------

function A(arg) {
    if(!(this instanceof arguments.callee)) {
        return new A(arg);
    }

    this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);
var c = new A();

console.log(a);
console.log(b);
console.log(c);

// --------------------------------------------------------

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var person1 = {};
var person2 = {};

person1 = Person('bogeun1', 20, 'male');
Person.apply(person2, ['bogeun2', 21, 'female']);

console.log(person1);
// console.log(window.name);
// console.log(window.age);
// console.log(window.gender);

console.log(person2);

// --------------------------------------------------------

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var person = {};

Person.call(person, 'bogeun', 22, 'male');

console.log(person);

// --------------------------------------------------------

function func() {
    console.log(arguments);

    var args = Array.prototype.slice.apply(arguments);

    console.log(args);
}

func(1, 2, 3);

// --------------------------------------------------------

var noReturnFunction = function () {
}

var NoReturnConstructor = function () {
    this.name = 'name';
    this.age = 'age';
}

var result1 = noReturnFunction();
var result2 = new NoReturnConstructor();
