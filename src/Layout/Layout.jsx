import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import Routers from "../Routes/Routers";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-12">
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
