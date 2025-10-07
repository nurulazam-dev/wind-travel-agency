import { useState } from "react";
import {
  FaFacebook,
  FaHouseChimney,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { footerInfo } from "../../Assets/data/dataBank";

const socialIcons = [
  {
    Icon: <FaFacebook />,
    color: "text-blue-500",
  },
  {
    Icon: <FaInstagram />,
    color: "text-pink-500",
  },
  {
    Icon: <FaTwitter />,
    color: "text-sky-400",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 border-b border-gray-700 pb-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1 space-y-4"
          >
            <Link to="/" className="flex items-center text-white space-x-2">
              <FaHouseChimney className="w-8 h-8 text-yellow-400" />
              <p className="text-3xl font-extrabold tracking-tight">
                WindTravels
              </p>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Book your trip in minutes and enjoy full control over your travel
              itinerary. Explore the world with confidence.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {socialIcons.map(({ Icon, color }, index) => (
                <motion.button
                  key={index}
                  whileHover="hover"
                  className={`p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out ${color}`}
                >
                  {Icon}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Link Sections */}
          {footerInfo?.map((data, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h5 className="text-xl font-bold text-white mb-4">
                {data.title}
              </h5>
              <div className="flex flex-col space-y-2">
                {data.links.map((link, linkIndex) => (
                  <motion.div
                    key={linkIndex}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                      hover: {
                        x: 5,
                        color: "#FCD34D",
                        transition: { duration: 0.15 },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: 0.1 * linkIndex }}
                    className="inline-block"
                  >
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-base"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h5 className="text-xl font-bold text-white">Discover our app</h5>
            <p className="text-sm text-gray-400">
              Download for exclusive deals and a seamless booking experience.
            </p>

            {/* App Store Links */}
            <div className="flex flex-col space-y-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/app-store"
                className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition"
              >
                <FaAppStoreIos className="w-6 h-6 text-white" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/google-play"
                className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition"
              >
                <FaGooglePlay className="w-6 h-6 text-white" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="text-sm font-semibold text-white">
                    Google Play
                  </p>
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Newsletter */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} WindTravels. All rights reserved.
          </p>

          {/* Newsletter Signup */}
          <div className="flex w-full md:w-auto">
            <motion.input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="p-3 w-full md:w-72 rounded-l-lg border-2 border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-yellow-500 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center p-3 bg-yellow-500 text-gray-900 font-bold rounded-r-lg hover:bg-yellow-400 transition"
              onClick={() => console.log("Subscribed:", email)}
            >
              <IoMdMail className="w-5 h-5 mr-1" />
              Sign Up
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
