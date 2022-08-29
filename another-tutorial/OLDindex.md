// Another tutorial
export {};

// console.log("hello world");
async function hello() {
return "world";
}

let apple = 23;
// apple = "23"; // ts file will show error if assigned to different types, js won't

let lucky: any = 23; // use any type will avoid type checking in ts file
lucky = "23";

// setup desired type
let numberType: number = 13;
// numberType = "23"; // show error if number is not the declared type
let isBeginner: boolean = true;
let stringValue: string = "This is a string";

// type for object
interface Person {
first: string;
last: string;
[key: string]: any; // other properties optional
}

const person1: Person = {
first: "Mary",
last: "Chan",
};

const person2: Person = {
first: "John",
last: "Doe",
fast: true,
};

// type for function
function pow(x: number, y: number): string {
return Math.pow(x, y).toString();
}

pow(5, 10);
// pow("5", "10");

function pow2(x: number, y: number): void {
// for function that do not return a value, or other side effects
Math.pow(x, y);
}

// setup types for array
const arr: number[] = []; // array of numbers
const arr3: Array<number> = []; // array of
arr.push(1);

const arrObject: Person[] = []; // array of objects

type MyList = [number?, string?, boolean?]; // ? => optional value, order of values matter
let arr2: MyList = [123, "Chris", true];

// type inside class or function
