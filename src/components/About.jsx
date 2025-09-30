import React from "react";
import aboutImg from "../assets/about-gym.jpg"; 

function About() {
  return (
    <section id="about" className="py-16 bg-gray-200 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="Inside Ronnix Fitness Center"
            className="rounded-xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            At <span className="font-semibold text-red-600">Ronnix Fitness
            Center</span>, we believe fitness is not just about lifting
            weights—it’s about building a healthier, stronger, and more confident
            version of yourself. Located in the heart of Zambezi, our facility
            provides a welcoming environment for beginners and seasoned athletes
            alike.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            We offer state-of-the-art equipment, energetic group classes, and
            personalized training programs designed to fit your lifestyle. From
            strength training and cardio to yoga and functional fitness, we cater
            to all fitness levels and goals.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            With certified trainers, a supportive community, and a commitment to
            excellence, Ronnix Fitness Center is your partner in achieving
            long-lasting results. Join us today and take the first step toward a
            healthier you!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
