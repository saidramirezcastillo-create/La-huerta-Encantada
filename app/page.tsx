import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import MenuPremium from "../components/MenuPremium";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";
import Testimonials from "../components/Testimonials";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";
import CartWidget from "../components/cart/CartWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />

      {/* SOLO FAVORITOS */}
      <MenuPremium />

      <Events />
      <Gallery />
      <VideoSection />
      <Testimonials />
      <Reservation />
      <Footer />

      <CartWidget />
    </>
  );
}