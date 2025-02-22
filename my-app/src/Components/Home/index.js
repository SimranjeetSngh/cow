import React from 'react'
import  Image1  from '../../Images/Hp.jpg';
import './styles.css';

const Home=() =>{
  return (
    <div>
    <div className='image-container'>
<div
        className="homeImage"
        style={{width: '100%', height: '100%',}}
      >
        
        <img
  src={Image1} // Correct usage of imported image
  alt="homeImage"
  srcSet={`${Image1} 400w, ${Image1} 800w, ${Image1} 1200w`} // Use the same image for all sizes (or replace with different sizes if available)
  sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
  className="responsive-image"
  loading="lazy"
  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
/>
</div>
</div>
    </div>
  )
}
 export default Home