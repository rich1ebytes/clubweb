import React, { useState } from "react";
import questions from "../data/supportData";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1.05,
  },
};

const genericQuestions = questions;

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-4 md:p-8"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-brand-primary">
          Support & FAQ
        </h1>
        <p className="mt-4 text-brand-secondary text-lg">
          Find answers to the most common questions about ClubConnect.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {genericQuestions.map((item, index) => (
          <div
            key={index}
            className="border-b border-brand-accent last:border-b-0"
          >
            {/* Question (Accordion Header) */}
            <div
              className={`p-6 cursor-pointer flex justify-between items-center transition-colors duration-200 ${
                openIndex === index
                  ? "bg-brand-accent text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <h3
                className={`text-lg md:text-xl font-semibold transition-colors duration-200 ${
                  openIndex === index ? "text-white" : "text-brand-primary"
                }`}
              >
                {item.question}
              </h3>
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index
                    ? "rotate-180 text-white"
                    : "rotate-0 text-brand-secondary"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>

            {/* Answer (conditionally rendered) */}
            <div
              className={`p-6 transition-all duration-300 ease-in-out bg-brand-nav ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-brand-secondary text-lg mb-4">Still need help?</p>
        <a
          href="mailto:richardgomesxd@gmail.com?subject=New%20Support%20Question"
          className="inline-block bg-brand-accent text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-brand-accent transition transform hover:scale-105"
        >
          Ask a New Question
        </a>
      </div>
    </motion.div>
  );
};

export default Support;
