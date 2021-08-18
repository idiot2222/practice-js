function add1(x, y) {
    return x + y;
}

var add2 = function (x, y) {
    return x + y;
};

var add3 = new Function('x', 'y', 'return x + y');

console.log(add1(1, 2));
console.log(add2(1, 2));
console.log(add3(1, 2));

// ============================================================

add4(2, 3);

function add4(x, y) {
    return x + y;
}

add4(3, 4);

// add5(2, 3);

var add5 = function (x, y) {
    return x + y;
}

add5(3, 4);

// ============================================================

function add6(x, y) {
    return x + y;
}

add6.result = add6(3, 2);
add6.status = "OK";

console.dir(add6);

// ============================================================

function func0() {

}

function func1(x) {

}

function func2(x, y) {

}

function func3(x, y, z) {

}

console.log(func0.length);
console.log(func1.length);
console.log(func2.length);
console.log(func3.length);

// ============================================================

function myFunction() {
    return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);


// ============================================================


(function (name) {
    console.log(name);
})('bogeun');

((name, age) => {
    console.log(name, age);
})('bogeun', 21);


// ============================================================


function parent() {
    var a = 100;
    var b = 200;

    function child() {
        var b = 300;

        console.log(a);
        console.log(b);
    }

    child();
}

parent();
// child();


// ============================================================

function parent() {
    var a = 100;

    function child() {
        console.log(a);
    }

    return child;
}

var inner = parent();
inner();

// ============================================================


var self = function () {
    console.log('a');

    return function () {
        console.log('b');
    }
}

self = self();
self();


