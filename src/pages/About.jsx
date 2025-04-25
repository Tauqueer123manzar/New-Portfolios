import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import photo from '../assets/TAj pic.jpg';

const About = () => {
  const techStack = [
    { name: "React", icon: <FaReact className="text-4xl text-blue-500" />, level: "90%" },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" />, level: "85%" },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-600" />, level: "80%" },
    { name: "Express", icon: <SiExpress className="text-4xl text-gray-800 dark:text-gray-200" />, level: "85%" },
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-black dark:text-white" />, level: "75%" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-400" />, level: "95%" },
    { name: "JavaScript", icon: <FaDatabase className="text-4xl text-yellow-500" />, level: "90%" },
    { name: "HTML", icon: <FaDatabase className="text-4xl text-orange-500" />, level: "90%" },
    { name: "CSS", icon: <FaDatabase className="text-4xl text-blue-500" />, level: "90%" },
    { name: "Git", icon: <FaDatabase className="text-4xl text-red-500" />, level: "90%" },
    { name: "GitHub", icon: <FaDatabase className="text-4xl text-gray-500" />, level: "90%" },
    { name: "Java", icon: <FaDatabase className="text-4xl text-orange-500" />, level: "90%" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        {/* Centered Content Container */}
        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                MERN Stack Developer | Problem Solver | Tech Enthusiast
              </h3>

              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-left px-4 md:px-0">
                <p>
                  I'm a passionate <span className="font-semibold text-indigo-600 dark:text-indigo-400">Full Stack Developer</span> specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with hands-on experience building scalable web applications.
                </p>
                
                <p>
                  My journey in web development began with a fascination for creating digital experiences. Through internships and personal projects, I've honed my skills in both frontend and backend development, with a keen eye for performance optimization and clean code architecture.
                </p>

                <p>
                  What excites me most about development is solving real-world problems through technology. I thrive in collaborative environments where I can contribute my technical expertise while continuously learning from others.
                </p>
              </div>

              {/* Skills Section - Centered */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
                  My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-3">
                        {tech.icon}
                        <span className="font-medium text-gray-800 dark:text-white">{tech.name}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-indigo-600 h-2.5 rounded-full" 
                          style={{ width: tech.level }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Experience Highlights - Centered */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-lg">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
                    <div className="text-gray-600 dark:text-gray-300">Projects</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">2+</div>
                    <div className="text-gray-600 dark:text-gray-300">Internships</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">100%</div>
                    <div className="text-gray-600 dark:text-gray-300">Dedication</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;