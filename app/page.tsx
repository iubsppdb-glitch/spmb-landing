import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Programs from "./components/Programs";
import Steps from "./components/Steps";
import Gallery from "./components/Gallery";
import VideoSection from "./components/VideoSection";
import Testimonials from "./components/Testimonials";
import InstagramSection from "./components/InstagramSection";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Benefits />
      <Programs />
      <Steps />
      <Gallery />
      <VideoSection />
      <Testimonials />
      <InstagramSection />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
