import React, { useEffect, useState } from 'react';
import './styles.css'; // Import CSS for styling
 import  Image1  from '../../Images/0.jpg';
 import  Image3 from '../../Images/2.jpg';
 import  Image4 from '../../Images/3.png';
 import  Image5 from '../../Images/4.jpg';

const Slider = () => {
  const images = [
   Image1, // Replace with your image paths
    Image3,
    Image4,
    Image5
    // Add more images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="slider">
      <div
        className="slider-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
        <div className="wave">
        <svg viewBox="0 0 1440 320">
          <path d="M0,128L30,138.7C60,149,120,171,180,170.7C240,171,300,149,360,144C420,139,480,149,540,160C600,171,660,181,720,186.7C780,192,840,192,900,186.7C960,181,1020,171,1080,160C1140,149,1200,138,1260,128C1320,118,1380,108,1410,103.3L1440,98L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320 ,0,320L0,320Z" />
        </svg>
      </div>
      </div>
      
    </div>
  );
};

export default Slider;