class Logger {
  constructor(public fileName: string) {}

  writeMessage(message: string) {
    console.log(message);
  }
}

// let file1 = new Logger(".txt");
// file1.writeMessage('Wriiting a message to file');

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
let person = new Person("Helios", "Selene");
console.log(person.fullName);

// class Employee extends Person {
//   constructor(public salary: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }
// }

interface Address {
  street: string;
  city: string;
  zipCode: number;
}

interface Employee {
  name: string;
  salary: number;
  address: Address;
}

let employee: Employee = {
  name: "John Smith",
  salary: 50_000,
  address: {
    street: "Flinders st",
    city: "Melbourne",
    zipCode: 3144,
  },
};
console.log(employee);
