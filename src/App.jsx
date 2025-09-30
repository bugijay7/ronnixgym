import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trainers from "./components/Trainers";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="font-sans bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
