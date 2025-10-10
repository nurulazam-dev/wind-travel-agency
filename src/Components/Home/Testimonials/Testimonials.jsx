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
    <div className="mb-10 px-10 flex items-center justify-center text-slate-300">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full">
        {/* Left side: Headings and Navigation Dots */}
        <div className="md:sticky md:top-20 h-full md:h-auto">
          <p className="lg:text-base md:text-sm text-xs text-yellow-500 mb-2">
            TESTIMONIALS
          </p>
          <h2 className="font-bold lg:text-5xl md:text-4xl text-2xl text-slate-200 mb-4">
            What People Say <br /> About Us.
          </h2>
          <p className="text-[16px] leading-5 text-slate-400 max-w-md mb-8">
            Hear from our satisfied travelers who trusted MNA-Travels to create
            their perfect journey.
          </p>

          {/* Navigation Dots */}
          <div className="flex space-x-2 mt-4">
            {testimonialsData?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-yellow-500 w-8"
                    : "bg-gray-400 hover:bg-yellow-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right side: Testimonial Cards and Arrows */}
        <div className="relative h-[320px] flex items-center">
          {/* Testimonial */}
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
            <div className="absolute -top-10 left-6 w-20 h-20 rounded-full overflow-hidden border-4 border-yellow-500 z-20">
              <img
                src={currentTestimonial?.avatar}
                alt={currentTestimonial?.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Navigation Arrows */}
            <div className="absolute right-2 top-[52%] transform -translate-y-1/2 flex flex-col space-y-2 z-30">
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
