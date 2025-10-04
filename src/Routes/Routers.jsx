import { Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Premium from "../Pages/Premium";
import Blog from "../Pages/Blog";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import BookNow from "../Pages/BookNow";
import Contact from "../Components/Contact/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/premium" element={<Premium />} />
      <Route path="/book-now" element={<BookNow />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
