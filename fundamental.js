// ES5 js version

// Everything in javascript is Object. 

// Pri Datatypes
// null 
// String
// Boolean 

// Non pr 
// Array
// Objects
// classes


// pr datatypes
var i = 5;
var name = new String("GFG");
console.log(name.toLowerCase());

var arr = new Array();
console.log("arr", arr);


function foo() {
}



// I have a string but I want to print it with a pre defined format
// Example: GFG => GFG is Cool
name.__proto__.printName = function(value) {
    console.log(this);
}
name.printName();


// elem => elem + "1"; 2, 3 

var arr1 = [1, 2, 3, 4, 5];

var arr2 = [9, 10, 12];

var arr3 = [1000, 2312312];

// console.log(arr1.__proto__.__proto__.toString());
// console.log(arr2.__proto__.toString());

Array.prototype.mult = function(multipler) {
    for (var i = 0; i < this.length; i++) {
        this[i] *= multipler;
    }
    console.log(this);
}

arr1.__proto__.mult = function() {
    for (var i = 0; i < this.length; i++) {
        this[i] *= 10;
    }
    console.log(this);
}

arr1.mult(5);

arr2.mult(10);

arr3.mult(12);

function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // console.log("My name is ", this.name);
    console.log("And my age is ", this.age);
}

User.prototype.printFullName = function() {
    console.log("Full name is: ", this.firstName + " " + this.lastName);
}


var user1 = new User("Foo", "lastName", 50); // create a new instance of use class 
var user2 = new User("Bar", "lasteName", 60);

user1.printFullName();
user2.printFullName();
 
console.log(user1.__proto__);

// IIFE 
(function() {
    console.log("I am a function");
})();

var i = 10; // global scope
var foo = function () { 
    // local Scope
    var j = 20;
    console.log(i);  // clouser
    console.log(j);

    // I am callling some other database to add a user
}

foo();
// console.log(j); 

function eat(food, task1, task2) {
    console.log("I am eating " + food +" this"); /// 

    task1(); // invoking 
    task2();
}

function washYourhand() {
    console.log("Washing My hand");
}

var goToBed = function() {
    console.log("I am going to Bed");
}

eat( "Cake", goToBed, washYourhand ); // passing 




