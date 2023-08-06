import React, { useState } from 'react';
import { FaComments, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CommunitySupport = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'How can I manage hormonal imbalance symptoms?',
      answered: false,
    },
    {
      id: 2,
      question: 'What are some natural remedies for menstrual cramps?',
      answered: true,
    },
    // Add more questions here
  ]);

  const askQuestion = (newQuestion) => {
    const updatedQuestions = [
      ...questions,
      {
        id: questions.length + 1,
        question: newQuestion,
        answered: false,
      },
    ];
    setQuestions(updatedQuestions);
  };

  return (
    <div className="bg-gradient-to-br from-green-400 to-blue-300 text-gray-900 min-h-screen p-10">
      <h2 className="text-3xl font-semibold mb-4">Community & Support</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-semibold">Ask Health-Related Questions</h3>
          <div className="mt-4">
            <textarea
              className="w-full px-4 py-2 bg-white rounded-lg shadow focus:outline-none"
              placeholder="Type your question here..."
              rows="4"
            ></textarea>
          </div>
          <div className="mt-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
              onClick={() => askQuestion('')}
            >
              Submit Question
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Community Questions & Answers</h3>
          <div className="mt-4 space-y-4">
            {questions.map((q) => (
              <motion.div
                key={q.id}
                className={`bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow ${
                  q.answered ? 'bg-green-100' : ''
                }`}
              >
                <p>{q.question}</p>
                {q.answered ? (
                  <div className="flex justify-end mt-2">
                    <FaCheckCircle size={24} className="text-green-500" />
                  </div>
                ) : (
                  <div className="flex justify-end mt-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-blue-500 focus:outline-none"
                    >
                      Answer this question <FaComments size={20} className="ml-1" />
                    </motion.button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySupport;
