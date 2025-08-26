"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    fileName;
    constructor(fileName) {
        this.fileName = fileName;
    }
    writeMessage(message) {
        console.log(message);
    }
}
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName}${this.lastName}`;
    }
}
let person = new Person("Helios", "Selene");
console.log(person.fullName);
let employee = {
    name: "John Smith",
    salary: 50_000,
    address: {
        street: "Flinders st",
        city: "Melbourne",
        zipCode: 3144,
    },
};
console.log(employee);
//# sourceMappingURL=index.js.map