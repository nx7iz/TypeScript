// class Book {
//   constructor(
//     public title: string,
//     public author: string,
//     public publishedYear: number
//   ) {}

//   getSummary() {
//     return `The book ${this.title} by ${this.author} was published in the year ${this.publishedYear}.`;
//   }
// }

// class Ebook extends Book {
//   constructor(
//     title: string,
//     author: string,
//     publishedYear: number,
//     public fileSize: number
//   ) {
//     super(title, author, publishedYear);
//   }

//   override getSummary(): string {
//     return `${super.getSummary()} It has a file size of ${this.fileSize} MB.`;
//   }
// }

// let eBook = new Ebook("Adventure Time", "Uzikai", 1982, 18.72);
// console.log(eBook.getSummary());

// interface Payment {
//   amount: number;
//   processPayment(): void;
// }

// class CreditCardPayment implements Payment {
//   constructor(public amount: number) {}
//   processPayment(): void {
//     console.log(
//       `Credit card payment for the amount $${1000} is being processed. Please wait.`
//     );
//   }
// }

// let cardPayment = new CreditCardPayment(1000);
// cardPayment.processPayment();

// abstract class Shape {
//   abstract getArea(): number;
// }

// class Circle extends Shape {
//   constructor(public radius: number) {
//     super();
//   }

//   override getArea(): number {
//     return Math.PI * (this.radius * this.radius);
//   }
// }

// class Rectangle extends Shape {
//   constructor(public width: number, public height: number) {
//     super();
//   }

//   override getArea(): number {
//     return this.width * this.height;
//   }
// }

// function printArea(shape: Shape) {
//   console.log(shape.getArea());
// }

// let circle = new Circle(5);
// let rectangle = new Rectangle(4, 6);
// printArea(circle);
// printArea(rectangle);

interface IEmployee {
  name: string;
  id: number;
  calculatePay(): number;
}

abstract class Employee implements IEmployee {
  constructor(public id: number, public name: string) {}
  abstract calculatePay(): number;
}

class SalariedEmployee extends Employee {
  constructor(id: number, name: string, public salary: number) {
    super(id, name);
  }

  override calculatePay(): number {
    return this.salary;
  }
}

class HourlyEmployee extends Employee {
  constructor(
    id: number,
    name: string,
    public hourlyRate: number,
    public hoursWorked: number
  ) {
    super(id, name);
  }
  override calculatePay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}
let salariedEmployee = new SalariedEmployee(1, "Liqx", 10_000);
let hourlyEmployee = new HourlyEmployee(2, "Arceus", 20, 18);

let payroll: Employee[] = [salariedEmployee, hourlyEmployee];

function processPayroll(employees: IEmployee[]) {
  for (let employee of employees) {
    console.log(`${employee.name}\nBasic Pay: ${employee.calculatePay()}`);
  }
}

processPayroll(payroll);
