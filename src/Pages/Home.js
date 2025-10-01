import Footer from "../Components/Shared/Footer";
import BookSteps from "../Components/Home/BookSteps";
import Category from "../Components/Home/Category";
import Destinations from "../Components/Home/Destinations";
import Hero from "../Components/Home/Hero";
import Subscribe from "../Components/Home/Subscribe";
import TrustedCo from "../Components/Home/TrustedCo";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Destinations />
      <BookSteps />
      <TrustedCo />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
