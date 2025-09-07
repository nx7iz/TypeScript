import React from "react";
import Reminder from "../models/reminder";

interface RemindersListProps {
  items: Reminder[];
}

function RemindersList({ items }: RemindersListProps) {
  return <ul>
    {items.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>;
}


export default RemindersList;
