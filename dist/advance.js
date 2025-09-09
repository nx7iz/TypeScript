"use strict";
// Type alias -> Define a Custom type
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };
Object.defineProperty(exports, "__esModule", { value: true });
// let employee: Employee = {
//   id: 1,
//   name: "Noman",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// Union Types -> Variable / function parameter >1 type
// function kgToLb(weight: number | string): number {
//   if (typeof weight === "number") return weight * 2.2;
//   return parseInt(weight) * 2.2;
// }
// kgToLb(10);
// kgToLb("10kg");
// Intersection Types -> Combine types but with ( & )
// type Draggable = {
//   drag: () => void;
// };
// type Resizable = {
//   resize: () => void;
// };
// type UIWidget = Draggable & Resizable;
// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {}
// }
// Literal Types(exact, specific) -> Limiting values assigned to the variables
// type Quantity = 50 | 100;
// let quantity: Quantity = 50;
// type Metric = 'cm' | 'inch';
// Nullable Types
// function greet(name: string | null | undefined) {
//   if(name)
//     console.log(name.toUpperCase());
//   else
//     console.log('Hola!');
// }
// greet(undefined);
// Optional Chaining
// type Customer = {
//   birthday?: Date
// }
// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() }
// }
// let customer = getCustomer(1);
// // Optional property access operator ( ? )
// console.log(customer?.birthday?.getFullYear());
// // Optional element access operator (Arrays)
// // if (customers !== null && customers !== undefined)
// //     customers[0]
// // customers?.[0]
// // Optional call
// let log: any = null;
// log?.('a');
// Nullish Coaelscing Operator
// let speed: number | null = null;
// let ride = {
//   // Falsy (undefined, null, '', false, 0)
//   // NCO ( ?? )
//   // speed !== null ? speed : 30
//   speed: speed ?? 30
// }
// // Type Assertions
// let phone = <HTMLInputElement> document.getElementById('phone');
// // HTMLElement -> class defined in javascript
// phone.value
// Unknown type
// function render(document: unknown) {
//   // Narrowing
//   if (typeof document === 'string') {
//     document.toUpperCase();
//   }
//   if (document instanceof WordDocument) {
//     document.toUpperCase();
//   }
//   document.move();
//   document.fly();
// }
// Never type
// function reject(message: string): never {
//   throw new Error(message);
// }
// function processEvents(): never {
//   while (true) {
//     // Read a message from a queue
//   }
// }
// // processEvents();
// reject('...');
// console.log('Hello World');
//# sourceMappingURL=advance.js.map