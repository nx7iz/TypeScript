// // Class, Access specifiers, getter/setter
// class Account {
//   nickname?: string;

//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number
//   ) {}

//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error("Invalid amount");
//     this._balance += amount;
//   }

//   calculateTax() {}
//   get balance(): number {
//     return this._balance;
//   }

//   // set balance(value: number) {
//   //   if (value < 0)
//   //     throw new Error("Invalid value");
//   //   this._balance = value;
//   // }
// }

// let account = new Account(1, "Noman", 0);
// account.deposit(100);
// // console.log(account instanceof Account);
// console.log(account.balance);

// // Index signature property (special property)
// class SeatAssignment {
//   // Index signature property (special property)
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// seats.A1 = "Noman";
// seats["A1"] = "Noman";
// seats.A2 = "Liqx";
// console.log(seats);

// // Static members
// class Ride {
//   private static _activeRides: number = 0;

//   start() {
//     Ride._activeRides++;
//   }

//   stop() {
//     Ride._activeRides--;
//   }

//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(Ride.activeRides);

// // Inheritance
// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
//   walk() {
//     console.log("Walking");
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log("Taking a test");
//   }
// }

// class Teacher extends Person {
//   override get fullName() {
//     return "Professor " + super.fullName;
//   }
// }

// class Principal extends Person {
//   override get fullName() {
//     return "Principal " + super.fullName;
//   }
// }

// // let teacher = new Teacher("John", "Smith");
// // console.log(teacher.fullName);

// printNames([
//   new Student(1, "John", "Smith"),
//   new Teacher("Arceus", "Helios"),
//   new Principal("Selene", "Helen"),
// ]);

// function printNames(people: Person[]) {
//   for (let person of people) console.log(person.fullName);
// }

// Abstract classes and methods

// abstract class Shape {
//   constructor(public color: string) {}

//   abstract render(): void;
// }

// class Circle extends Shape {
//   constructor(public radius: number, color: string) {
//     super(color);
//   }
//   override render(): void {
//     console.log('Rendering a circle');

//   }
// }

// let shape = new Shape('red');
// shape.render();

// Interfaces -> define the shape of an object
// abstract class Calender {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync(): void;
}

class GoogleCalender implements Calender {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
