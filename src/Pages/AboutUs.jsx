import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { keyDifferencesData, missionVisionData } from "../Assets/data/dataBank";

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
      {/* Introduction */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="max-w-6xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          Your Journey, Elevated.
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-yellow-500 mt-2">
          The story behind WindTravels: Where expertise meets adventure.
        </h2>
        <p className="mt-3 text-lg text-gray-400 max-w-3xl mx-auto">
          Founded in 2015 on the principle that travel should be effortless,
          enriching, and unforgettable, **WindTravels** has grown from a local
          startup into a global leader in personalized adventure travel. We
          believe the best journeys are carefully curated, thoughtfully
          supported, and tailored precisely to your dreams.
        </p>
      </motion.div>

      {/* Mission and Vision Section */}
      <div className="max-w-6xl mx-auto mt-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {missionVisionData?.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-gray-900 rounded-2xl shadow-xl border border-gray-700 hover:shadow-yellow-500/10 transition duration-300"
            >
              <div className="flex justify-center items-center gap-3">
                {item?.icon}
                <h3 className="text-3xl font-bold text-white mb-3">
                  {item?.title}
                </h3>
              </div>
              <p className="text-gray-400 text-lg text-justify">
                {item?.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Difference */}
      <div className="max-w-6xl mx-auto mt-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-white mb-6"
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
          {keyDifferencesData?.map((diff, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(252, 211, 77, 0.2)",
              }}
              className="p-6 bg-gray-900 rounded-xl shadow-lg border-t-4 border-yellow-500/50 hover:border-yellow-500 transition duration-300 transform flex flex-col items-center text-center"
            >
              {diff?.icon}
              <h3 className="text-xl font-bold text-white mb-2">
                {diff?.title}
              </h3>
              <p className="text-gray-400 text-sm">{diff?.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Our Milestones */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-6xl mx-auto mt-10 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700"
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

      {/* Team CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto py-8 text-center border-gray-700"
      >
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
