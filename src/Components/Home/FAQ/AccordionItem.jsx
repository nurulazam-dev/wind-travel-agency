import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div className="border-b border-gray-400 overflow-hidden cursor-pointer">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-4 px-6 text-left bg-gray-900 transition duration-300"
      >
        <span
          className={`text-lg font-semibold ${
            isOpen ? "text-yellow-500" : "text-slate-400"
          }`}
        >
          {question}
        </span>
        <FaChevronDown
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen
              ? "transform rotate-180 text-yellow-500"
              : "transform rotate-0 text-slate-400"
          }`}
        />
      </button>

      {/* Answer */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="px-6 text-gray-400 pb-[2px] overflow-hidden bg-slate-800"
        style={{ height: isOpen ? "auto" : 0 }}
      >
        <div className="py-2">
          <p>{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AccordionItem;
