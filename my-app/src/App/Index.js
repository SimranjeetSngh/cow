import React ,{useState}from 'react'
import Header from '../Components/Header'
 import Slider from '../Components/Slider'
import About from '../Components/About'
import './styles.css';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';
import Features from '../Components/Features/Features';
import Team from '../Components/Team/Team';
const CowApp = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
    {loading ? (
   <Loader setLoading={setLoading}/>
    ): (
   <div className="app-container">
      <Header/>
      <div id="slider" style={{ height: '100vh', position: 'relative' }}>
        <Slider />
      </div>
      <div id = 'features' style={{ height: 'auto', paddingTop: '64px' }}>
      <Features/>
      </div>
      <div id="about" style={{ height: 'auto', backgroundColor: '#f0f0f0', }}>
        <About/>
        <Team/>
      </div>
      <div id="work" style={{ height: '100vh', backgroundColor: '#e0e0e0', paddingTop: '64px' }}>
        <h2>Work Section</h2>
        <p>This is the work section.</p>
      </div>
      <div id="contact" style={{ padding: '50px 20px',}}>
        <ContactUs />
      </div>
      <Footer />
    </div>
  )}
    </>
  )
}

export default CowApp
