import { useState } from "react";
import { motion } from "framer-motion";

const ChevronUp = (props) => (
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
    <polyline points="18 15 12 9 6 15" />
  </svg>
);
const ChevronDown = (props) => (
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
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Mock Testimonial Data
const testimonials = [
  {
    quote:
      "WindTravels planned our dream honeymoon to Palawan. Every detail, from the private island transfer to the secluded resorts, was flawless. Truly world-class service!",
    name: "Lei Britz",
    title: "Laguna, Philippines",
    avatar: "https://placehold.co/100x100/A3E635/1F2937?text=LB", // Placeholder for Lei Britz
  },
  {
    quote:
      "The Premium package was worth every penny. Our dedicated travel assistant saved us hours of planning and gave us local insights we could never have found ourselves. Five stars!",
    name: "Sarah Chen",
    title: "New York, USA",
    avatar: "https://placehold.co/100x100/FACC15/1F2937?text=SC", // Placeholder for Sarah Chen
  },
  {
    quote:
      "I used WindTravels for a business trip to Tokyo. Fast, efficient, and they handled all my complex itinerary changes without a hitch. Highly recommend to any executive.",
    name: "Javier Lopez",
    title: "Madrid, Spain",
    avatar: "https://placehold.co/100x100/3B82F6/1F2937?text=JL", // Placeholder for Javier Lopez
  },
];

const TestimonialCard = ({ testimonial, isVisible, style }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute w-full p-8 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 transform"
      style={{
        ...style,
        backgroundColor: "white",
        color: "#111827",
      }}
    >
      {/* Quote Text */}
      <p className="text-lg leading-relaxed mb-4 italic">
        "{testimonial.quote}"
      </p>

      {/* Author Info */}
      <div>
        <p className="text-xl font-bold mb-1">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.title}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];
  const nextIndex = (currentIndex + 1) % testimonials.length;

  return (
    <div className="py-20 bg-gray-900 font-inter min-h-screen flex items-center justify-center p-4">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full">
        {/* Left Section: Headings and Navigation Dots */}
        <div className="md:sticky md:top-20 h-full md:h-auto">
          <p className="text-sm uppercase tracking-widest text-yellow-500 font-semibold mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
            What People Say About Us.
          </h2>
          <p className="text-gray-400 max-w-md mb-8">
            Hear from our satisfied travelers who trusted WindTravels to create
            their perfect journey.
          </p>

          {/* Navigation Dots (Styled like the image) */}
          <div className="flex space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-yellow-500 w-8"
                    : "bg-gray-700 hover:bg-yellow-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Testimonial Cards and Arrows */}
        <div className="relative h-[450px] flex items-center">
          {/* Testimonial Stacking Area */}
          <div className="w-full h-full relative max-w-md">
            {/* Next card subtly visible */}
            <TestimonialCard
              testimonial={testimonials[nextIndex]}
              isVisible={true}
              style={{
                zIndex: 5,
                top: "50px",
                right: "-30px",
                opacity: 0.4,
                transform: "scale(0.95)",
              }}
            />

            {/* Current Card */}
            <TestimonialCard
              testimonial={currentTestimonial}
              isVisible={true}
              style={{ zIndex: 10, top: "0", left: "0", transform: "scale(1)" }}
            />

            {/* Author Avatar  */}
            <div className="absolute -top-12 left-10 w-20 h-20 rounded-full overflow-hidden border-4 border-yellow-500 z-20">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/100x100/1F2937/FACC15?text=WT";
                }}
              />
            </div>

            {/* Navigation Arrows */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-30">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1, backgroundColor: "#D97706" }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-yellow-500 text-gray-900 rounded-full shadow-lg"
                aria-label="Previous Testimonial"
              >
                <ChevronUp className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1, backgroundColor: "#D97706" }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-yellow-500 text-gray-900 rounded-full shadow-lg"
                aria-label="Next Testimonial"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
