import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import { FaRegSmile, FaMeh, FaFrown } from 'react-icons/fa';

const emojis = ['happy', 'neutral', 'sad'];

const HealthMoodInsights = () => {
  const { isAuthenticated } = useAuth0();
  const [showInsights, setShowInsights] = useState(false);
  const [moodData, setMoodData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMood, setSelectedMood] = useState(''); // 'happy', 'neutral', 'sad'
  const [submitted, setSubmitted] = useState(false);

  const sampleMoodData = [
    { date: '2023-08-01', mood: 'happy' },
    { date: '2023-08-02', mood: 'neutral' },
    { date: '2023-08-03', mood: 'sad' },
  ];

  useEffect(() => {
    setMoodData(sampleMoodData);
  }, []);

  const toggleInsights = () => {
    setShowInsights(!showInsights);
  };

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
  };

  const handleMoodSubmission = () => {
    if (selectedDate && selectedMood) {
      const newMoodData = [...moodData, { date: selectedDate, mood: selectedMood }];
      setMoodData(newMoodData);

      setSelectedDate(null);
      setSelectedMood('');
      setSubmitted(true);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = 30; 
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    return Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      const isSelected = selectedDate === `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`;
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      const emoji = isSelected ? selectedMood : randomEmoji;
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer ${
            isSelected ? 'border-4 border-blue-500' : ''
          }`}
          onClick={() => handleDateSelection(currentDate.getFullYear(), currentDate.getMonth() + 1, day)}
        >
          <p className="text-center font-semibold">{day}</p>
          <div className="flex justify-center mt-2">
            {emoji === 'happy' && <FaRegSmile size={24} className="text-yellow-400" />}
            {emoji === 'neutral' && <FaMeh size={24} className="text-gray-500" />}
            {emoji === 'sad' && <FaFrown size={24} className="text-blue-600" />}
          </div>
        </motion.div>
      );
    });
  };

  const handleDateSelection = (year, month, day) => {
    const selectedDateString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(selectedDateString);
  };

  return (
    <div className="bg-gradient-to-br from-orange-500 to-pink-300 text-gray-900 min-h-screen p-10">
      <h2 className="text-3xl font-semibold mb-4">Health & Mood Insights</h2>
      <div className="space-y-6">
        <button
          onClick={toggleInsights}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
        >
          {showInsights ? 'Hide Insights' : 'Show Insights'}
        </button>
      </div>

      {showInsights && isAuthenticated && (
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Personalized Health Dashboard</h3>
              <p>Monitor your health metrics and receive tailored insights.</p>
              <hr className="my-4" />

              <h3 className="text-2xl font-semibold">Mood Patterns Over Time</h3>
              <div className="grid grid-cols-1 gap-4 mt-2">
                {moodData.map((entry, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
                  >
                    <p>Date: {entry.date}</p>
                    <p>Mood: {entry.mood}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Your Mood Calendar</h3>
              <div className="grid grid-cols-7 gap-2 mt-4">{renderCalendar()}</div>
            </div>
          </div>

          <hr className="my-6" />

          <div>
            <h3 className="text-2xl font-semibold">Today's Mood</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div
                className={`text-center p-4 rounded-lg cursor-pointer ${
                  selectedMood === 'happy' ? 'bg-yellow-400' : 'bg-gray-100 hover:bg-yellow-400'
                }`}
                onClick={() => handleMoodSelection('happy')}
              >
                <FaRegSmile size={32} />
                <p className="mt-2">Happy</p>
              </div>
              <div
                className={`text-center p-4 rounded-lg cursor-pointer ${
                  selectedMood === 'neutral' ? 'bg-gray-400' : 'bg-gray-100 hover:bg-gray-400'
                }`}
                onClick={() => handleMoodSelection('neutral')}
              >
                <FaMeh size={32} />
                <p className="mt-2">Neutral</p>
              </div>
              <div
                className={`text-center p-4 rounded-lg cursor-pointer ${
                  selectedMood === 'sad' ? 'bg-blue-600' : 'bg-gray-100 hover:bg-blue-600'
                }`}
                onClick={() => handleMoodSelection('sad')}
              >
                <FaFrown size={32} />
                <p className="mt-2">Sad</p>
              </div>
            </div>
            <div className="mt-2">
              <button
                onClick={handleMoodSubmission}
                className={`px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none ${
                  selectedMood ? '' : 'opacity-50 cursor-not-allowed'
                }`}
                disabled={!selectedMood}
              >
                {submitted ? 'Submitted!' : "Submit Today's Mood"}
              </button>
            </div>
          </div>
        </div>
      )}

      {!showInsights && (
        <div className="mt-6">
          <p>Login to view personalized health and mood insights.</p>
        </div>
      )}
    </div>
  );
};

export default HealthMoodInsights;
