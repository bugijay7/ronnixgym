import React from "react";
import { FaDumbbell, FaRunning, FaUserFriends, FaLeaf, FaBiking, FaSwimmer } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Strength Training",
      desc: "Build muscle and increase power with guided routines.",
      icon: <FaDumbbell className="text-5xl text-yellow-500 mx-auto mb-4" />,
      features: ["Weightlifting", "Resistance Machines", "Free Weights"],
    },
    {
      title: "Cardio Classes",
      desc: "Boost endurance and burn calories in dynamic sessions.",
      icon: <FaRunning className="text-5xl text-yellow-500 mx-auto mb-4" />,
      features: ["HIIT Workouts", "Treadmill Training", "Dance Cardio"],
    },
    {
      title: "Personal Training",
      desc: "Get tailored 1-on-1 coaching designed for your goals.",
      icon: <FaUserFriends className="text-5xl text-yellow-500 mx-auto mb-4" />,
      features: ["Custom Plans", "Progress Tracking", "Motivation & Support"],
    },
    {
      title: "Yoga & Flexibility",
      desc: "Enhance balance, mobility, and mindfulness.",
      icon: <FaLeaf className="text-5xl text-yellow-500 mx-auto mb-4" />,
      features: ["Yoga Classes", "Stretching", "Breathing Techniques"],
    },
    {
      title: "Cycling Studio",
      desc: "Push your limits with fun and intense cycling sessions.",
      icon: <FaBiking className="text-5xl text-yellow-500 mx-auto mb-4" />,
      features: ["Indoor Bikes", "Interval Training", "Music-Fueled Rides"],
    },
    {
      title: "Swimming & Aqua Fitness",
      desc: "Low-impact full-body workouts for all fitness levels.",
      icon: <FaSwimmer className="text-5xl text-yellow-500 mx-auto mb-4" />,
      features: ["Lap Swimming", "Aqua Aerobics", "Water Resistance Training"],
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-200 text-center px-6">
      <h2 className="text-4xl font-bold text-yellow-500 mb-10">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="card bg-black text-white shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="card-body">
              {service.icon}
              <h3 className="card-title text-yellow-500 mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.desc}</p>
              <ul className="text-left text-gray-400 mb-4 list-disc list-inside">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="btn bg-yellow-500 border-none text-black hover:bg-red-600 rounded-full px-4 py-2 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
