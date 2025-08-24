"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());
//# sourceMappingURL=advance.js.map