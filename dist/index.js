"use strict";
console.log("Hello TypeScript!");
// Basic Types
let id = 5;
let company = "ABC Company";
let isPublished = true;
let x = "Hello"; // any types
let age = 5;
let ids = [1, 2, 3, 4, 5]; // Array of numbers
let arr = [1, "mary", true];
// Typle -- array with type in particular order
let person = [1, "Brad", true];
// Tuple Array
let employee;
employee = [
    [1, "John"],
    [2, "Doe"],
    [3, "Mary"],
];
// Union - accept more than one type
let pid;
pid = 22;
// pid = '22'
// Enum - number / string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // return 1
console.log(Direction1.Left); // return 3
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// **customerId now will have the value of cid, with type as number
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
// void can be used as expected output type when Nothing is expected to be returned
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
    gender: "Male",
};
const user2 = {
    id: 1,
    name: "Jill",
    age: 24,
};
const p1 = 1;
const add = (x, y) => x + y;
const minus = (x, y) => x - y;
// Classes
class Person {
    // when new class is created, it will run through the constructor method & create the class object
    constructor(id, name) {
        (this.id = id), (this.name = name);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const jack = new Employee(1, "Jack", "Pirate");
// Generics, <T> acts like a type placeholder, allow you to define type in component approach
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "john", "jill"]);
strArray.push(1); // Throws error
