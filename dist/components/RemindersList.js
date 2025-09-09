"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function RemindersList({ items }) {
    return (0, jsx_runtime_1.jsx)("ul", { children: items.map(item => (0, jsx_runtime_1.jsx)("li", { children: item.title }, item.id)) });
}
exports.default = RemindersList;
//# sourceMappingURL=RemindersList.js.map