import { Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Premium from "../Pages/Premium";
import Blog from "../Pages/Blog";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/premium" element={<Premium />} />
      <Route path="/blogs" element={<Blog />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
