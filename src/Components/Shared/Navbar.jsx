import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import navLogo from "../../Assets/images/Icons/footerIcon.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/aboutUs", label: "About Us" },
  { to: "/premium", label: "Premium" },
  { to: "/blogs", label: "Blogs" },
  { to: "/login", label: "Login" },
];

const languages = [
  { code: "EN", label: "English" },
  { code: "BE", label: "Bengali" },
  { code: "HI", label: "Hindi" },
  { code: "AR", label: "Arabic" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={navLogo} alt="WindTravels Logo" className="w-10 h-10" />
          <span className="text-xl lg:text-2xl font-bold text-white tracking-wide">
            WindTravels
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-lg font-medium px-3 py-2 rounded transition-all duration-200 ${
                    isActive
                      ? "bg-yellow-300 text-blue-900"
                      : "text-white hover:bg-blue-800 hover:text-yellow-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <div className="relative group">
              <button
                className="flex items-center gap-2 px-3 py-2 rounded text-white hover:bg-blue-800 transition"
                aria-label="Select Language"
              >
                <FaGlobe className="text-yellow-300" />
                {selectedLang}
              </button>
              <ul className="absolute left-0 mt-2 bg-white rounded shadow-lg min-w-[100px] hidden group-hover:block z-10">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      className={`w-full text-left px-4 py-2 hover:bg-blue-100 text-blue-900`}
                      onClick={() => setSelectedLang(lang.code)}
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link
              to="/book-now"
              className="bg-yellow-300 text-blue-900 font-semibold px-5 py-2 rounded-full shadow hover:bg-yellow-400 transition flex items-center gap-2"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <FaTimes className="text-3xl text-yellow-300" />
          ) : (
            <FaBars className="text-3xl text-white" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-72 h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 shadow-lg z-50 flex flex-col pt-24 px-6"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block text-lg font-medium px-3 py-2 rounded transition-all duration-200 ${
                        isActive
                          ? "bg-yellow-300 text-blue-900"
                          : "text-white hover:bg-blue-800 hover:text-yellow-300"
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <div className="flex items-center gap-2 mt-2">
                  <FaGlobe className="text-yellow-300" />
                  <select
                    value={selectedLang}
                    onChange={(e) => setSelectedLang(e.target.value)}
                    className="bg-blue-800 text-white rounded px-2 py-1 focus:outline-none"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.label}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
              <li>
                <Link
                  to="/book"
                  className="bg-yellow-300 text-blue-900 font-semibold px-5 py-2 rounded-full shadow hover:bg-yellow-400 transition flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
