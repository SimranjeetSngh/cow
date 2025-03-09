import React, { useState } from "react";
import "./styles.css";
import desktopAbout1 from "../../Images/About us 1.png"; // Desktop version
import desktopAbout2 from "../../Images/About us 2.png";
import desktopAbout3 from "../../Images/About us 3.png";
import brandImage from "../../Images/brands/COW Design-05.jpg";

function About() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

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
            We are not an AD agency, <br /> but an ADD agency that adds <br /> long-term value to elevate
            <br /> your brands to greater heights.
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
            Boosting your business<br />is our business. Because nothing <br /> the cow produces ever go to waste,
            <br /> even the waste is precious manure.
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
          <h2>Founder and Chief Cow</h2>
          <p>
            Assistant Director (Movies)<br />
            Playwright, Art Director, Director, Actor (Theater)
          </p>
          <h3>Ex-Agencies:</h3>
          <p>
            Bates Enterprise,<br /> Publicis India,<br /> Everest Brand Solutions,<br />
            Scarecrow Communications, <br />Salt Brand Solutions
          </p>
          <h3>Awards & Recognitions:</h3>
          <p>
            Gold, Silver, and Bronze: Big Bang Awards (Bangalore Ad Club)<br />
            Silver and Bronze: MADDYs Awards (Madras Ad Club)<br />
            8 Finalists: Goafest Abbys (The Advertising Club)<br />
            Work showcased as the best in Asia within Bates Asia Network<br />
            The Fink Tank Logo Design shortlisted in a worldwide contest<br />
            Best Writer, Best Art Director, Best Actor at State-Level Theater Awards<br />
            State Art Awards by Maharashtra Government<br />
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
            Media
          </p>
        </div>
      </section>

      {/* Dialog Box for Brands */}
      {isDialogOpen && (
        <div className="dialog-overlay" onClick={closeDialog}>
          <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeDialog}>
              <span className="close-icon">×</span>
            </button>
            <img src={brandImage} alt="Brand" className="brand-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default About;