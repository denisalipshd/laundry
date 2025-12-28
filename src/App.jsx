import AreaLayanan from "./components/AreaLayanan";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OrderStep from "./components/OrderStep";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import WhatsApp from "./components/WhatsApp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <OrderStep />
      <Testimonial />
      <AreaLayanan />
      <Faq />
      <Footer />
      <WhatsApp />
    </div>
  );
}

export default App;
