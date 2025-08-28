"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class SalariedEmployee extends Employee {
    salary;
    constructor(id, name, salary) {
        super(id, name);
        this.salary = salary;
    }
    calculatePay() {
        return this.salary;
    }
}
class HourlyEmployee extends Employee {
    hourlyRate;
    hoursWorked;
    constructor(id, name, hourlyRate, hoursWorked) {
        super(id, name);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    calculatePay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
let salariedEmployee = new SalariedEmployee(1, "Liqx", 10_000);
let hourlyEmployee = new HourlyEmployee(2, "Arceus", 20, 18);
let payroll = [salariedEmployee, hourlyEmployee];
function processPayroll(employees) {
    for (let employee of employees) {
        console.log(`${employee.name}\nBasic Pay: ${employee.calculatePay()}`);
    }
}
processPayroll(payroll);
//# sourceMappingURL=index.js.map