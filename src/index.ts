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

console.log(getFirstElement(names));
console.log(getFirstElement(numbers));
console.log(getFirstElement(objects));

function identity<T>(arg: T): T {
  return arg;
}

let name = "Arceus";
identity("");
