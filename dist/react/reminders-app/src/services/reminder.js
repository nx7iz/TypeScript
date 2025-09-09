"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class ReminderService {
    constructor() {
        this.http = axios_1.default.create({
            baseURL: "https://jsonplaceholder.typicode.com/",
        });
    }
    async getReminders() {
        const response = await this.http.get("/todos");
        return response.data;
    }
    async addReminer(title) {
        const response = await this.http.post("/todos", [title]);
        return response.data;
    }
    async removeReminder(id) {
        const response = await this.http.delete("/todos" + id);
        return response.data;
    }
}
exports.default = new ReminderService();
//# sourceMappingURL=reminder.js.map