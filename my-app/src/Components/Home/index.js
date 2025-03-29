import React from 'react';
import backgroundVideo from '../../videos/background.mp4.mp4'; // Adjust path to your video
import   './styles.css';

const Home = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center'
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;