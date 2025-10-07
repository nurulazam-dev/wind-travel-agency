import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { MdPhoneInTalk } from "react-icons/md";
import { FaRegEnvelope, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import ContactCard from "./ContactCard";
import ContactFormInput from "./ContactFormInput";
import { RiLoader2Line } from "react-icons/ri";

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
    <div className="py-14 px-10 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <p className="text-center lg:text-base md:text-sm text-xs text-yellow-500 mb-2">
            CONTACT
          </p>
          <h2 className="text-center font-semibold lg:text-5xl md:text-4xl text-2xl text-slate-200">
            Get In Touch with Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-300 mb-4">
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
            className="lg:col-span-2 bg-slate-900 p-8 sm:p-10 rounded-xl shadow-xl border border-gray-300"
          >
            <h3 className="lg:text-3xl text-2xl font-bold text-gray-300 lg:mb-6 mb-3 text-center">
              Send Us a Message
            </h3>

            {isSent ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-gray-700 rounded-lg"
              >
                <FiSend className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
                <h4 className="text-2xl font-semibold text-slate-300">
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
                  <ContactFormInput
                    type="text"
                    placeholder="Your Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <ContactFormInput
                    type="email"
                    placeholder="Your Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <ContactFormInput
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
                  rows="4"
                  required
                  className="w-full p-4 bg-slate-800 text-gray-400 placeholder-gray-500 border border-gray-500 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200 resize-none"
                ></textarea>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0 10px 20px rgba(252, 211, 77, 0.4)",
                  }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full py-3 rounded-md text-lg font-bold transition duration-300 transform flex items-center justify-center ${
                    isSubmitting
                      ? "bg-yellow-800 cursor-not-allowed"
                      : "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <RiLoader2Line className="w-5 h-5 mr-2 animate-spin" />
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
