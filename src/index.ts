console.log("Hello TypeScript!");

// Basic Types
let id: number = 5;
let company: string = "ABC Company";
let isPublished: boolean = true;
let x: any = "Hello"; // any types
let age: number = 5;

let ids: number[] = [1, 2, 3, 4, 5]; // Array of numbers
let arr: any[] = [1, "mary", true];

// Typle -- array with type in particular order
let person: [number, string, boolean] = [1, "Brad", true];
// Tuple Array
let employee: [number, string][];
employee = [
  [1, "John"],
  [2, "Doe"],
  [3, "Mary"],
];

// Union - accept more than one type
let pid: string | number;
pid = 22;
// pid = '22'

// Enum - number / string
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up); // return 1
console.log(Direction1.Left); // return 3

enum Direction2 {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;
// **customerId now will have the value of cid, with type as number

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Void
// void can be used as expected output type when Nothing is expected to be returned
function log(message: string | number): void {
  console.log(message);
}

// Interfaces - used with Object
interface UserInterface {
  id: number;
  name: string;
  readonly gender?: string;
  age?: number; // ? - optional property
}

const user1: UserInterface = {
  id: 1,
  name: "John",
  gender: "Male",
};

const user2: UserInterface = {
  id: 1,
  name: "Jill",
  age: 24,
};

// Difference between Type & Interface
// Type can accept Unions, while interface cannot
type Point = number | string;
const p1: Point = 1;

// user1.gender = "female";  // cannot reassign if read-only property

// Function interface
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const minus: MathFunc = (x: number, y: number): number => x - y;

// Class interface
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  // private id: number;    // accessed only in this Class
  // protected id: number; // accessed only in this Class or other classes that extends this Class
  id: number;
  name: string; // default can be accessed by public

  // when new class is created, it will run through the constructor method & create the class object
  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const jack = new Employee(1, "Jack", "Pirate");

// Generics, <T> acts like a type placeholder, allow you to define type in component approach
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "john", "jill"]);
