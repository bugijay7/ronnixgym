import React from "react";
import heroImg from "../assets/gym-hero.jpg"; 

function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center px-6"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/1570 to-red-600/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-3xl md:text-8xl font-bold mb-4">
          Ronnix Fitness Center
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Transform your body, mind, and lifestyle with us in Zambezi.
        </p>
        <button className="btn bg-yellow-500 border-none text-black hover:bg-red-600 rounded-full px-6 py-3 text-lg font-semibold">
          Join Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
