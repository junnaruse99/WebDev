/******* VARIABLES *********/
var message = "hi"; // it's not necessary to define type

/********************************************************/

/******* FUNCTIONS *********/
// Defining a function
function a () {

}

var a = function () {}
// The value of the function is return to a, not the return value


// Function execution
a();

// Define a function with variables
function compare (x, y) {
    return x > y
}

// What can we do
var a = compare(4, 5);
compare(4, "a");
compare(); // All arguments define in a function are optionals

/********************************************************/

/********* SCOPE **********/
// Global --> Available everywhere
// Function aka Lexical --> only within this function

// Ex.
function A () {
    var x = 5;
    B();
} 

function B () {
    console.log(x)
}

var x = 2;
A();

// What value is going to log ...
// Is 2, because the outter reference of function B is the global reference
// It may be confusing, since you are calling B inside A, but B is define within the global scope


/********  TYPES  *********/
// Object --> collection of name/value pairs
// Primitive --> represents a single, inmutable (read only) value
    // Boolean --> True or False
    // Undefined --> Defined but not value has been assigned
    // Null --> Lack of value
    // Number --> only numeric type (double 64bits)
    // String --> sequence of chars --> "" or ''
    // Symbol --> not used yet

console.log(x); // x is not defined --> not initialized
var x;
console.log(x); // x is undefined

x == undefined; // True
x = 5
x == undefined; // False

/********************************************************/

/****** COMMON LANGUAGE CONSTRUCTS *******/
// String concatenation
var string = "Hello"
string += "World";
console.log(string + "!")

// Regular math operators: +, -, *, /
console.log((5 + 4) / 3); // 3
console.log(undefined / 5); // NaN --> Not a number

// Equality
var x = 4, y = 4;
console.log(x == y); // True
x = "4"
console.log(x == y); // True --> Type coercion
// Since both variables are different types, it converts one variable to be equal
// type to the other variable, so values can be compared

// Strict equality
console.log(x === y); // False 
// Since both are different types, and its a strict equality, output is false

// False
console.log(false || null || undefined || "" || 0 || NaN); // False
// The or statement check if the element to the left is true, if it is true, it stops
// and output true, else continue with the next element. if all elements are false, then
// output false.

// True
console.log(true && "hello" && 1 && -1 && "false"); //  True
// The and operator evaluate if both the element to the left and to the right are true, then
// returns true, else returns false.
// Any number != 0 return true

// If you forget, just write in your console: Boolean(<data>)
// Ex: Boolean(null) -> False

// Curly braces
function a()
{
    return
    {
        name: "Yaakov"
    }
}

console.log(a()); // undefined
// Do not put the curly braces in the next line, because the java interpretator, when sees 
// a return statement and nothing to the right, places for you a semicolon after, so returns
// nothing

// For Loop
var sum = 0;
for (var i = 0; i < 10; i++) {
    sum = sum + 1;
}
console.log("sum of 0 through 9 is: " + sum); // 45

/********************************************************/

/******* Default values *******/
function orderChickenWith(sideDish) {
    console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith(); // What this is going to do is going to coerce undefined type to string
// So is going to return: "Chicken with undefined"

function orderChickenWith(sideDish) {
    sideDish |= "whatever!";
    console.log("Chicken with " + sideDish);
}
// What we are doing here is an or statement. If the first value is different than undefined, 
// the or statement is going to return that value, else going to return "whatever!"
// It returns whatever it coerces to true first
// Ex. "hello" || "" --> "hello"
// Ex. "" || "hello" --> "hello"

/********************************************************/

/****** Object ********/
// Object creation
var company = new Object();
company.name = "Facebook";
// company.ceo.firstname = "Mark"; // Cannot do these because company.ceo has not been defined yet
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company.ceo.firsName); // "Mark"
console.log(company["name"]); // "Facebook"

// Use [] when the name has separated values
// Ex. company["Stock of company"] = 110;


// Object creation with literal sintax
var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    "stock of company": 110 
};

/********************************************************/

/****** Functions ********/
// Functions in JS are objects
function multiply(x, y) {
    return x * y;
}
console.log(multiply(5,3)); // 15
multiply.version = "v.1.0.0"
console.log(multiply) // return the function construction in string
// when calling multiply, the default is multiply.toString()
console.log(multiply.version) // "v.1.0.0"

// Return a function from a function
function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x;
    }
    return myFunc
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10)); // 30

// Passing functions as arguments
function doOperationOn(x, operation) {
    return operation(x);
}

var result = doOperation(5, multiplyBy3);
// Note that we are not passing the return value of the function multiplyBy3, but the reference
console.log(result); // 15

/********************************************************/

/****** Passing values ********/
// Given b = a
// By value --> changing the value of b, does not change the value of a and visceversa
// By reference --> changing the value of b, change the value of a

// Primitives are passed by value and objects are passed by reference
var a = 7; // Gets memory location and allocate value 7
var b = a; // Gets different memory location and allocates value of a
// Every var, has its memory space, so if change the value any, its not goint to reflect in the other

// Objects are passed by reference
var a = {x: 7}; // Gets memory location for x, and a has the point to that memory location
var b = a; // Because a has the location where the value of x was stored, when assigned, b now
            // has access to x
// x was only created once. Both a and b now have access to x
b.x = 5; // since x is changing, then a.x change to 5

/********************************************************/

/****** Constructor and this ********/
function test() {
    console.log(this);
}

test(); // Pointing to the global windows object

// Constructor
function Circle (radius) { // It starts with capital, to let other people know that this is a constructor
    this.radius = radius; // Assigning radius to attribute radius
}

Circle.prototype.getArea =
    function () {
        return Math.PI * Math.pow(this.radius, 2);
    }

// We define methods inside prototype, so that is only created once. If we define methods inside
// the constructor, every time we are creating a new object, we are creating the same methods over and
// over, which is not correct
// IMPORTANT: Prototype MUST be outside your constructor. If not, it's going to be created every single time

var myCircle = new Circle(10); // keyword new, is for declaring a new object
console.log(myCircle); // Now that a new object has been created, then its going to return the myCircle object

// Object literals and this
var literalCircle = { // new Object
    radius: 10,

    getArea: function () {
        var self = this;

        var increaseRadius = function () {
            self.radius = 20; 
        }
        // When you have a function inside another function, this is going to refer
        // to the global object, that's why we assign the value this to self, before
        // entering to this function

        increaseRadius();
        return Math.Pi * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea()); // works, because when defining objects literal, the new keyword is default

/********************************************************/

/****** Arrays ********/

var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
    console.log("Hello " + name);
};
array[3] = {course: "HTML, CSS & JS"};

console.log(array); // Store multiple types inside the array

// Short hand array creation
var names = ["Yaakov", "John", "Joe"];
names[100]

for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}

// Print Hello undefined, when the name is not defined

var myObj = {
    name: "Yaakov",
    course: "HTML/CSS/JS",
    platform: "Coursera"
};

// For through an object
for (var prop in myObj) {
    console.log(prop + ": " + myObj[prop]);

}

/********************************************************/

/****** Closures ********/
function makeMultiplier (multiplier) {
    return (
        function (x) {
            return multiplier * x;
        }
    );
}

// When a function is return from another function, js preserves its outter lexical enviroment memory space
// That's why when we call doubleAll, the multiplier value is still 2

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

/********************************************************/

/****** Fake Namespaces ********/
// Usefull when importing multiple scripts to your html file
// When having repeated values in multiple scripts
// Ex. In script 1 --> name = "John" and in script 2 --> name = "Yaakov"
// name variable is in both scripts, so is going to be overwritten

// Script1
var johnGreeter = {};
johnGreeter.name = "John";
johnGreeter.sayHi = function () {
    console.log("Hi " + johnGreeter.name);
}

// Script2
var yaakovGreeter = {};
yaakovGreeter.name = "John";
yaakovGreeter.sayHi = function () {
    console.log("Hi " + yaakovGreeter.name);
}

/********************************************************/

/****** Inmediately Invoked Function Expressions (IIFEs) ********/
(function () {
    console.log("Hello Coursera!");
})();
// What this is going to do is executed the funcion inmediately

// Soooo ..
(function (window) {
    var johnGreeter = {};
    johnGreeter.name = "John";
    var greeting = "Hello ";
    johnGreeter.sayHi = function () {
        console.log(greeting + johnGreeter.name);
    }
    window.johnGreeter = johnGreeter;
    // This is so we can expose our greeter to the global scope
})(window);
