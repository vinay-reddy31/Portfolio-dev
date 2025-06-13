import Spline from "@splinetool/react-spline";
import React, { useState } from "react";
import "./index.css";

const Footer = () => {
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!consent) {
      setError("⚠️ Please check the box to proceed.");
      return;
    }

    setError("");
    // proceed with sending form
    alert("Form submitted!");
  };
  return (
    <div className="contact-container bg-gray-900 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
      <p className="text-center text-gray-300 mb-8">
        Feel free to reach out to me for any queries or opportunities.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="hidden md:block w-99 h-99 rounded-full shadow-lg overflow-hidden">
          <div className="w-100 h-100">
            <Spline scene="https://prod.spline.design/47HLfFiA6547mDu9/scene.splinecode" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Email Me</h3>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 mb-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 mb-3 bg-gray-700 rounded h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="consent"
              className="mr-2"
              onChange={(e) => setConsent(e.target.checked)}
            />
            <label htmlFor="consent" className="text-sm text-gray-300">
              I agree to be contacted via email
            </label>
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-semibold transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-8">
        {[
          {
            name: "LinkedIn",
            img: "https://img.icons8.com/?size=100&id=13930&format=png",
          },
          {
            name: "Facebook",
            img: "https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png",
          },
          {
            name: "Twitter",
            img: "https://i.pinimg.com/originals/ed/54/51/ed5451961869a97b434b185f2fe064cc.webp",
          },
          {
            name: "Instagram",
            img: "https://th.bing.com/th/id/OIP.ZPLHcofWB-w5X6z8GZ3IngHaHa?rs=1&pid=ImgDetMain",
          },
        ].map((social, index) => (
          <button
            key={index}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            <img src={social.img} alt={social.name} className="w-6 h-6" />
            <span className="hidden md:block">{social.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Footer;
