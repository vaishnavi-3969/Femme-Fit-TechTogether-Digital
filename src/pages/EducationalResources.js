import React from 'react';
import { FaBook, FaVideo, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EducationalResources = () => {
    const resources = [
        {
          type: 'article',
          title: 'Understanding Hormonal Health',
          link: 'https://youtube.com/article',
        },
        {
          type: 'video',
          title: 'Hormones 101: A Comprehensive Guide',
          link: 'https://youtube.com/video',
        },
        {
          type: 'article',
          title: 'Balancing Hormones Naturally',
          link: 'https://youtube.com/article-balancing-hormones',
        },
        {
          type: 'video',
          title: 'The Impact of Hormones on Mood',
          link: 'https://youtube.com/video-hormones-mood',
        },
        {
          type: 'article',
          title: 'Hormonal Changes During Menstrual Cycle',
          link: 'https://youtube.com/article-menstrual-cycle',
        },
        {
          type: 'video',
          title: 'Hormone Health in Menopause',
          link: 'https://youtube.com/video-menopause',
        },
        {
          type: 'article',
          title: 'Hormonal Imbalance and Skin Health',
          link: 'https://youtube.com/article-skin-health',
        },
        {
          type: 'video',
          title: 'Hormones and Weight Management',
          link: 'https://youtube.com/video-weight-management',
        },
        {
          type: 'article',
          title: 'Hormones and Bone Health',
          link: 'https://youtube.com/article-bone-health',
        },
        {
          type: 'video',
          title: 'Hormone Health and Stress Management',
          link: 'https://youtube.com/video-stress-management',
        },
        {
          type: 'article',
          title: 'Hormonal Health and Sleep Patterns',
          link: 'https://youtube.com/article-sleep-patterns',
        },
      ];
      

  return (
    <div className="bg-gradient-to-br from-green-400 to-blue-500 text-gray-900 min-h-screen p-10">
      <h2 className="text-3xl font-semibold mb-4">Educational Resources</h2>
      <div className="grid gap-6">
        {resources.map((resource, index) => (
          <motion.a
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow flex items-center"
          >
            {resource.type === 'article' ? (
              <FaBook size={32} className="text-blue-600 mr-4" />
            ) : (
              <FaVideo size={32} className="text-red-600 mr-4" />
            )}
            <div>
              <h3 className="text-xl font-semibold">{resource.title}</h3>
              <p className="mt-1 text-gray-600">
                {resource.type === 'article' ? 'Read' : 'Watch'} Now <FaArrowRight className="inline ml-1" />
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default EducationalResources;
