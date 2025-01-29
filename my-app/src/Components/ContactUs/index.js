import React, { useState } from 'react';
import './styles.css'; // Import your styles

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Create mailto link
        const mailtoLink = `mailto:satyen@cowtheagency.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
        )}`;
    
        // Open default email client
        window.location.href = mailtoLink;
    
        console.log('Form submitted:', formData);
      };

  return (
    <div id="rs-contact" class="rs-contact style5 modify1 gray-bg5">
                <div class="" style={{width: '90%', margin: 'auto'}}>
                <div className="text-center pt-5">
                <h2 style={{fontSize:'45px', marginBottom:'10px'}}>Contact Us</h2>
            </div>
                    <div class="contact-us" style={{ paddingBottom:'80px'}}>
                        <div class="row margin-0">
                            <div class="col-lg-8" style={{marginRight:'-30px'}}>
                                <div class="contact-widget">
                                    <div class="sec-title5 pt-5 pb-5">
                                        <h2 class="title title2">Get In Touch</h2>
                                    </div>
                                    <div id="form-messages"></div>
                                    <form id="contact-form" method="post"  onSubmit={handleSubmit}>
                                        <fieldset>
                                            <div class="row">
                                                <div class="col-lg-6 mb-3 col-md-6 col-sm-6">
                                                    <input class="from-control" type="text" id="name" name="name" placeholder="Name" required=""/>
                                                </div> 
                                                <div class="col-lg-6 mb-3 col-md-6 col-sm-6">
                                                    <input class="from-control" type="text" id="email" name="email" placeholder="E-Mail" required=""/>
                                                </div>   
                                                <div class="col-lg-6 mb-3 col-md-6 col-sm-6">
                                                    <input class="from-control" type="text" id="phone" name="phone" placeholder="Phone Number" required=""/>
                                                </div>   
                                                <div class="col-lg-6 mb-3 col-md-6 col-sm-6">
                                                    <input class="from-control" type="text" id="Website" name="subject" placeholder="Your Website" required=""/>
                                                </div>
                                          
                                                <div class="col-lg-12 mb-3">
                                                    <textarea class="from-control" id="message" name="message" placeholder="Your message Here" required=""></textarea>
                                                </div>
                                            </div>
                                            <div class="btn-part">                                            
                                                <div class="form-group">
                                                    <input class="readon2 submit-btn con-btn" type="submit" value="Submit Now"/>
                                                </div>
                                            </div>  
                                        </fieldset>
                                    </form> 
                                </div>
                            </div>
                            <div className="col-lg-4" style={{ paddingLeft: '30px', marginTop:"150px" }}>
                               <div class="contact-box">
                                    
                                    <div class="address-box mb-4 " >
                                        <div class="box-icon">
                                            <i class="fa fa-map-marker"></i>
                                        </div>
                                        <div class="address-text">
                                            <span class="label">India Office</span>
                                            <p class="desc">
                                               Mumbai,<br/>
                                                Maharashtra.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="address-box mb-4 " >
                                        <div class="box-icon">
                                            <i class="fa fa-phone"></i>
                                        </div>
                                        <div class="address-text">
                                            <span class="label">Telephone</span>
                                            <p class="desc">
                                                <a href="tel:+9819134779">(+91) 9819-134-779</a>                                            </p>
                                        </div>
                                    </div>
                                    <div class="address-box mb-4 " >
                                        <div class="box-icon">
                                            <i class="fa fa-envelope"></i>
                                        </div>
                                        <div class="address-text">
                                            <span class="label">Mail Us</span>
                                            <p class="desc">
                                                <a href="mailto:satyen@cowtheagency.in">satyen@cowtheagency.in</a>
                                            </p>
                                        </div>
                                    </div>
                                    
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  );
};

export default ContactUs;