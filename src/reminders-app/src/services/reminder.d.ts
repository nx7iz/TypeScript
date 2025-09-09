import axios from "axios";
import Reminder from "../models/reminder";
declare class ReminderService {
    http: axios.AxiosInstance;
    getReminders(): Promise<Reminder[]>;
    addReminer(title: string): Promise<Reminder>;
    removeReminder(id: number): Promise<any>;
}
declare const reminderService: ReminderService;
export default reminderService;
//# sourceMappingURL=reminder.d.ts.map