import React, { useState } from "react";
import "./logo.svg";
import "./App.css";
import RemindersList from "./components/RemindersList";
import Reminder from "./models/reminder";

// const reminders: Reminder[] = [{ id: 2, title: "Reminder 2" }];

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: "Reminder 1" },
  ]);

  return (
    <div className="App">
      <RemindersList items={reminders} />
    </div>
  );
}

export default App;
