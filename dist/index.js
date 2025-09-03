"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function IsEmail(target, propertyName) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let value;
    const descriptor = {
        set(newValue) {
            if (!emailRegex.test(newValue))
                throw new Error(`Please provide a valid ${propertyName} address`);
            value = newValue;
        },
        get() {
            return value;
        },
    };
    Object.defineProperty(target, propertyName, descriptor);
}
class Contact {
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    IsEmail
], Contact.prototype, "email", void 0);
let user = new Contact("abc@gmail.com");
console.log(user.email);
function Sauce(value) {
    return (constructor) => {
        console.log('Decorator constructor called');
        constructor.prototype.sauce = value;
    };
}
let Pizza = class Pizza {
};
Pizza = __decorate([
    Sauce("pesto")
], Pizza);
let pizza = new Pizza();
//# sourceMappingURL=index.js.map