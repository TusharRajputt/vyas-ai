import Analytics from "./Analytics";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
const MainBody = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      {/* <Cards /> */}
      <Footer />
    </div>
  );
};

export default MainBody;
