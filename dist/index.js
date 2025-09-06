"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
function Timer(target, methodName, descriptor) {
    let original = descriptor.value;
    let milliseconds = new Date().getMilliseconds();
    descriptor.value = function () {
        console.log(`${target.name}.${methodName} took ${milliseconds}ms`);
    };
}
class Calculator {
    calculateSum(a, b) {
        const start = performance.now();
        while (performance.now() - start < 500) { }
        return a + b;
    }
}
__decorate([
    Timer
], Calculator.prototype, "calculateSum", null);
let calculator = new Calculator();
calculator.calculateSum(1, 2);
function NonNegative(target, propertyName) {
    let value;
    const descriptor = {
        set(newValue) {
            return newValue < 0 ? (value = 0) : (value = newValue);
        },
        get() {
            return value;
        },
    };
    Object.defineProperty(target, propertyName, descriptor);
}
class Wallet {
    constructor() {
        this.balance = 100;
    }
}
__decorate([
    NonNegative
], Wallet.prototype, "balance", void 0);
const myWallet = new Wallet();
console.log(myWallet.balance);
myWallet.balance = -5;
console.log(myWallet.balance);
function Validate(target, methodName, descriptor) {
    let original = descriptor.value;
    descriptor.value = function () {
    };
}
function ValidateEmail(target, methodName, parameterIndex) {
    Reflect.defineProperty(target, methodName, parameterIndex);
}
class UserService {
    registerUser(email, password) {
        console.log(`Registering user with email: ${email}`);
    }
}
__decorate([
    Validate,
    __param(0, ValidateEmail)
], UserService.prototype, "registerUser", null);
const userService = new UserService();
userService.registerUser("abc@gmail.com", "password123");
userService.registerUser("abc@gmail", "password123");
//# sourceMappingURL=index.js.map