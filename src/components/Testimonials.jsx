import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const feedbacks = [
    { name: "Alice", text: "The trainers are amazing! I’ve never felt more motivated.", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Brian", text: "The equipment is top-notch and the atmosphere is great.", img: "https://randomuser.me/api/portraits/men/46.jpg" },
    { name: "Cynthia", text: "Ronnix Fitness helped me achieve my fitness goals.", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  ];

  return (
    <section className="py-20 bg-gray-200 text-white px-6">
      <h2 className="text-4xl font-extrabold mb-14 text-center text-red-500 tracking-wide uppercase">
        What Our Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {feedbacks.map((fb, idx) => (
          <div
            key={idx}
            className="bg-black rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-red-600/50 transition-all duration-300"
          >
            <FaQuoteLeft className="text-red-500 text-3xl mb-4" />
            <p className="text-lg italic leading-relaxed text-gray-200">"{fb.text}"</p>
            
            <div className="mt-6 flex flex-col items-center">
              <img
                src={fb.img}
                alt={fb.name}
                className="w-16 h-16 rounded-full border-2 border-red-500 object-cover shadow-md"
              />
              <h4 className="mt-4 font-bold text-yellow-400 text-lg">- {fb.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
