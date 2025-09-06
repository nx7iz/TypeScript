// function getFirstString(arr: string[]): string | undefined {
//   return arr[0];
// }

// let names = ["Alice", "Bob", "Charles"];
// let numbers = [10, 20, 30];
// let objects = [
//   { name: "Alice", age: 21 },
//   { name: "Selene", age: 42 },
// ];

// function getFirstElement<T>(arr: T[]): T | undefined {
//   return arr[0];
// }

// // console.log(getFirstElement(names));
// // console.log(getFirstElement(numbers));
// // console.log(getFirstElement(objects));

// function identity<T>(arg: T): T {
//   return arg;
// }

// function returnString(arg: string): string {
//   return arg;
// }
// function returnNumber(arg: number): number {
//   return arg;
// }

// function returnObject(arg: {}): {} {
//   return arg;
// }

// function returnAnything<T>(arg: T): T {
//   return arg;
// }

// returnString("anythingThatIsString");
// returnNumber(1);
// let object = returnObject({ name: "AABC" });
// // console.log(object);

// // let anything = returnAnything(1);
// // console.log(returnAnything(1));
// // console.log(returnAnything("string"));
// // console.log(returnAnything([1]));
// // console.log(returnAnything(["stringInaArray"]));
// // console.log(returnAnything({ anything: 1 }));

// function functionName<T>(arg: T): T {
//   return arg;
// }

// let name = "Arceus";
// identity("");

// interface Box<anyType> {
//   value: anyType;
// }

// let numberBox: Box<number> = { value: 42 };
// let stringBox: Box<string> = { value: "42" };
// let arrayBox: Box<[string, number]> = { value: ["a", 1] };

// class Stack<T> {
//   private _items: T[] = [];

//   push(item: T) {
//     this._items.push(item);
//   }

//   pop(): T | undefined {
//     return this._items.pop();
//   }

//   get items() {
//     return this._items;
//   }
// }

// let stack = new Stack<number>();
// stack.push(1);
// // console.log(stack.items);

// // console.log(stack.pop());

// // const stringStack = new Stack<string>();
// // stringStack.push("A");
// // stringStack.push("B");
// // const item1 = stringStack.pop();
// // console.log(item1);
// // console.log(stringStack.items);

// let popArray: number[] = [1, 2, 3, 4];
// // console.log(popArray);
// // console.log(popArray.push(5));
// // console.log(popArray);

// // 1
// function swap<T>(arr: T[], index1: number, index2: number): (T | undefined)[] {
//   // let newArray: T[] = [...arr];
//   let newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArray[i] = arr[i];
//   }

//   let temp = arr[index1];
//   newArray[index1] = arr[index2];
//   newArray[index2] = temp;
//   return newArray;
// }

// let originalArray = ["a", "b", "c"];
// console.log(swap(originalArray, 1, 2));
// console.log(originalArray);

// // 2
// interface Pair<T, U> {
//   first: T;
//   second: U;
// }

// let stringAndNumber: Pair<string, number> = {
//   first: "age",
//   second: 25,
// };
// console.log(stringAndNumber);

// let booleanAndArray: Pair<boolean, string[]> = {
//   first: true,
//   second: ["hello", "world"],
// };

// console.log(booleanAndArray);

// class Container<T> {
//   constructor(private _item: T) {}

//   getItem() {
//     return this._item;
//   }

//   setItem(value: T) {
//     this._item = value;
//   }
// }

// let container = new Container<number>(100);
// container.setItem(200);
// console.log(container.getItem());

// let userContainer = new Container<{ name: string } | null>(null);
// console.log(userContainer.getItem());
// userContainer.setItem({ name: "Arceus" });
// console.log(userContainer.getItem());

// class Person {
//   constructor(public name: string) {}
// }

// function echo(value: Person): Person {
//   return value;
// }

// echo(new Person("helo"));

// function printName<T extends { name: string }>(obj: T) {
//   console.log(obj.name);
// }

// class Entity<T> {
//   constructor(public id: T) {}
// }

// let stringId = new Entity<string>("abc");
// let numberId = new Entity<number>(1);

// interface User {
//   userId: number;
//   username: string;
// }

// let user: Partial<User> = { userId: 1, username: "a" };

// console.log(user);

// function Capitalize(
//   target: any,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const original = descriptor.get;
//   descriptor.get = function () {
//     const result = original?.call(this);
//     return typeof result === "string" ? result.toUpperCase() : result;
//   };
// }

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   @Capitalize
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// let person = new Person("Arceus", "Helios");
// console.log(person.fullName);

// function MinLength(length: number) {
//   return (target: any, propertyName: string) => {
//     let value: string;
//     const descriptor: PropertyDescriptor = {
//       get() {
//         return value;
//       },
//       set(newValue: string) {
//         if (newValue.length < length)
//           throw new Error(
//             `${propertyName} should be at least ${length} characters long.`
//           );
//         value = newValue;
//       },
//     };
//     Object.defineProperty(target, propertyName, descriptor);
//   };
// }
// class User {
//   @MinLength(4)
//   password: string;

//   constructor(password: string) {
//     this.password = password;
//   }
// }

// let user = new User("1234");
// user.password = "123";
// console.log(user.password);

// function IsEmail(target: any, propertyName: string) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   let value: string;
//   const descriptor: PropertyDescriptor = {
//     set(newValue: string) {
//       if (!emailRegex.test(newValue))
//         throw new Error(`Please provide a valid ${propertyName} address`);
//       value = newValue;
//     },
//     get() {
//       return value;
//     },
//   };
//   Object.defineProperty(target, propertyName, descriptor);
// }

// class Contact {
//   @IsEmail
//   email: string;

//   constructor(email: string) {
//     this.email = email;
//   }
// }
// let user = new Contact("abc@gmail.com");
// console.log(user.email);

// function Sauce(sauce: string) {
//   return (constructor: Function) => {
//     constructor.prototype.sauce = sauce;
//   };
// }

// @Sauce("pesto")
// class Pizza {
//   sauce?: string;
// }

// let pizza = new Pizza();
// console.log(pizza.sauce);

// function Log(constructor: Function) {
//   return class extends constructor {
//     constructor(...args: any) {
//       let currentTime = new Date().toLocaleString();
//       console.log(
//         `${constructor.name} class instance created at ${currentTime}.`
//       );
//     }
//   };
// }

// @Log
// class Person {
//   constructor(public name: string) {}
// }

// let person = new Person("Alice");

function Timer(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  let original = descriptor.value;
  let milliseconds = new Date().getMilliseconds();
  descriptor.value = function () {
    console.log(`${target.name}.${methodName} took ${milliseconds}ms`);
  };
}

class Calculator {
  @Timer
  calculateSum(a: number, b: number): number {
    const start = performance.now();
    while (performance.now() - start < 500) {}
    return a + b;
  }
}

let calculator = new Calculator();
calculator.calculateSum(1, 2);

function NonNegative(target: any, propertyName: string) {
  let value: number;
  const descriptor: PropertyDescriptor = {
    set(newValue: number) {
      return newValue < 0 ? (value = 0) : (value = newValue);
    },
    get() {
      return value;
    },
  };
  Object.defineProperty(target, propertyName, descriptor);
}

class Wallet {
  @NonNegative
  public balance: number = 100;
}
const myWallet = new Wallet();
console.log(myWallet.balance);

myWallet.balance = -5;
console.log(myWallet.balance);

function Validate(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  let original = descriptor.value;
  descriptor.value = function() {

  }
}

function ValidateEmail(
  target: any,
  methodName: string,
  parameterIndex: number
) {
  Reflect.defineProperty(target, methodName, parameterIndex)  
}

class UserService {
  @Validate
  registerUser(@ValidateEmail email: string, password: string): void {
    console.log(`Registering user with email: ${email}`);
  }
}

const userService = new UserService();
userService.registerUser("abc@gmail.com", "password123");
userService.registerUser("abc@gmail", "password123");
