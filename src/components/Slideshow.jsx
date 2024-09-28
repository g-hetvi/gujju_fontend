import React, { useState, useEffect } from 'react';

// Import images
import image1 from '../image/img1.jpeg';
import image2 from '../image/img6.jpg';
import image3 from '../image/img2.jpeg'; 

// Array of images with text
const images = [
  { src: image1, text: "where Every Bite Tells a Story " },
  { src: image2, text: "Where Every Meal Is a Celebration" },
  { src: image3, text: "where Gujarat Meets Your Plate" } 
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Set up automatic slideshow
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Slideshow image */}
      <img
        src={images[currentIndex].src}
        alt="Slideshow"
        className="w-full h-full object-cover transition-transform duration-1000"
      />
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold mb-4">Welcome to Gujju's Desi Swad</h1>
        <p className="text-lg mb-2">
          {images[currentIndex].text}
        </p>
        <p className="text-lg">
         "From Our Kitchen To Your Table ,Authentic Gujarati Meals Made With Love and Tradition"
        </p>
      </div>
    </div>
  );
};

export default Slideshow;
