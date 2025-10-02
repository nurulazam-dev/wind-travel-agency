import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGlobeAsia } from "react-icons/fa";

const Anchor = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="3" />
    <line x1="12" x2="12" y1="22" y2="8" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
  </svg>
);
const Zap = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const Shield = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const Heart = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.15.49-4.5 2-1.35-1.51-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);
const Compass = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
);
const Users = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const missionVision = [
  {
    title: "Our Mission",
    icon: Anchor,
    description:
      "To connect people with the world's most incredible destinations through seamless booking, expert guidance, and personalized itineraries.",
  },
  {
    title: "Our Vision",
    icon: Zap,
    description:
      "To be the most trusted and innovative travel platform, inspiring a billion journeys and promoting sustainable, responsible tourism worldwide.",
  },
];

const keyDifferences = [
  {
    title: "Expert Local Guides",
    icon: Compass,
    description:
      "We partner only with verified local experts who offer authentic, immersive experiences.",
  },
  {
    title: "Price Match Guarantee",
    icon: Shield,
    description:
      "Find a lower price? We'll match it and give you an extra discount on your next trip.",
  },
  {
    title: "Customer-First Philosophy",
    icon: Heart,
    description:
      "Our dedicated support team works 24/7 to ensure your trip is perfect from start to finish.",
  },
];

const AboutUs = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-800 text-gray-300 p-4 sm:p-8 font-inter">
      {/* 1. Hero / Introduction */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="max-w-6xl mx-auto py-6 text-center border-b border-gray-800"
      >
        <FaGlobeAsia className="w-16 h-16 mx-auto text-yellow-400 mb-4 animate-spin-slow" />
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Your Journey, Elevated.
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-yellow-500 mt-4">
          The story behind WindTravels: Where expertise meets adventure.
        </h2>
        <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto">
          Founded in 2015 on the principle that travel should be effortless,
          enriching, and unforgettable, **WindTravels** has grown from a local
          startup into a global leader in personalized adventure travel. We
          believe the best journeys are carefully curated, thoughtfully
          supported, and tailored precisely to your dreams.
        </p>
      </motion.div>

      {/* 2. Mission and Vision Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {missionVision.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-gray-900 rounded-2xl shadow-xl border border-gray-700 hover:shadow-yellow-500/10 transition duration-300"
            >
              <item.icon className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-lg">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3. The WindTravels Difference */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-white mb-10"
        >
          What Makes WindTravels Different?
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {keyDifferences.map((diff, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(252, 211, 77, 0.2)",
              }}
              className="p-6 bg-gray-900 rounded-xl shadow-lg border-t-4 border-yellow-500/50 hover:border-yellow-500 transition duration-300 transform flex flex-col items-center text-center"
            >
              <diff.icon className="w-8 h-8 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">
                {diff.title}
              </h3>
              <p className="text-gray-400 text-sm">{diff.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 4. Our Story / Milestones */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-4xl mx-auto mt-20 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700"
      >
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Our Journey So Far
        </h2>
        <p className="text-gray-400 mb-6">
          We started with a simple desktop app and a passion for hiking. Today,
          WindTravels serves millions of travelers, crafting experiences on all
          seven continents.
        </p>
        <ul className="space-y-4 text-left text-gray-300">
          <li className="flex items-start">
            <span className="text-yellow-500 font-bold mr-4 flex-shrink-0">
              2015:
            </span>
            <span>
              Foundation of WindTravels in a small Chicago office, specializing
              in North American road trips.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 font-bold mr-4 flex-shrink-0">
              2018:
            </span>
            <span>
              Launched our mobile app and expanded offerings to include luxury
              and budget packages in Europe and Asia.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 font-bold mr-4 flex-shrink-0">
              2022:
            </span>
            <span>
              Pioneered "Carbon-Neutral Travel" initiative, offsetting 100% of
              all flights booked through our platform.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 font-bold mr-4 flex-shrink-0">
              Today:
            </span>
            <span>
              We manage over 10,000 unique routes, offering personalized
              planning and 24/7 global support.
            </span>
          </li>
        </ul>
      </motion.div>

      {/* 5. Team CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto mt-20 py-12 text-center border-t border-gray-700"
      >
        <Users className="w-10 h-10 mx-auto text-yellow-500 mb-4" />
        <h3 className="text-3xl font-extrabold text-white mb-4">
          Ready to Meet the Experts?
        </h3>
        <p className="text-lg text-gray-400 mb-8">
          Our team of experienced travelers and dedicated support staff are
          ready to turn your next dream into reality.
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-yellow-500 text-gray-900 font-bold rounded-full text-lg shadow-lg hover:bg-yellow-400 transition duration-300 transform"
          >
            Contact Our Advisors Today
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUs;
