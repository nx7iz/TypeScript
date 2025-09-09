import Reminder from "../models/reminder";
declare class ReminderService {
    http: import("axios").AxiosInstance;
    getReminders(): Promise<Reminder[]>;
    addReminer(title: string): Promise<Reminder>;
    removeReminder(id: number): Promise<any>;
}
declare const _default: ReminderService;
export default _default;
//# sourceMappingURL=reminder.d.ts.map