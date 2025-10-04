import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { MdPhoneInTalk } from "react-icons/md";
import { FaRegEnvelope, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

// Reusable Contact Info Card
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

// Form Input Component
const FormInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  required = true,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    required={required}
    className="w-full p-4 bg-gray-700 text-white placeholder-gray-400 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200"
  />
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      console.log("Form Submitted:", formData);
    }, 2000);
  };

  return (
    <div className="py-20 font-inter min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
            Get In Touch with Us
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-md">
            We're here to answer any questions you have about booking,
            customizing your trip, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Direct Contact
            </h3>

            <ContactCard
              Icon={MdPhoneInTalk}
              title="Call Us"
              content="+1 (800) 555-WIND (9463)"
              isLink={true}
            />

            <ContactCard
              Icon={FaRegEnvelope}
              title="Email Us"
              content="support@windtravels.com"
              isLink={true}
            />

            <ContactCard
              Icon={FaMapMarkerAlt}
              title="Visit Our Office (HQ)"
              content="123 Globe Trotter Ave, Suite 400, Travel City, CA 90210"
            />

            <ContactCard
              Icon={FaRegClock}
              title="Business Hours"
              content="Mon - Fri: 9:00 AM - 5:00 PM (24/7 emergency line available)"
            />
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-700"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Send Us a Message
            </h3>

            {isSent ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-gray-700 rounded-lg"
              >
                <FiSend className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
                <h4 className="text-2xl font-semibold text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-400 mt-2">
                  Thank you for reaching out. We will respond to **
                  {formData.email}** within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormInput
                    type="text"
                    placeholder="Your Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <FormInput
                    type="email"
                    placeholder="Your Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <FormInput
                  type="text"
                  placeholder="Subject or Trip Inquiry Reference"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <textarea
                  placeholder="Your Message (Max 500 characters)"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={500}
                  rows="6"
                  required
                  className="w-full p-4 bg-gray-700 text-white placeholder-gray-400 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200 resize-none"
                ></textarea>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0 10px 20px rgba(252, 211, 77, 0.4)",
                  }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full py-3 rounded-xl text-lg font-bold transition duration-300 transform flex items-center justify-center ${
                    isSubmitting
                      ? "bg-yellow-800 cursor-not-allowed"
                      : "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
