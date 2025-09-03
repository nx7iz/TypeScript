function Component(constructor: Function) {
  console.log("Component decorator called.");
  constructor.prototype.unqiueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting the component in the DOM");
  };
}

@Component
class ProfileComponent {
  constructor() {}
}
let profile = new ProfileComponent();

// function Composition(value: number) {
//   return Function Composition (constructor: Function){
//     console.log("Component decorator called.");
//     constructor.prototype.unqiueId = Date.now();
//     constructor.prototype.insertInDOM = () => {
//       console.log("Inserting the component in the DOM");
//     };
//   };
// }

// type ComponentOptions = {
//   selector: string;
// };
// // // Decorator Factory
// function Component(options: ComponentOptions) {
//   return (constructor: Function) => {
//     console.log("Component decorator called.");
//     constructor.prototype.options = options;
//     constructor.prototype.unqiueId = Date.now();
//     constructor.prototype.insertInDOM = () => {
//       console.log("Inserting the component in the DOM");
//     };
//   };
// }

// @Component({ selector: "#my-profile" })
// class ProfileComponent {}

// type ComponentOptions = {
//   selector: string;
// };
// // Decorator Factory
// function Component(options: ComponentOptions) {
//   return (constructor: Function) => {
//     console.log("Component decorator called.");
//     constructor.prototype.options = options;
//     constructor.prototype.unqiueId = Date.now();
//     constructor.prototype.insertInDOM = () => {
//       console.log("Inserting the component in the DOM");
//     };
//   };
// }
// // Decorator Composition

// function Pipe(constructor: Function) {
//   console.log("Pipe decorator called.");
//   constructor.prototype.pipe = true;
// }

// @Component({ selector: "#my-profile" })
// @Pipe
// class ProfileComponent {}

// Method Decorators

// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function;
//   descriptor.value = function (...args: any) {
//     console.log("Before");
//     original.call(this, ...args);
//     console.log("After");
//   };
// }

// class Person {
//   @Log
//   say(message: string) {
//     console.log("Person says " + message);
//   }
// }

// let person = new Person();
// person.say("helo");

// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function; // references the targeted method
//   descriptor.value = function (...args: any) {
//     console.log("Before");
//     original.call(this, ...args);
//     console.log("After");
//   };
// }

// class Person {
//   @Log
//   say(message: string) {
//     console.log("Person says " + message);
//   }
// }

// let person = new Person();
// person.say("Hello");

// Accessors Decorators

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

// Property Decorator

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
//             `${propertyName} should be at least ${length} characters long`
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
// let user = new User("12555");
// console.log(user.password);

// Parameter Decoraters
type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}
console.log(watchedParameters);
