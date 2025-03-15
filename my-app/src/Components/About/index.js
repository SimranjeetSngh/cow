import React, { useState } from "react";
import "./styles.css";
import desktopAbout1 from "../../Images/About us 1.png"; // Desktop version
import desktopAbout2 from "../../Images/About us 2.png";
import desktopAbout3 from "../../Images/About us 3.png";
import brandImage from "../../Images/brands/COW Design-05.jpg";
import { Dialog, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function About() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isMediaDialogOpen, setMediaDialog] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  const openMediaDialog = () => {
    setMediaDialog(true)
  }
 const closeMediaDialog = () => {
   setMediaDialog(false)
 }
  return (
    <div className="about-container">
      {/* Section 1 */}
      <section className="about-section">
        <picture>
          <source  srcset={desktopAbout1} />
          <img src={desktopAbout1} alt="Section 1 Background" className="background-image" />
        </picture>
        <div className="overlay">
          <p>
            We are not an AD agency, <br /> but an ADD agency that adds long-term value 
            <br />to elevate your brands to greater heights.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="about-section">
        <picture>
          <source  srcset={desktopAbout2} />
          <img src={desktopAbout2} alt="Section 2 Background" className="background-image" />
        </picture>
        <div className="overlay">
          <p>
            Boosting your businessis our business.<br /> Because nothing the cow produces ever go to waste,
            <br />even the waste is precious manure.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="about-section about-section-custom">
        <picture>
          <source  srcset={desktopAbout3} />
          <img src={desktopAbout3} alt="Section 3 Background" className="background-image" />
        </picture>
        <div className="custom-overlay">
          <h1>SATYEN PARAB</h1>
          <h2>Founder and Chief Creative Cow</h2>
          <p>
            Assistant Director (Movies)<br />
            Playwright, Art Director, Director, Actor (Theater)
          </p>
          <h3>Previous Agencies:</h3>
          <p>
            Bates Enterprise,<br /> Publicis India,<br /> Everest Brand Solutions,<br />
            Scarecrow Communications, <br />Salt Brand Solutions
          </p>
          <h3>Awards & Achievements:</h3>
          <p>
          Satyen has received numerous prestigious national awards and international recognitions, including Gold, Silver, and Bronze at the Big Bang Awards (Bangalore Ad Club), MADDYs Awards (Madras Ad Club), and Goafest Abbys. His work has been showcased as the best in the Asia region within the Bates Asia Network, and the Fink Tank logo design was shortlisted in a global contest. Additionally, he has earned accolades such as Best Writer, Best Art Director, and Best Actor at State-Level Theater Awards, along with prestigious State Art Awards from the Maharashtra Government.
          </p>
          <p>
            <a href="https://www.behance.net/SatyenParab" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "underline" }}>
              Founder's previous work
            </a>
            <br />
            <span style={{ color: "white", textDecoration: "underline", cursor: "pointer" }} onClick={openDialog}>
              Brands
            </span>
            <br />
            <span style={{ color: "white", textDecoration: "underline", cursor: "pointer" }} onClick={openMediaDialog}>
              Media
            </span>
          </p>
        </div>
      </section>

      {/* Dialog Box for Brands */}
      <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth maxWidth="lg" classes={{ paper: "dialog" }} icon={true}>
      <img src={brandImage} alt="Brand" className="brand-image" />
      
        </Dialog>
      
    {/* Dialog Box for Media */}
    <Dialog open={isMediaDialogOpen} onClose={closeMediaDialog} fullWidth maxWidth="lg" classes={{ paper: "media-dialog" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Silicon India</AccordionSummary>
          <AccordionDetails>
            <iframe
              src="https://www.siliconindia.com/profiles/satyen-parab-m1bA39L5.html"
              title="Silicon India"
              width="100%"
              height="500px"
              style={{ border: "none" }}
            ></iframe>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Adgully</AccordionSummary>
          <AccordionDetails>
            <iframe
              src="https://www.adgully.com/agvoice-celebrating-100-years-54339.html"
              title="Adgully"
              width="100%"
              height="500px"
              style={{ border: "none" }}
            ></iframe>
          </AccordionDetails>
        </Accordion>
      </Dialog>
    </div>
  );
}

export default About;