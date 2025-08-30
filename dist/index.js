"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFirstString(arr) {
    return arr[0];
}
let names = ["Alice", "Bob", "Charles"];
let numbers = [10, 20, 30];
let objects = [
    { name: "Alice", age: 21 },
    { name: "Selene", age: 42 },
];
function getFirstElement(arr) {
    return arr[0];
}
function identity(arg) {
    return arg;
}
function returnString(arg) {
    return arg;
}
function returnNumber(arg) {
    return arg;
}
function returnObject(arg) {
    return arg;
}
function returnAnything(arg) {
    return arg;
}
returnString("anythingThatIsString");
returnNumber(1);
let object = returnObject({ name: "AABC" });
function functionName(arg) {
    return arg;
}
let name = "Arceus";
identity("");
let numberBox = { value: 42 };
let stringBox = { value: "42" };
let arrayBox = { value: ["a", 1] };
class Stack {
    _items = [];
    push(item) {
        this._items.push(item);
    }
    pop() {
        return this._items.pop();
    }
    get items() {
        return this._items;
    }
}
let stack = new Stack();
stack.push(1);
let popArray = [1, 2, 3, 4];
function swap(arr, index1, index2) {
    let newArray = [...arr];
    let temp = arr[index1];
    newArray[index1] = arr[index2];
    newArray[index2] = temp;
    return newArray;
}
let originalArray = ["a", "b", "c"];
console.log(swap(originalArray, 1, 2));
console.log(originalArray);
let stringAndNumber = {
    first: "age",
    second: 25,
};
console.log(stringAndNumber);
let booleanAndArray = {
    first: true,
    second: ["hello", "world"],
};
console.log(booleanAndArray);
class Container {
    item;
    constructor(item) {
        this.item = item;
    }
    getItem() {
        return this.item;
    }
    setItem(value) {
        this.item = value;
    }
}
let container = new Container(100);
container.setItem(200);
console.log(container.getItem());
let userContainer = new Container(null);
console.log(userContainer.getItem());
userContainer.setItem({ name: "Arceus" });
console.log(userContainer.getItem());
//# sourceMappingURL=index.js.map