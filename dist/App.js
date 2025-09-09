"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./logo.svg");
require("./App.css");
const RemindersList_1 = __importDefault(require("./components/RemindersList"));
function App() {
    const [reminders, setReminders] = (0, react_1.useState)([
        { id: 1, title: "Reminder 1" },
    ]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "App", children: (0, jsx_runtime_1.jsx)(RemindersList_1.default, { items: reminders }) }));
}
exports.default = App;
//# sourceMappingURL=App.js.map