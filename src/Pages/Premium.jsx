import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { premiumFeaturesData, pricingPlansData } from "../Assets/data/dataBank";

const Premium = () => {
  return (
    <div className="bg-gray-800 text-gray-300 p-4 sm:p-8 font-inter">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto py-4 text-center"
      >
        <h1 className="text-sm font-semibold uppercase tracking-widest text-yellow-400 mb-2">
          WindTravels Premium
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          Travel Smarter, Not Harder.
        </h2>
        <p className="mt-2 text-xl text-gray-400 max-w-2xl mx-auto">
          Unlock exclusive benefits, priority support, and save money with the
          ultimate travel subscription built for the modern adventurer.
        </p>
      </motion.div>

      {/* Feature Highlights Section */}
      <div className="max-w-6xl mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {premiumFeaturesData?.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: (i) => ({
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: i * 0.15,
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }),
              }}
              className="p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-700/50 hover:border-yellow-500 transition duration-300"
            >
              <div className="flex items-center justify-center mb-2">
                {feature?.Icon}
                <h3 className="text-lg font-bold text-white">
                  {feature?.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm">{feature?.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Tiers Section */}
      <div className="max-w-5xl mx-auto py-6">
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Choose Your Plan
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pricingPlansData?.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`p-8 rounded-2xl shadow-2xl flex flex-col transition-all duration-500 ${
                plan?.isMostPopular
                  ? "bg-gray-900 border-2 border-yellow-500 relative"
                  : "bg-gray-900 border-2 border-gray-700"
              }`}
            >
              {plan?.isMostPopular && (
                <div className="absolute top-0 right-0 -mt-4 -mr-4 px-4 py-1 bg-yellow-500 text-gray-900 text-sm font-bold rounded-full shadow-lg transform rotate-6">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-extrabold text-white mb-2">
                {plan?.name}
              </h3>
              <p className="text-gray-400 mb-6">{plan?.description}</p>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-extrabold text-white">
                  ${plan?.price}
                </span>
                <span className="text-xl font-medium text-gray-500 ml-2">
                  /{plan?.interval}
                </span>
              </div>

              <ul className="space-y-4 flex-grow mb-8">
                {plan?.features?.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-start">
                    <FiCheckCircle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/checkout/${plan.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-full text-lg font-bold transition duration-300 ${
                    plan?.isMostPopular
                      ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
                >
                  Start {plan?.name}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto mt-6 py-4 text-center border-t border-gray-700">
        <p className="text-lg text-gray-400 mb-4">
          Have questions about which plan is right for you?
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-full hover:bg-yellow-500 hover:text-gray-900 transition duration-300 transform"
          >
            Contact Sales
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Premium;
