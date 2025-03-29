import React, { useEffect, useState } from "react";
import "flowbite/dist/flowbite.min.js";
import { initFlowbite } from "flowbite";

const accomplishments = [
  {
    id: 1,
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQEN-AtUPP5iUg/feedshare-shrink_1280/feedshare-shrink_1280/0/1727674939919?e=1744848000&v=beta&t=adkYUbINlC4D6_M-ldjPSFN8G7JfaF7JbtGLIYl4j1I",
    title: "Hackathon Winner 🏆",
    description:
      "Won the Bharth Tech League Hackathon 2024 featuring Creating innovative solutions with Artificial Intelligence in Agriculture",
  },
  {
    id: 2,
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQFk0L-qKlO9BQ/feedshare-shrink_800/feedshare-shrink_800/0/1713281211493?e=1744848000&v=beta&t=b-9weZCOP-EdmCJM91yWg5bH0eJO_n1mY3okKolwDi0",
    title: "Amazon PartyRock Generative AI Hackathon",
    description:
      "Rewarded with $250 AWS Credits for an Eligible Project and Outstanding Blogpost",
  },
  {
    id: 3,
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQEjvzI2j5ey4g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1731641091480?e=1743847200&v=beta&t=sJz9tfuVlY4G8eD079dIEh9T97lrY_d3FB-WTr-sg_g",
    title: "GSSOC Open Source Contributor 2024",
    description:
      "Successfully contributed to open-source projects with 3+ PRs merged",
  },
  {
    id: 4,
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQEXz761WibBeg/profile-treasury-image-shrink_800_800/B56ZUxg8crGQAY-/0/1740292476941?e=1743847200&v=beta&t=ezgVkGsvpPmeLpH8k_nElAtVD6_VMRiw_zdWAHamgFw",
    title: "Academic Excellence Award",
    description:
      "Received Academic Excellence Certificate from The Head OF CS-AI and Dean of SR University",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    initFlowbite(); // Initialize Flowbite components

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === accomplishments.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div
        id="default-carousel"
        className="relative rounded-lg overflow-hidden shadow-lg"
      >
        {/* Carousel wrapper */}
        <div className="relative h-80 md:h-96">
          {accomplishments.map((accomplishment, index) => (
            <div
              key={accomplishment.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={accomplishment.image}
                className="object-cover w-full h-full"
                alt={accomplishment.title}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 p-5 rounded-lg text-center">
                <h3 className="text-xl font-bold">{accomplishment.title}</h3>
                <p className="text-sm mt-2">{accomplishment.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider controls */}
        <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
          {accomplishments.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === activeIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

        {/* Previous button */}
        <button
          onClick={() =>
            setActiveIndex((prevIndex) =>
              prevIndex === 0 ? accomplishments.length - 1 : prevIndex - 1
            )
          }
          className="absolute top-1/2 left-3 z-40 flex items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={() =>
            setActiveIndex((prevIndex) =>
              prevIndex === accomplishments.length - 1 ? 0 : prevIndex + 1
            )
          }
          className="absolute top-1/2 right-3 z-40 flex items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
