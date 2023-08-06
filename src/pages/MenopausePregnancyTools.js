import React, { useState } from 'react';
import { FaBaby, FaBed, FaTemperatureHigh } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MenopausePregnancyTools = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  const handleToolSelection = (tool) => {
    setSelectedTool(tool);
  };

  const menopauseSymptoms = [
    {
      symptom: 'Night Sweats',
      description: 'Excessive sweating during sleep',
    },
  ];

  const pregnancyMilestones = [
    {
      milestone: 'Week 4',
      description: 'Fertilization and implantation',
    },
    {
      milestone: 'Week 12',
      description: 'End of first trimester',
    },
  ];

  const SymptomTracker = ({ data }) => {
    return (
      <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
        <h4 className="text-xl font-semibold mb-2">Symptom Tracker</h4>
        <ul>
          {data.map((item, index) => (
            <li key={index} className="mb-2">
              <p className="text-lg font-medium">{item.symptom}</p>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const MilestoneTracker = ({ data }) => {
    return (
      <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
        <h4 className="text-xl font-semibold mb-2">Milestone Tracker</h4>
        <ul>
          {data.map((item, index) => (
            <li key={index} className="mb-2">
              <p className="text-lg font-medium">{item.milestone}</p>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-green-500 to-blue-300 text-gray-900 min-h-screen p-10">
      <h2 className="text-3xl font-semibold mb-4">Menopause & Pregnancy Tools</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-semibold">Menopause Symptom Tracker</h3>
          <div className="mt-4">
            <motion.div
              className={`text-center p-4 rounded-lg cursor-pointer ${
                selectedTool === 'menopause' ? 'bg-red-500' : 'bg-gray-100 hover:bg-red-500'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleToolSelection('menopause')}
            >
              <FaTemperatureHigh size={32} className="text-white" />
              <p className="mt-2">Menopause</p>
            </motion.div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Pregnancy Milestone Tracker</h3>
          <div className="mt-4">
            <motion.div
              className={`text-center p-4 rounded-lg cursor-pointer ${
                selectedTool === 'pregnancy' ? 'bg-blue-500' : 'bg-gray-100 hover:bg-blue-500'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleToolSelection('pregnancy')}
            >
              <FaBaby size={32} className="text-white" />
              <p className="mt-2">Pregnancy</p>
            </motion.div>
          </div>
        </div>
      </div>
      {selectedTool === 'menopause' && (
        <div className="mt-6">
          <SymptomTracker data={menopauseSymptoms} />
        </div>
      )}
      {selectedTool === 'pregnancy' && (
        <div className="mt-6">
          <MilestoneTracker data={pregnancyMilestones} />
        </div>
      )}
    </div>
  );
};

export default MenopausePregnancyTools;
