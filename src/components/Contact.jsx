import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="py-20 bg-gray-200 text-white px-6">
      <h2 className="text-4xl font-extrabold text-black text-center mb-12 tracking-wide uppercase">
        Get In Touch
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg border border-gray-300">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full mb-4 rounded-lg border-gray-400 focus:outline-none focus:border-red-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full mb-4 rounded-lg border-gray-400 focus:outline-none focus:border-red-600"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full mb-6 rounded-lg border-gray-400 focus:outline-none focus:border-red-600"
            rows="4"
          />
          <button className="btn w-full bg-yellow-500 border-none text-black font-bold hover:bg-red-600 hover:text-white rounded-full px-6 transition-all duration-300">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6 bg-black text-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-yellow-500 text-xl" />
            <p className="text-lg"><strong>Phone:</strong> +260 123 456 789</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-500 text-xl" />
            <p className="text-lg"><strong>Email:</strong> info@ronnixfitness.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-yellow-500 text-xl" />
            <p className="text-lg"><strong>Location:</strong> Zambezi Town Center</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
