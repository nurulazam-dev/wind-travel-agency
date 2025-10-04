import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { testimonialsData } from "../../../Assets/data/dataBank";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData?.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData?.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];
  const nextIndex = (currentIndex + 1) % testimonialsData?.length;

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
            {testimonialsData?.map((_, index) => (
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
              testimonial={testimonialsData[nextIndex]}
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
            <div className="absolute right-2 top-[40%] transform -translate-y-1/2 flex flex-col space-y-2 z-30">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1, backgroundColor: "#D97706" }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-yellow-500 text-gray-900 rounded-full shadow-lg"
                aria-label="Previous Testimonial"
              >
                <FaChevronUp className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1, backgroundColor: "#D97706" }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-yellow-500 text-gray-900 rounded-full shadow-lg"
                aria-label="Next Testimonial"
              >
                <FaChevronDown className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
