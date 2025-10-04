import BookSteps from "../Components/Home/BookSteps";
import Category from "../Components/Home/Category";
import Destinations from "../Components/Home/Destinations";
import Hero from "../Components/Home/Hero";
import Subscribe from "../Components/Home/Subscribe";
import Testimonials from "../Components/Home/Testimonials";
import TrustedCo from "../Components/Home/TrustedCo";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Destinations />
      <BookSteps />
      <Testimonials />
      <TrustedCo />
      <Subscribe />
    </>
  );
};

export default Home;
