import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial, isVisible, style }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute w-full p-8 pb-4 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 transform bg-slate-900 text-slate-300"
      style={{
        ...style,
      }}
    >
      <p className="text-lg leading-6 text-justify my-3 italic text-slate-400">
        "{testimonial?.quote}"
      </p>
      <div>
        <p className="text-xl font-bold">{testimonial?.name}</p>
        <p className="text-sm text-gray-500">{testimonial?.title}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
