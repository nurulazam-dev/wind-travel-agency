import { motion } from "framer-motion";

const ContactCard = ({ Icon, title, content, isLink = false }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className="flex items-start p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-500 transition duration-300"
  >
    <Icon className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1 mr-4" />
    <div>
      <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
      {isLink ? (
        <a
          href={title === "Email Us" ? `mailto:${content}` : `tel:${content}`}
          className="text-gray-300 hover:text-yellow-400 transition"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-300">{content}</p>
      )}
    </div>
  </motion.div>
);

export default ContactCard;
