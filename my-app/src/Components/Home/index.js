import React from 'react';
import backgroundVideo from '../../videos/background.mp4.mp4'; // Adjust path to your video
import   './styles.css';

const Home = () => {
  return (
    <div className="video-container">
    <video autoPlay loop muted playsInline>
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  </div>
  );
};

export default Home;