import Contact from "../Components/Contact/Contact";
import BookSteps from "../Components/Home/BookSteps";
import Category from "../Components/Home/Category";
import Destinations from "../Components/Home/Destinations";
import FAQ from "../Components/Home/FAQ/FAQ";
import Hero from "../Components/Home/Hero";
import Subscribe from "../Components/Home/Subscribe";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import TrustedCo from "../Components/Home/TrustedCo";

const Home = () => {
  return (
    <div className="bg-gray-800 text-gray-300">
      <Hero />
      <Category />
      <Destinations />
      <BookSteps />
      <Testimonials />
      <TrustedCo />
      <FAQ />
      <Subscribe />
      <Contact />
    </div>
  );
};

export default Home;
