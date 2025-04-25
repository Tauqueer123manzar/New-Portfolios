import React from 'react';
import { motion } from 'framer-motion';
import resumePDF from '../assets/Tauqueer Mern Resume.pdf';
import photo from '../assets/TAj pic.jpg';
import Footer from '../components/Footer';
const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'resumePDF';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    <div className="h-screen">
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
              <img
                src={photo}
                alt="Profile"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-500 opacity-10"></div>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Md Tauqueer Manzar</span>
            </h1>
            
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 font-medium">
              Full Stack Web Developer
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              A passionate and detail-oriented Full Stack Web Developer with a solid foundation in MERN (MongoDB, Express.js,
              React.js, Node.js) and Next.js. Though a fresher, I have gained hands-on experience through internships, where I worked on
              developing scalable web applications, optimizing performance, and implementing responsive designs. Adept at both front-end
              and back-end development, I have a strong understanding of RESTful APIs, database management, and UI/UX
              principles. I am committed to continuous learning and excited to contribute my skills to impactful web development projects.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Download Resume</span>
              <span className="absolute inset-0 bg-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {['React.js', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Tailwind', 'JavaScript', 'HTML', 'CSS','Git','GitHub','Data Structure','Bootstrap','Core Java','Python'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-indigo-600 dark:text-indigo-400 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
    </>
  );
};

export default Home;