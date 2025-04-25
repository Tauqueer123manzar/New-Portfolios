import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub className="text-xl" />, url: "https://github.com/yourusername" },
    { icon: <FaLinkedin className="text-xl" />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FaTwitter className="text-xl" />, url: "https://twitter.com/yourusername" },
    { icon: <FaEnvelope className="text-xl" />, url: "mailto:your.email@example.com" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-2">👨‍💻</span>
              <span className="text-xl font-bold text-white">MyPortfolio</span>
            </div>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={link.url.split('/')[2]} // Extracts domain name
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm"
          >
            <a href="#home" className="hover:text-white transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
            <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
            <a href="#resume" className="hover:text-white transition-colors duration-300">Resume</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="my-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
        />

        {/* Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-xs text-gray-500"
        >
          <p>Built with React and Tailwind CSS</p>
          <p className="mt-1">Designed with ❤️ by You</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;