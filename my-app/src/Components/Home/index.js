import React from 'react'
import  Image1  from '../../Images/Hp.jpg';

const Home=() =>{
  return (
    <div>
<div
        className="homeImage"
        style={{width: '100%', height: '100%',}}
      >
        
           <img src={Image1} alt={`homeImage`} 
           style={{width: '100%', height: '728px',}}/>
</div>
    </div>
  )
}
 export default Home