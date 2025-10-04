import { motion } from "framer-motion";

const ContactCard = ({ Icon, title, content, isLink = false }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className="flex items-start px-6 py-4 bg-slate-100 rounded-xl border border-gray-300 shadow-xl hover:border-blue-800 transition duration-300"
  >
    <Icon className="w-8 h-8 text-slate-800 flex-shrink-0 mt-1 mr-4" />
    <div>
      <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
      {isLink ? (
        <a
          href={title === "Email Us" ? `mailto:${content}` : `tel:${content}`}
          className="text-gray-700 hover:text-blue-800 transition"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-700">{content}</p>
      )}
    </div>
  </motion.div>
);

export default ContactCard;
