import { useState } from "react";
import { faqData } from "../../../Assets/data/dataBank";
import AccordionItem from "./AccordionItem";
import { motion } from "framer-motion";
import { BiSupport } from "react-icons/bi";
import faqImg from "../../../Assets/images/faqImg.jpg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 font-inter p-3 sm:p-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-6 max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">
            Find quick answers to the most common questions about booking,
            policies, and our services at WindTravels.
          </p>
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="w-1/2 hidden lg:block">
            <img src={faqImg} alt="" />
          </div>
          {/* FAQ Accordion List */}
          <div className="bg-gray-50 lg:w-1/2 w-full rounded-md border-4 border-gray-800">
            {faqData?.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === index}
                onClick={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="pt-4 text-center">
          <p className="text-xl text-slate-800 font-semibold mb-4">
            Can't find the answer you're looking for?
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(252, 211, 77, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => console.log("Navigate to Contact Page")}
            className="px-8 py-3 bg-yellow-500 text-gray-900 font-bold rounded-full text-lg hover:bg-yellow-400 transition duration-300 transform flex items-center justify-center mx-auto"
          >
            <BiSupport className="w-5 h-5 mr-2" />
            Contact Our Support Team
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;
