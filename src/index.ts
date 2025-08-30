function getFirstString(arr: string[]): string | undefined {
  return arr[0];
}

let names = ["Alice", "Bob", "Charles"];
let numbers = [10, 20, 30];
let objects = [
  { name: "Alice", age: 21 },
  { name: "Selene", age: 42 },
];

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// console.log(getFirstElement(names));
// console.log(getFirstElement(numbers));
// console.log(getFirstElement(objects));

function identity<T>(arg: T): T {
  return arg;
}

function returnString(arg: string): string {
  return arg;
}
function returnNumber(arg: number): number {
  return arg;
}

function returnObject(arg: {}): {} {
  return arg;
}

function returnAnything<T>(arg: T): T {
  return arg;
}

returnString("anythingThatIsString");
returnNumber(1);
let object = returnObject({ name: "AABC" });
// console.log(object);

// let anything = returnAnything(1);
// console.log(returnAnything(1));
// console.log(returnAnything("string"));
// console.log(returnAnything([1]));
// console.log(returnAnything(["stringInaArray"]));
// console.log(returnAnything({ anything: 1 }));

function functionName<T>(arg: T): T {
  return arg;
}

let name = "Arceus";
identity("");

interface Box<anyType> {
  value: anyType;
}

let numberBox: Box<number> = { value: 42 };
let stringBox: Box<string> = { value: "42" };
let arrayBox: Box<[string, number]> = { value: ["a", 1] };

class Stack<T> {
  private _items: T[] = [];

  push(item: T) {
    this._items.push(item);
  }

  pop(): T | undefined {
    return this._items.pop();
  }

  get items() {
    return this._items;
  }
}

let stack = new Stack<number>();
stack.push(1);
// console.log(stack.items);

// console.log(stack.pop());

// const stringStack = new Stack<string>();
// stringStack.push("A");
// stringStack.push("B");
// const item1 = stringStack.pop();
// console.log(item1);
// console.log(stringStack.items);

let popArray: number[] = [1, 2, 3, 4];
// console.log(popArray);
// console.log(popArray.push(5));
// console.log(popArray);

// 1
function swap<T>(arr: T[], index1: number, index2: number): (T | undefined)[] {
  let newArray = [...arr];

  // for (let i = 0; i < arr.length; i++) {
  //   newArray[i] = arr[i];
  // }

  let temp = arr[index1];
  newArray[index1] = arr[index2];
  newArray[index2] = temp;
  return newArray;
}

let originalArray = ["a", "b", "c"];
console.log(swap(originalArray, 1, 2));
console.log(originalArray);

// 2
interface Pair<T, U> {
  first: T;
  second: U;
}

let stringAndNumber: Pair<string, number> = {
  first: "age",
  second: 25,
};
console.log(stringAndNumber);

let booleanAndArray: Pair<boolean, string[]> = {
  first: true,
  second: ["hello", "world"],
};

console.log(booleanAndArray);

class Container<T> {
  constructor(private _item: T) {}

  getItem() {
    return this._item;
  }

  setItem(value: T) {
    this._item = value;
  }
}

let container = new Container<number>(100);
container.setItem(200);
console.log(container.getItem());

let userContainer = new Container<{ name: string } | null>(null);
console.log(userContainer.getItem());
userContainer.setItem({ name: "Arceus" });
console.log(userContainer.getItem());
