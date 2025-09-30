import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="hover:text-yellow-500"><FaFacebook size={24} /></a>
        <a href="#" className="hover:text-yellow-500"><FaTwitter size={24} /></a>
        <a href="#" className="hover:text-yellow-500"><FaInstagram size={24} /></a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Ronnix Fitness Center. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
