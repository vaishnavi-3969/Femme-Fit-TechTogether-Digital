import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Confetti from 'react-dom-confetti';
import { FiCalendar, FiTool } from 'react-icons/fi';

const CycleTracking = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [futurePeriods, setFuturePeriods] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleLogCycle = () => {
    if (startDate && endDate) {
      const cycleLength = (endDate - startDate) / (1000 * 60 * 60 * 24);
      const futurePeriodDates = [];
      let currentDate = new Date(startDate);

      for (let i = 0; i < 3; i++) {
        const futureDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000); // Adding 30 days
        futurePeriodDates.push(futureDate);
        currentDate = futureDate;
      }

      setFuturePeriods(futurePeriodDates);
      setShowConfetti(true);
    }
  };

  const handleSetReminder = (date) => {
    const reminderMessage = document.querySelector('#reminderMessage').value;
    setShowDialog(true);
  };

  return (
    <div className="bg-gradient-to-br from-orange-500 to-pink-300 text-gray-900 min-h-screen p-10">
      <h2 className="text-3xl font-semibold mb-4">Cycle Tracking & Reminders</h2>
      <div className="space-y-6">
        <div className="flex items-center">
          <label className="text-lg mr-2">Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="p-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <label className="text-lg mr-2">End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="p-2 border rounded-md focus:outline-none"
          />
        </div>
        <button
          onClick={handleLogCycle}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
        >
          Log Cycle
        </button>
        <Confetti active={showConfetti} config={{ spread: 360 }} />
      </div>

      <h3 className="text-2xl font-semibold mt-8">Expected Future Periods:</h3>
      <ul className="list-disc pl-6 space-y-2">
        {futurePeriods.map((periodDate, index) => (
          <li key={index}>{periodDate.toDateString()}</li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold mt-8">Set Reminders:</h3>
      <div className="space-y-4">
        <input
          id="reminderMessage"
          type="text"
          placeholder="Enter reminder message"
          className="w-full p-3 border rounded-md focus:outline-none"
        />
        <DatePicker
          selected={null}
          onChange={(date) => handleSetReminder(date)}
          className="p-2 border rounded-md focus:outline-none"
        />
        <button
          onClick={() => handleSetReminder()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
        >
          Set Reminder
        </button>
      </div>

      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-2xl font-semibold mb-2">Reminder Set Successfully!</p>
            <p className="text-gray-700">
              You will receive an email and SMS notification 2-3 days in advance to carry pads.
            </p>
            <button
              onClick={() => setShowDialog(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none mt-4"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CycleTracking;
