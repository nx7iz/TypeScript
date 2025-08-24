// // Basic Exercises
// let name = "Arceus";
// let age = 21;
// let isStudent = true;

// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(5, -10));

// type User = {
//   id: number;
//   name: string;
//   email?: string;
// };

// let user1: User = {
//   id: 1,
//   name: "Noman",
//   email: "abc@gmail.com",
// };

// let user2: User = {
//   id: 2,
//   name: "Liqx",
// };
// console.log(user1);
// console.log(user2);

// type StringOrNumber = string | number;

// let myID: StringOrNumber = 123;
// let myName: StringOrNumber = "Arceus";

// type Coordinates = [number, number];
// let myLocation: Coordinates = [403.1092, -72.0912];

// Intermediate Exercises
// let numbers: number[] = [10, 20, 30, 40];
// let coordinates: [number, string] = [-91.4391, "My Location"];

// type Status = "success" | "error" | "pending";

// function printStatus(status: Status): void {
//   console.log(status);
// }
// printStatus("pending");

// const enum Status {
//   Pending,
//   Success,
//   Error,
// }

// let currentState: Status = Status.Pending;

// function showStatus(status: Status): void {
//   if (status === Status.Success) console.log("The operation was successful.");
//   else if (status === Status.Error) console.log("An error occurred.");
//   else console.log("The operation is pending.");
// }

// let statusName: string = Status[currentState];
// console.log(statusName);

// Advance Exercise
// type User = {
//   name: string;
//   age: number;
//   occupation?: string;
// };

// let user: User[] = [
//   { name: "John Smith", age: 30, occupation: "Software engineer" },
//   { name: "Kate Miller", age: 28 },
// ];

// // type Days = "Monday" | "Tuesday" | "Wednesday";

// let user = getUser();
// console.log(user?.address?.street);

// let x = foo ?? bar();

// let value: unknown = "a";
// if (typeof value === "string") 
//   console.log(value.toUpperCase());
